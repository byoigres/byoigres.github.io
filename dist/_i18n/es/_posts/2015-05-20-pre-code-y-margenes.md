---
layout: post
title: "Código fuente y margenes"
date: 2015-05-20 13:02:00
categories: css html tips
author: sergio
---

Hoy por la mañana, al estár editando una presentación utilizando [reveal.js] me
di a la tarea de agregar el bonito estilo [Monokai] que utiliza [SublimeText] a
mi presentación, todo iba marchando perfectamente hasta que gracias a la
propiedad _box-shadow_ de un elemento _pre_ me doy cuenta que habia un espacio
que al parecer no era _margin_ o _padding_ dentro de la etiqueta _pre_.

![No es margin ni padding]({{ "/images/posts/1.png" | prepend: site.baseurl }})

Entonces comencé a utilizar las herramientas de desarrollo de Firefox para
eliminar todo posible margin o padding que viniera con el tema para luego hacer
el cambio en las hojas de estilo. Margin, padding, border, line-height ¡nada
funcionaba!, ese maldito espacio aún seguia ahí.

Después de unos 30 minutos tratando de eliminar todos los estilos del sitio para
saber que era ese espacio tuve que recurrir a [googlear] que pasaba cuando se
utiliza una etiqueta _code_ dentro de una etiqueta _pre_ y lo que me encontré
es para tomarlo con gracia por ser algo tan simple pero a la vez es muy
interesante saber que comportamiento tienen las etiquetas ya que después de saber
la razón de por que aparecian esos espacios todo era mas lógico.

El código que estaba utlizando era el siguiente:

{% highlight html %}
<pre>
    <code data-trim class="php5">

1.- Hello
&lt;?php
echo " world!";
$variable = "2.- Hello PHP";
?&gt
&lt;/p&gt;
&lt;br&gt;
&lt;? echo $variable; ?&gt; &lt;!-- Con short_open_tag habilitado --&gt;
&lt;br&gt;
&lt;?= $variable ?&gt; &lt;!-- Forma abreviada de echo (v5.4+) --&gt;
    </code>
</pre>
{% endhighlight %}

Si se dan cuenta, para cuestiones de una mejor lectura del código utilizé un
salto de linea entre las etiquetas _pre_ y _code_ tanto al abrilas como al
cerrarlas. En realidad el salto de línea no importa, lo que si importa son los
espacios que utilizé para indentar el bloque de la etiqueta _pre_ y de acuerdo a
[MDN] la etiqueta _pre_ hace lo siguiente:

> The HTML Preformatted Text (&lt;pre&gt;) represents preformatted text. Text within
this element is typically displayed in a non-proportional font exactly as it is
laid out in the file. **Whitespaces inside this element are displayed as typed**.

Entonces, creo que con eso queda claro, olvidense de indentar esa etiqueta y eliminen
todos esos molestos espacios que hay entre cada una de ellas.


{% highlight html %}
<pre><code data-trim class="php5">
&lt;?php

echo "Hello world!";

?&gt;
</code></pre>
{% endhighlight %}

[reveal.js]: http://lab.hakim.se/reveal-js
[Monokai]: https://github.com/isagalaev/highlight.js/blob/master/src/styles/monokai_sublime.css
[googlear]: https://es.wikipedia.org/wiki/Googlear
[SublimeText]: http://www.sublimetext.com/
[MDN]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre
