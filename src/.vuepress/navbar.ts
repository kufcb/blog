import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: 'JAVA系列',
    icon: 'java',
    link: '/java/'
  },
  {
    text: 'NodeJs系列',
    icon: 'nodejs',
    link: '/nodejs/'
  },
  {
    text: '其他',
    icon: 'other',
    link: '/other/'
  },
]);
