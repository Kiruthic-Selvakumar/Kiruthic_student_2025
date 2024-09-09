---
layout: page
title: Random Famous Quotes
---

<button id="quoteButton">Show Random quote</button>
<p id="quoteDisplay"></p>

<script src="{{site.baseurl}}/assets/js/miniproject.js"></script>
<script>
document.getElementById('quoteButton').addEventListener('click', displayRandomquote);
</script>