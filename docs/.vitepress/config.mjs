import { defineConfig } from "vitepress";

export default defineConfig({
  title: "CacheSense",
  description: "Lightweight cache analytics for Node.js",
  base: "/",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "Guide", link: "/" },
      { text: "Installation", link: "/installation" },
      { text: "Quick Start", link: "/quick-start" },
      { text: "API", link: "/api" }
    ],
    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Introduction", link: "/" },
          { text: "Installation", link: "/installation" },
          { text: "Quick Start", link: "/quick-start" }
        ]
      },
      {
        text: "Reference",
        items: [
          { text: "API", link: "/api" }
        ]
      }
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/MiniduOshan/cachesense"
      }
    ],
    footer: {
      message: "Lightweight cache analytics for Node.js",
      copyright: "MIT License"
    },
    search: {
      provider: "local"
    }
  }
});