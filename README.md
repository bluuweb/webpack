# Introducción a Webpack

Está guía está diseñada para poder obtener el código del curso de **Webpack** de una forma amigable y en español.

::: warning Aviso
Esta guía está en constante actualización, podría no estar completa.
:::

## ¿Qué es Webpack?
Es un agrupador de módulos principalmente para JavaScript, pero puede transformar activos front-end como HTML, CSS e imágenes si se incluyen los complementos correspondientes.
<img src="/webpack/img/webpack-1.PNG">

En estos tutoriales aprenderemos a minificar nuestro código (para que sea más liviano), hacerlo compatible con otras versiones de Javascript (utilizando Babel) y aprenderemos a trabajar con Css y Sass.

## Instalación y práctica
Para comenzar a trabajar visitaremos la [página oficial](https://webpack.js.org/) donde podemos viajar a la guía práctica de nuestro primer proyecto con Webpack: [Guía de instalación](https://webpack.js.org/guides/getting-started/#basic-setup)

#### Requisitos:
- Tener instalado [Node.js](https://nodejs.org/es/) en tu computadora. Recomiendo reiniciar el pc una vez instalado.
- Utilizaremos Visual Studio Code (Puedes utilizar el editor de código que gustes :))

#### 1. Package.json
Creamos una carpeta en nuestro pc, abrimos dicha carpeta en VSC (Visual Studio Code) y abrimos la terminal para ejecutar:

```
npm init -y
```

Esto creará nuestro archivo base **package.json** donde podremos configurar las dependencias que utilizará nuestro proyecto.

#### 2. Instalar Webpack y Webpack CLI
Ejecutamos también en nuestra terminal:

```
npm install webpack --save-dev
npm install webpack-cli --save-dev
```

Lo cual instalará **webpack** y **webpack cli**

#### 3. Crear index.html y index.js
Comenzaremos con una estructura básica de un proyecto web creando un index.html y dentro de la carpeta src un index.js:

```
  webpack-demo
  |- package.json
+ |- index.html
+ |- /src
+   |- index.js
```

index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Webpack</title>
</head>
<body>
  <h1>Curso de Webpack</h1>
</body>
</html>
```

src/index.js
```js
const saludo = 'Hola mundo con webpack';
console.log(saludo);
```

#### 4. Ejecuta:
Nuevamente en la terminal ejecuta:
```
npx webpack
```

Y tan tan... ahora tendrás un archivo minificado con el código js en la carpeta **/dist/main.js**, por lo tanto podemos mover nuestro index.html a la carpeta **/dist** y llamar a tal archivo js.

```html{12}
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Webpack</title>
</head>
<body>
  <h1>Curso de Webpack</h1>

  <script src="main.js"></script>
</body>
</html>
```
Ejecuta en el navegador y tendrías que ver la consola que configuramos :)