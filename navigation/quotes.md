---
layout: page
title: Quote Generator
---
<br>
<button style="border-radius: 10px; cursor: pointer; margin-left: 20px;" id="quoteButton">Show Random quote</button>
<p id="quoteDisplay"></p>

<script src="{{site.baseurl}}/assets/js/miniproject.js"></script>
<script>
document.getElementById('quoteButton').addEventListener('click', displayRandomquote);
</script>