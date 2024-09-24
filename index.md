---
layout: base
title: Student Home 
description: Home Page
image: /images/mario_animation.png
hide: true
---

{% include nav/home.html %}

Hi my name is Kiruthic, and I am an AP Computer Science Principles student. This is a place where you can find all of my coding creations. Visit about me to learn more about me, my background, and my interests. Or click on Tools Step Journey to learn some of the difficulties and problems I faced while trying to setup all the necessary tools on my computer, and how I resolved them.

<!-- Button w wireframe layout-->
<br>
<br>
<div class="button-div">
  <p><b>Hello.</b></p> 
  <button class="my-button">
      Click here
  </button>
</div>
<br>
<br>
<br>

<div class="button-div"> 
  <p>  <b>Access the AP CSP Slack page and the Github page to find the code for this site below.</b></p>
  <a href="https://app.slack.com/client/TUDAF53UJ/CUU064ACX" target="_blank">
      <button class="my-button">
      CSP Slack
      </button>
    </a>

  <a href="https://github.com/Kiruthic-Selvakumar/Kiruthic_student_2025" target="_blank" >
      <button class="my-button">
      Github
      </button>
    </a>  
    <br>
</div>

<style>
.button-div {
    text-align: center;
    position: relative;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 0 6px #75ff97, 0 0 9px #75ff97, 0 0 12px #75ff97, 0 0 15px #75ff97; /* Smaller glow */
    transition: box-shadow 0.3s ease; /* Smooth transition for the box-shadow */
}

/* Hover effect */
.button-div:hover {
    box-shadow: 0 0 15px #75ff97, 0 0 22.5px #75ff97, 0 0 30px #75ff97, 0 0 37.5px #75ff97; /* Larger glow */
}
  
  .my-button {
      background: linear-gradient(45deg, #2d773f, #75ff97); /* Cool blue gradient */
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
  }

/* Hover effect */
.my-button:hover {
    transform: scale(1.1); /* Slightly larger */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Add a shadow */
}

/* Ensure no extra margin or padding on anchor tags */
a, a:visited, a:hover, a:active {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
}

</style>

<br>

<!-- Everything below is to Code for Mario-->
<!-- Include submenu from _includes to top of pages -->

<!--- Concatenation of site URL to frontmatter image  --->
{% assign sprite_file = site.baseurl | append: page.image %}
<!--- Has is a list variable containing mario metadata for sprite --->
{% assign hash = site.data.mario_metadata %}  
<!--- Size width/height of Sprit images --->
{% assign pixels = 256 %}

<!--- HTML for page contains <p> tag named "Mario" and class properties for a "sprite"  -->

<p id="mario" class="sprite"></p>
  
<!--- Embedded Cascading Style Sheet (CSS) rules, 
        define how HTML elements look 
--->
<style>

  /*CSS style rules for the id and class of the sprite...
  */
  .sprite {
    height: {{pixels}}px;
    width: {{pixels}}px;
    background-image: url('{{sprite_file}}');
    background-repeat: no-repeat;
  }

  /*background position of sprite element
  */
  #mario {
    background-position: calc({{animations[0].col}} * {{pixels}} * -1px) calc({{animations[0].row}} * {{pixels}}* -1px);
  }
</style>

<!--- Embedded executable code--->
<script>
  ////////// convert YML hash to javascript key:value objects /////////

  var mario_metadata = {}; //key, value object
  {% for key in hash %}  
  
  var key = "{{key | first}}"  //key
  var values = {} //values object
  values["row"] = {{key.row}}
  values["col"] = {{key.col}}
  values["frames"] = {{key.frames}}
  mario_metadata[key] = values; //key with values added

  {% endfor %}

  ////////// game object for player /////////

  class Mario {
    constructor(meta_data) {
      this.tID = null;  //capture setInterval() task ID
      this.positionX = 0;  // current position of sprite in X direction
      this.currentSpeed = 0;
      this.marioElement = document.getElementById("mario"); //HTML element of sprite
      this.pixels = {{pixels}}; //pixel offset of images in the sprite, set by liquid constant
      this.interval = 100; //animation time interval
      this.obj = meta_data;
      this.marioElement.style.position = "absolute";
    }

    animate(obj, speed) {
      let frame = 0;
      const row = obj.row * this.pixels;
      this.currentSpeed = speed;

      this.tID = setInterval(() => {
        const col = (frame + obj.col) * this.pixels;
        this.marioElement.style.backgroundPosition = `-${col}px -${row}px`;
        this.marioElement.style.left = `${this.positionX}px`;

        this.positionX += speed;
        frame = (frame + 1) % obj.frames;

        const viewportWidth = window.innerWidth;
        if (this.positionX > viewportWidth - this.pixels) {
          document.documentElement.scrollLeft = this.positionX - viewportWidth + this.pixels;
        }
      }, this.interval);
    }

    startWalking() {
      this.stopAnimate();
      this.animate(this.obj["Walk"], 3);
    }

    startRunning() {
      this.stopAnimate();
      this.animate(this.obj["Run1"], 6);
    }

    startPuffing() {
      this.stopAnimate();
      this.animate(this.obj["Puff"], 0);
    }

    startCheering() {
      this.stopAnimate();
      this.animate(this.obj["Cheer"], 0);
    }

    startFlipping() {
      this.stopAnimate();
      this.animate(this.obj["Flip"], 0);
    }

    startResting() {
      this.stopAnimate();
      this.animate(this.obj["Rest"], 0);
    }

    stopAnimate() {
      clearInterval(this.tID);
    }
  }

  const mario = new Mario(mario_metadata);

  ////////// event control /////////

  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      if (event.repeat) {
        mario.startCheering();
      } else {
        if (mario.currentSpeed === 0) {
          mario.startWalking();
        } else if (mario.currentSpeed === 3) {
          mario.startRunning();
        }
      }
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      if (event.repeat) {
        mario.stopAnimate();
      } else {
        mario.startPuffing();
      }
    }
  });

  //touch events that enable animations
  window.addEventListener("touchstart", (event) => {
    event.preventDefault(); // prevent default browser action
    if (event.touches[0].clientX > window.innerWidth / 2) {
      // move right
      if (currentSpeed === 0) { // if at rest, go to walking
        mario.startWalking();
      } else if (currentSpeed === 3) { // if walking, go to running
        mario.startRunning();
      }
    } else {
      // move left
      mario.startPuffing();
    }
  });

  //stop animation on window blur
  window.addEventListener("blur", () => {
    mario.stopAnimate();
  });

  //start animation on window focus
  window.addEventListener("focus", () => {
     mario.startFlipping();
  });

  //start animation on page load or page refresh
  document.addEventListener("DOMContentLoaded", () => {
    // adjust sprite size for high pixel density devices
    const scale = window.devicePixelRatio;
    const sprite = document.querySelector(".sprite");
    sprite.style.transform = `scale(${0.5 * scale})`;
    mario.startResting();
  });

</script>

<link rel="stylesheet" href="{{site.baseurl}}/navigation/buttonthemes.css">
