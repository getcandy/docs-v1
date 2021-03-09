const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'GetCandy Docs',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: "apple-touch-icon", type: "image/png", sizes: "180x180", href: "/apple-touch-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
    ['link', { rel: "manifest", href: "/site.webmanifest"}],
    ['link', { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5"}],
    ['meta', { name: "msapplication-TileColor", content: "#da532c"}],
    ['meta', { name: "theme-color", content: "#ffffff"}]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo: '/getcandy_icon.svg',
    repo: 'getcandy',
    docsDir: '',
    lastUpdated: false,
    docsRepo: 'getcandy/docs',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: 'Help us improve this page!',
    smoothScroll: true,
    nav: [
      {
        text: 'API Guide',
        link: '/api/',
      },
      {
        text: 'Hub Guide',
        link: '/hub/'
      },
      { text: 'API Reference', link: 'https://api-reference.vercel.app/' }
    ],
    sidebar: {
      '/api/': [
        {
          title: 'Prologue',
          collapsable: false,
          children: [
            'prologue/release',
            'prologue/upgrading',
            'prologue/contribution',
          ]
        },
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            ['', 'Welcome'],
            'getting-started/installation',
            'getting-started/configuration',
            'getting-started/api-reference',
          ]
        },
        {
          title: 'Concepts',
          collapsable: false,
          children: [
            'concepts/channels',
            'concepts/routes',
            'concepts/languages',
            'concepts/versioning',
            'concepts/recyclebin',
          ]
        },
        {
          title: 'Catalogue',
          collapsable: false,
          children: [
            'catalogue/attributes',
            'catalogue/products',
            'catalogue/categories',
            'catalogue/collections',
            'catalogue/search'
          ]
        },
        {
          title: 'Order Processing',
          collapsable: false,
          children: [
            'order-processing/baskets',
            'order-processing/customers',
            'order-processing/users',
            'order-processing/addresses',
            'order-processing/orders',
            'order-processing/shipping',
            'order-processing/payments',
            'order-processing/discounts',
          ]
        },
        {
          title: 'Misc',
          collapsable: false,
          children: [
            'misc/reports',
            'misc/settings',
            'misc/extending',
            'misc/info'
          ]
        }
      ],
      '/hub/': [
        {
          title: 'Prologue',
          collapsable: false,
          children: [
            'prologue/release',
            'prologue/upgrading',
            'prologue/contribution',
          ]
        },
        {
          title: 'Getting Started',
          collapsable: false,
          children: [
            ['', 'Welcome'],
            'getting-started/installation',
            'getting-started/troubleshooting',
          ]
        },
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'one-click-copy'
  ]
}
