export interface Video {
  id: string;
  title: string;
  description: string;
  published: Date;
  url: string;
  thumbnail: string;
}

const CHANNEL_ID = 'UCqR1s3Jy4bRMN9c5XGLuLOQ';
// A channel's uploads live in a playlist with the same ID, starting UU instead of UC.
const UPLOADS_PLAYLIST = CHANNEL_ID.replace(/^UC/, 'UU');

// Keep only the first paragraph of a description, capped at about 280 characters.
const summarize = (text: string) => {
  const first = (text.split(/\n\s*\n/)[0] ?? '').trim();
  return first.length > 280 ? first.slice(0, 277).trimEnd() + '…' : first;
};

export async function getYouTubeVideos(limit = 10): Promise<Video[]> {
  const key = import.meta.env.YOUTUBE_API_KEY ?? process.env.YOUTUBE_API_KEY;
  if (!key) {
    console.warn('[youtube] YOUTUBE_API_KEY is not set, skipping videos');
    return [];
  }

  try {
    const params = new URLSearchParams({
      part: 'snippet,contentDetails',
      playlistId: UPLOADS_PLAYLIST,
      maxResults: String(Math.min(limit, 50)),
      key,
    });
    const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?${params}`);
    if (!res.ok) {
      console.warn(`[youtube] API returned HTTP ${res.status}: ${await res.text()}`);
      return [];
    }

    const data = await res.json();
    return (data.items ?? [])
      .filter((item: any) => !['Private video', 'Deleted video'].includes(item.snippet?.title))
      .map((item: any) => {
        const id = item.contentDetails?.videoId ?? item.snippet?.resourceId?.videoId;
        return {
          id,
          title: item.snippet.title,
          description: summarize(item.snippet.description ?? ''),
          published: new Date(item.contentDetails?.videoPublishedAt ?? item.snippet.publishedAt),
          url: `https://www.youtube.com/watch?v=${id}`,
          thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        };
      });
  } catch (err) {
    console.warn('[youtube] request failed:', err);
    return [];
  }
}