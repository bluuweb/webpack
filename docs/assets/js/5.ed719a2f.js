(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{169:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"fundamentos-de-webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fundamentos-de-webpack","aria-hidden":"true"}},[a._v("#")]),a._v(" Fundamentos de Webpack")]),a._v(" "),s("p",[a._v("Veremos como personalizar nuestros archivos JS de salida.")]),a._v(" "),s("h2",{attrs:{id:"webpack-config-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#webpack-config-js","aria-hidden":"true"}},[a._v("#")]),a._v(" webpack.config.js")]),a._v(" "),s("p",[a._v("Para esto necesitamos crear un archivo de configuración (en el directorio raíz) el cual se llamará:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("webpack.config.js\n")])])]),s("p",[a._v("y tendrá lo siguiente:")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[a._v(" ")]),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./src/index.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'app.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("resolve")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'dist'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("p",[a._v("En el "),s("strong",[a._v("output: {filename}")]),a._v(" estamos definiendo la salida por lo tanto podríamos cambiar el nombre a nuestro gusto. Ahora ejecutamos para comprobar la salida:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("npx webpack --config webpack.config.js\n")])])]),s("h2",{attrs:{id:"script"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script","aria-hidden":"true"}},[a._v("#")]),a._v(" Script")]),a._v(" "),s("p",[a._v("Podemos configurar nuestros propios script en el archivo "),s("strong",[a._v("package.json")]),a._v(":")]),a._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"build"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"webpack --mode development"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"produccion"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"webpack -p"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"watch"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"webpack --w --mode development"')]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])])]),s("p",[a._v("El primer script define la compilación de nuestro proyecto js, el segundo nos sirve para pasar a producción y el tercero para poder mantener un observador de cambios.")])])}],!1,null,null,null);t.default=e.exports}}]);