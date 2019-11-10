module.exports = {
  head: [
    ['link', { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png"}],
    ['link', { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png"}],
    ['link', { rel: "manifest", href: "/manifest.json"}],
    ['link', { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#3a0839"}],
    ['link', { rel: "shortcut icon", href: "/favicon.ico" }],
  ],
  title: 'Manguito Blue - Blog',
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-149793240-1'
      }
    ]
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en-US', // this will be set as the lang attribute on <html>
      title: 'Manguito Blue Blog',
      description: 'Blog for sharing knowledge about technology'
    },
    '/es/': {
      lang: 'es-MX',
      title: 'Manguito Blue Blog',
      description: 'Blog para compartir conocimiento sobre tecnología'
    }
  },
  themeConfig: {
    locales: {
      // The key is the path for the locale to be nested under.
      // As a special case, the default locale can use '/' as its path.
      '/': {
        lang: 'en-US', // this will be set as the lang attribute on <html>
        title: 'Manguito Blue Blog',
        description: 'Blog for sharing knowledge about technology',
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Blog', link: '/blog/' }
        ]
      },
      '/es/': {
        lang: 'es-MX',
        title: 'Manguito Blue Blog',
        description: 'Blog para compartir conocimiento sobre tecnología',
        // text for the language dropdown
        selectText: 'Idiomas',
        // label for this locale in the language dropdown
        label: 'Español',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Idiomas',
        nav: [
          { text: 'Inicio', link: '/es/' },
          { text: 'Blog', link: '/es/blog/' }
        ]
      }
    }
  }
}