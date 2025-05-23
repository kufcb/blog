import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog/",

  lang: "zh-CN",
  title: "博客",
  description: "杨业深的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
