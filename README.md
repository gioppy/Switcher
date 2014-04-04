Switcher
========

<p>Create simple and lightweight switcher/dropdown menu only in HTML + jQuery.</p>

<h2>HTML</h2>

<p>The HTML has a simple structure</p>

<pre>
  &lt;div class=&quot;switcher-container&quot;&gt;
    &lt;div class=&quot;filter-widget&quot;&gt;
      &lt;span class=&quot;filter-active&quot;&gt;&lt;/span&gt;
      &lt;div class=&quot;switcher&quot;&gt;
        //Insert here the content
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
</pre>

<h2>jQuery</h2>

<p>Just call simple:</p>
<pre>
  jQuery('.switcher-container').switcher();
</pre>
<p>The plugin accept only one options, if you want to follow the links inside the dropdown instead of close and make something via javascript:</p>
<pre>
  jQuery('.switcher-container').switcher({follow:true});
</pre>

<h2>CSS</h2>
<p>Apply the style based on your design!</p>

<h2>Examples</h2>
<p>For a complete reference list with all the demo visit the demo page http://switcher.giovannibuffa.it/docs</p>