# Fundamentos de Webpack
Veremos como personalizar nuestros archivos JS de salida. 

## webpack.config.js
Para esto necesitamos crear un archivo de configuración (en el directorio raíz) el cual se llamará:

```
webpack.config.js
```
y tendrá lo siguiente:

```js{6}
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

En el **output: {filename}** estamos definiendo la salida por lo tanto podríamos cambiar el nombre a nuestro gusto. Ahora ejecutamos para comprobar la salida:

```
npx webpack --config webpack.config.js
```

## Script
Podemos configurar nuestros propios script en el archivo **package.json**:

```json
"scripts": {
    "build": "webpack --mode development",
    "produccion": "webpack -p",
    "watch": "webpack --w --mode development"
  },
```

El primer script define la compilación de nuestro proyecto js, el segundo nos sirve para pasar a producción y el tercero para poder mantener un observador de cambios.
