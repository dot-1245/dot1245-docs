import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

const vitePressOptions = {
  title: "dot1245's document",
  description: "document about me and my stuff or services.",
  head: [
      ['link', { rel: 'icon', href: '/public/ICON.png' }]
    ],
  themeConfig: {
    // サイトロゴの設定（public/ICON.pngがある前提）
    logo: '/ICON.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Link list', link: '/list' }
    ],

    // 編集リンクの設定（リポジトリ名は自分のものに書き換えてください！）
    editLink: {
      pattern: 'https://github.com/dot-1245/dot1245-docs/edit/main/:path',
      text: 'GitHubでこのページを編集する'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dot1245/リポジトリ名' },
      { icon: 'discord', link: 'https://discord.gg/cnrV7NzepD' }
    ]
  }
}

// ここで一つの設定として書き出す
export default defineConfig(withSidebar(vitePressOptions, {
  documentRootPath: '/',
  collapsed: false,
  useTitleFromFileHeading: true,
}))
