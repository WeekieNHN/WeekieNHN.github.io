export interface BlueskyImage {
  thumb: string;
  full: string;
  alt: string;
  ratio?: number;
}

export interface BlueskyPost {
  id: string;
  text: string;
  date: Date;
  url: string;
  images: BlueskyImage[];
  links: string[];
}

const HANDLE = 'weekiepedia.org';

// Any post containing this hashtag is kept out of the feed.
const HIDE_TAG = '#nofeed';

// Old posts to hide by hand. Use the last part of the post's URL, for example:
// https://bsky.app/profile/weekiepedia.org/post/3kabc123xyz  ->  '3kabc123xyz'
const HIDDEN_POSTS: string[] = [];

const rkeyOf = (uri: string) => uri.split('/').pop() ?? '';

export async function getBlueskyPosts(limit = 10): Promise<BlueskyPost[]> {
  try {
    const params = new URLSearchParams({
      actor: HANDLE,
      filter: 'posts_no_replies',
      limit: '100',
    });
    const res = await fetch(`https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?${params}`);
    if (!res.ok) {
      console.warn(`[bluesky] API returned HTTP ${res.status}`);
      return [];
    }

    const data = await res.json();
    return (data.feed ?? [])
      .filter((item: any) => !item.reason) // skip reposts and pins
      .filter((item: any) => {
        const text: string = item.post.record?.text ?? '';
        const hiddenByTag = text.toLowerCase().includes(HIDE_TAG);
        const hiddenByList = HIDDEN_POSTS.includes(rkeyOf(item.post.uri));
        return !hiddenByTag && !hiddenByList;
      })
      .slice(0, limit)
      .map((item: any) => {
        const post = item.post;

        // Images can sit directly on the post or inside a "record with media" embed.
        const rawImages = post.embed?.images ?? post.embed?.media?.images ?? [];

        // Every link in the post: clickable links in the text, plus any link-card embed.
        const facetLinks = (post.record?.facets ?? []).flatMap((facet: any) =>
          (facet.features ?? [])
            .filter((feature: any) => feature.$type === 'app.bsky.richtext.facet#link')
            .map((feature: any) => feature.uri)
        );
        const embedLink = post.embed?.external?.uri ?? post.embed?.media?.external?.uri;
        const links: string[] = [...facetLinks, ...(embedLink ? [embedLink] : [])];

        return {
          id: post.uri,
          text: post.record?.text ?? '',
          date: new Date(post.record?.createdAt ?? post.indexedAt),
          url: `https://bsky.app/profile/${post.author.handle}/post/${rkeyOf(post.uri)}`,
          images: rawImages.map((img: any) => ({
            thumb: img.thumb,
            full: img.fullsize ?? img.thumb,
            alt: img.alt ?? '',
            ratio: img.aspectRatio ? img.aspectRatio.width / img.aspectRatio.height : undefined,
          })),
          links,
        };
      });
  } catch (err) {
    console.warn('[bluesky] request failed:', err);
    return [];
  }
}