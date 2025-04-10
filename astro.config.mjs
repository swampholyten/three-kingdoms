import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightSidebarTopics from "starlight-sidebar-topics";

import starlightThemeRapidePlugin from "starlight-theme-rapide";

export default defineConfig({
  integrations: [
    starlight({
      customCss: ["@/styles/global.css"],
      plugins: [
        starlightThemeRapidePlugin(),

        starlightSidebarTopics([
          {
            label: "魏书",
            link: "/wei/",
            icon: "open-book",
            items: Array.from({ length: 2 }, (_, i) => `wei/${i + 1}`),
            badge: {
              text: "更新中",
              variant: "caution",
            },
          },
          {
            label: "蜀书",
            link: "/shu/",
            icon: "information",
            items: Array.from({ length: 15 }, (_, i) => `shu/${i + 1}`),
            badge: {
              text: "完成",
              variant: "success",
            },
          },
          {
            label: "吴书",
            link: "/wu/",
            icon: "information",
            items: Array.from({ length: 2 }, (_, i) => `wu/${i + 1}`),
            badge: {
              text: "更新中",
              variant: "caution",
            },
          },
        ]),
      ],
      locales: {
        root: {
          label: "中文",
          lang: "zh-CN",
        },
      },
      title: "三国志",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/swampholyten",
        },
      ],
    }),
  ],
});
