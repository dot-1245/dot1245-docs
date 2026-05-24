import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

const vitePressOptions = {
  title: "dot1245's document",
  description: "document about me and my stuff or services.",
  head: [
    ['link', { rel: 'icon', href: '/ICON.png' }]
  ],
  themeConfig: {
    logo: '/ICON.png',

    // ✨ 検索機能を追加
    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/dot-1245/dot1245-docs/edit/main/:path',
      text: 'Edit this page on GitHub'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dot-1245/dot1245-docs' },
      { icon: 'discord', link: 'https://d.dot1245.net/' }
    ]
  }
}


export default defineConfig(withSidebar(vitePressOptions, {
  documentRootPath: '', 


  ignoreList: ['README.md'], 


  useDirectoriesAsObjectKeys: true,

  collapsed: false,
  useTitleFromFileHeading: false,
}))
