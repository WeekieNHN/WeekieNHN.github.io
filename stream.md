---
layout: single
title: Livestream
permalink: /live/
---

<html>
  <body>
    <!-- Add a placeholder for the Twitch embed -->
    <div id="twitch-embed"></div>

    <!-- Load the Twitch embed script -->
    <script src="https://embed.twitch.tv/embed/v1.js"></script>

    <!-- Create a Twitch.Embed object that will render within the "twitch-embed" element. -->
    <script type="text/javascript">
      var embed = new Twitch.Embed("twitch-embed", {
        width: 854,
        height: 480,
        channel: "weekienhn",
        layout: "video",
        autoplay: false,
        // Only needed if this page is going to be embedded on other websites
        parent: ["embed.example.com", "othersite.example.com"]
      });

      embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
        var player = embed.getPlayer();
        player.play();
      });
    </script>
  </body>
</html>

