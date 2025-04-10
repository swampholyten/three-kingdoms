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
            items: Array.from({ length: 30 }, (_, i) => `wei/${i + 1}`),
            // badge: {
            //   text: "已完成",
            //   variant: "success",
            // },
          },
          {
            label: "蜀书",
            link: "/shu/",
            icon: "rocket",
            items: Array.from({ length: 15 }, (_, i) => `shu/${i + 1}`),
            // badge: {
            //   text: "已完成",
            //   variant: "success",
            // },
          },
          {
            label: "吴书",
            link: "/wu/",
            icon: "document",
            items: Array.from({ length: 20 }, (_, i) => `wu/${i + 1}`),
            // badge: {
            //   text: "已完成",
            //   variant: "success",
            // },
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
