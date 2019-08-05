module.exports = {
  title: 'Bootstrap 4',
  description: 'Aprende a utilizar Webpack en tus proyectos web',
  base: '/webpack',
  locales:{
    '/':{
      lang: 'es-ES'
    }
  },
  themeConfig:{
    nav: [
      { text: 'Guía', link: '/' },
      // { text: 'Guia', link: '/docs/' },
      { text: 'Youtube', link: 'https://youtube.com/bluuweb' },
    ],
    sidebar:
      [
        '/',
        '/fundamentos/',
        '/babel/',
        '/parcel-js/',
      ]
  }
 
}