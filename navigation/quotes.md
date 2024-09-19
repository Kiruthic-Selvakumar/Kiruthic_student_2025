---
layout: base
title: Quotes
---
{% include nav/home.html %}

<br>
<button style="border-radius: 10px; cursor: pointer; margin-left: 20px;" id="quoteButton">Show Random quote</button>
<p id="quoteDisplay"></p>

<script src="{{site.baseurl}}/assets/js/miniproject.js"></script>
<script>
document.getElementById('quoteButton').addEventListener('click', displayRandomquote);
</script>