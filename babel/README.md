# Babel.js
Nos permite compilar a diferentes versiones nuestro código JS. [Sitio oficial](https://babeljs.io/setup#installation)

## 1. Instalar dependencias
Ejecutar en nuestro proyecto:
```
npm install --save-dev babel-loader @babel/core
```

## 2. webpack.config.js
Agregar configuración al archivo **webpack.config.js**:
```js{9-13}
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'salida-compilada.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
```

## 3. .babelrc
Crear el archivo de configuración **.babelrc** pero antes ejecutar:
```
npm install @babel/preset-env --save-dev
```

y dentro del archivo **.babelrc**:
```json
{
  "presets": ["@babel/preset-env"]
}
```

Esto habilita las transformaciones para ES2015 +
