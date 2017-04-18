---
layout: post
title: "Source and margins"
date: 2015-05-20 13:02:00
categories: css html tips
author: sergio
---

This morning when I was trying to edit some slides using [reveal.js] I started to add  the prety [Monokai] style that [SublimeText] uses, everything was doing well until thanks to _box-shadow_ property of an _pre_ element I noticed some kind of space that wasn't a _margin_ or _padding_ inside _pre_ tag.

![There isn't margin nor padding]({{ "/images/posts/1.png" | prepend: site.baseurl_root }})

Then I started to `debug` the styles using Firefox devtools to remove all posible margin or padding comming with the template to make the change in the stylesheets later. `Margin`, `padding`, `border`, `line-height`, any of them make that strange space disapear, that anoying space was still right there.

After 30 minutes trying to delete every posible style to know what was that space I decided to google what was happening when a _code_ tag is inside a _pre_ tag and what I found it could be funny and stupid at the same time because programmers often forgot to read the documentation before using something. After knowing what was really happening everything makes so more sense and was logic.

This is the code I was using in the slides:

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

If you take a closer look you'll notice that I used a `line-break` and some spaces between _pre_ and _code_ tags for readability. Actually the `line-break` doesn't matter but the spaces does and acording to [MDN] what really happens with the _pre_ tag is:

> The HTML Preformatted Text (&lt;pre&gt;) represents preformatted text. Text within
this element is typically displayed in a non-proportional font exactly as it is
laid out in the file. **Whitespaces inside this element are displayed as typed**.

So, I guess this is crystal clear now, forget to indent _pre_ tag and delete all the those spaces inside it.

{% highlight html %}
<pre><code data-trim class="php5">
&lt;?php

echo "Hello world!";

?&gt;
</code></pre>
{% endhighlight %}

[reveal.js]: http://lab.hakim.se/reveal-js
[Monokai]: https://github.com/isagalaev/highlight.js/blob/master/src/styles/monokai_sublime.css
[SublimeText]: http://www.sublimetext.com/
[MDN]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre
