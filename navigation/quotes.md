---
layout: base
title: Quotes
---
{% include nav/home.html %}

<br>
<center>
    <button class="my-button" id="quoteButton">Show Random quote</button>
    <br>
    <br>
    <p id="quoteDisplay"></p>
<center>

<script src="{{site.baseurl}}/assets/js/miniproject.js"></script>
<script>
document.getElementById('quoteButton').addEventListener('click', displayRandomquote);
</script>

<style>
.my-button {
    background: linear-gradient(45deg, #204046, #75ff97); /* Cool blue gradient */
    border: none !important;
    color: white !important;
    padding: 15px 32px !important;
    text-align: center !important;
    text-decoration: none !important;
    display: inline-block !important;
    font-size: 16px !important;
    margin: 10px !important;
    cursor: pointer !important;
    transition: background 0.3s, transform 0.3s, box-shadow 0.3s !important;
    border-radius: 12px !important;
    position: relative !important;
    overflow: hidden !important;
    justify-content: center;
}

/* Hover effect */
.my-button:hover {
    transform: scale(1.1); /* Slightly larger */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add a shadow */
}
</style>