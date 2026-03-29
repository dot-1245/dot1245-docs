import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

const vitePressOptions = {
  title: "dot1245's document",
  description: "document about me and my stuff or services.",
  head: [
      ['link', { rel: 'icon', href: '/public/ICON.png' }] // ここは触ってません！(｀･ω･´)ゞ
    ],
  themeConfig: {
    logo: '/ICON.png',

    // ✨ 検索機能を追加
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Link list', link: '/list' }
    ],

    editLink: {
      pattern: 'https://github.com/dot-1245/dot1245-docs/edit/main/:path',
      text: 'GitHubでこのページを編集する'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dot-1245/dot1245-docs' }, // 正しいURLに修正
      { icon: 'discord', link: 'https://discord.gg/cnrV7NzepD' }
    ]
  }
}

export default defineConfig(withSidebar(vitePressOptions, {
  documentRootPath: '/',
  collapsed: false,
  useTitleFromFileHeading: true,
}))
