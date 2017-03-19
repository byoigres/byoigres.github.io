---
layout: post
title: "Utiliza npm v3.x sin la barra de progreso y obtendrás una instalación más rápida"
date: 2016-01-27 13:02:00
categories: npm node bugs
author: sergio
---

{: .center-image}
![No es margin ni padding]({{ "/images/posts/npm-progress-bar-twitter.png" | prepend: site.baseurl }})

Cada que ejecutamos un comando `npm install` con la versión 3 de npm  podemos
ver una bonita barra de progreso que nos dice el porcentaje que lleva la
instalación de las dependencias que estamos instalando.

Con o sin barra de progreso [npm] se ha vuelto más lento desde la salida de la
versión 3. Tanto así que desde hace algún tiempo alguién ha creado una versión
alternativa para manejar los paquetes de node.js llamada [ied] con el objetivo
de obtener un mayor rendimiento.

Seamos claros, `npm install` es el comando que con mayor frecuencia utilizamos,
por lo menos deberia hacerlo bien ¿o no?

Vamos a realizar un ejemplo instalando una cantidad significativa de dependencias
utilizando y no la barra de progreso. El listado de dependencias es el siguiente:

{% highlight json %}
{
  "assets-webpack-plugin": "^3.2.0",
  "babel-cli": "^6.4.5",
  "babel-loader": "^6.2.1",
  "babel-preset-es2015": "^6.3.13",
  "babel-preset-react": "^6.3.13",
  "classnames": "^2.2.3",
  "clean-webpack-plugin": "^0.1.6",
  "css-loader": "^0.23.1",
  "eslint": "^1.10.3",
  "eslint-config-airbnb": "^4.0.0",
  "eslint-loader": "^1.2.0",
  "eslint-plugin-react": "^3.16.1",
  "extract-text-webpack-plugin": "^1.0.1",
  "flexbox-grid": "^1.0.0",
  "flexboxgrid": "^6.3.0",
  "h2o2": "^5.0.0",
  "hapi": "^12.1.0",
  "hapi-webpack-plugin": "^1.3.0",
  "history": "^1.17.0",
  "html-webpack-plugin": "^2.7.2",
  "inert": "^3.2.0",
  "isomorphic-fetch": "^2.2.1",
  "node-sass": "^3.4.2",
  "react": "^0.14.6",
  "react-dom": "^0.14.6",
  "react-flexbox-grid": "^0.9.2",
  "react-hot-loader": "^1.3.0",
  "react-redux": "^4.0.6",
  "react-router": "^1.0.3",
  "redux": "^3.0.6",
  "redux-router": "^1.0.0-beta7",
  "redux-thunk": "^1.0.3",
  "sass-loader": "^3.1.2",
  "strip-loader": "^0.1.1",
  "style-loader": "^0.13.0",
  "webpack": "^1.12.12",
  "webpack-dev-server": "^1.14.1",
  "webpack-hot-middleware": "^2.6.2"
}
{% endhighlight %}

Tomaremos el tiempo en cada ejecución y veremos que existe un ligero rendimiento
al instalar las dependencias sin mostrar la barra de progreso.

<script type="text/javascript" src="https://asciinema.org/a/34946.js" id="asciicast-34946" async></script>


Con barra de progreso: 3 minutos con 8 segundos, sin barra de progreso **2
minutos con 44 segundos**, esto es un 12% mas rápido.

Toda esta controversia nacio de un
[comentario en un issue en github](https://github.com/npm/npm/issues/8826#issuecomment-155762361)
en donde el usuario [@andrenarchy] publica lo siguiente:

{% highlight sh %}
$ npm set progress=false
$ rm -rf node_modules
$ time npm install
[...]
real    5m10.601s
user    4m56.435s
sys 0m36.003s

$ npm set progress=true
$ rm -rf node_modules
$ time npm install
[...]
real    21m13.415s
user    20m36.752s
sys 0m42.010s
{% endhighlight %}

¡Sin mostrar la barra de progreso reducimos el tiempo de instalación de **21
minutos con 13 segundos** a **5 minutos con 10 segundos**!

Esa instalación probablemente contiene muchas dependencias, pero inclusive en el
[tweet que Gavin Joyce publicó](https://twitter.com/gavinjoyce/status/691773956144119808)
mostrando el mismo ejemplo, el tiempo de instalación de las dependencias se redujo
considerablemente de **3 minutos con 35 segundos** a **1 minuto con 53**.

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">It sounds crazy, but disabling npm&#39;s progress bar yields a 2x npm install speed improvement for me <a href="https://t.co/ChXxSepCBK">pic.twitter.com/ChXxSepCBK</a></p>&mdash; Gavin Joyce (@gavinjoyce) <a href="https://twitter.com/gavinjoyce/status/691773956144119808">January 26, 2016</a></blockquote>

> **¿Qué está causando tal cosa?**

Después de un genial y profundo analisis mostrado en los comentarios del issue
[#11283] por el usuario [@samccone] nos percatamos de que hay una problema en el
paquete [gauge] al momento de llamar la función `show`, y como el mundo del Open
Source es impresionante basto con unas pocas horas para que alguien llegara con
una [solución](https://github.com/iarna/gauge/commit/a7ab9c906bb72aa0ed8996a00db2cd35a22d5992).


<blockquote class="twitter-tweet" data-conversation="none" lang="en"><p lang="en" dir="ltr"><a href="https://twitter.com/softwarefloyd">@softwarefloyd</a> <a href="https://twitter.com/gavinjoyce">@gavinjoyce</a> bug found and fixed!</p>&mdash; Laurie Voss (@seldo) <a href="https://twitter.com/seldo/status/692192238445711360">January 27, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Esperemos que en los proximos _releases_ de _npm_ podamos disfrutar de este exelente cambio.

[@andrenarchy]: https://github.com/andrenarchy
[npm]: https://www.npmjs.com/package/npm
[ied]:http://gugel.io/ied/
[#11283]: https://github.com/npm/npm/issues/11283#issuecomment-175246823
[@samccone]: https://github.com/samccone
[gauge]: https://github.com/iarna/gauge
