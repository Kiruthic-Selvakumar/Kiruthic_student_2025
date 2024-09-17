---
layout: page
title: Cookie Clicker
---

<!-- Cookie Clicker Game html -->

<div style="text-align: center; margin-top: 50px;">
    <!-- Cookie Image -->
    <img id="cookie" src="{{site.baseurl}}/images/cookie.png" alt="Cookie" style="width: 170px; height: 170px; cursor: pointer;">
    <!-- Display Score -->
    <div id="score" style="font-size: 24px; margin-top: 20px;">Cookies: 0</div>
    <!-- Shop -->
    <div>
        <h3>Shop:</h3>
        <br>
        <!-- Button to purchase Cookie Monsters -->
        <button id="helper" style="border-radius: 10px; cursor: pointer;">
            Cookie Monster
            Cost: 10 Cookies
        </button>
        <br>
        <!-- Displays Number of Cookie Monsters -->
        <p id="helperNum"> Cookie Monsters: 0</p>
    </div>
</div>
<!-- Audio for Cookie Eating Noise-->
<audio id="clickSound" src="{{site.baseurl}}/audio/cookiecrunch.mp3">


<!-- Cookie Clicker Game -->
<script>
    //define variables
    let score = 0;
    let helperValue = 0;
    const clickSound = document.getElementById('clickSound');

    //Buy a Cookie Monster from the Shop
    document.getElementById('helper').addEventListener('click', function() {
        if (score >=10) {
            helperValue += 1;
            score -= 10;
            document.getElementById('helperNum').textContent = "Cookie Monsters: " + helperValue;
            document.getElementById('score').textContent = 'Cookies: ' + score;

        }
    })

    //Click the Cookie to gain one
    document.getElementById('cookie').addEventListener('click', function() {
        score+=1;
        document.getElementById('score').textContent = 'Cookies: ' + score;

        //play the cookie eating noise
        clickSound.play()
    });

    //Cookie Monsters each add a cookie one per second
    setInterval(function(){
        score += helperValue;
        document.getElementById('score').textContent = 'Cookies: ' + score;
    }, 1000)
</script>
