---
toc: true
comments: false
layout: base
title: Calculator
description: Grab of the Calculator from APCSA repo.
type: tangibles
courses: { compsci: {week: 7} }
---
{% include nav/home.html %}
<style>
  .calculator-output {
    /* calulator output 
      top bar shows the results of the calculator;
      result to take up the entirety of the first row;
      span defines 4 columns and 1 row
    */
    grid-column: span 4;
    grid-row: span 1;
    
    padding: 0.25em;
    font-size: 20px;
    border: 5px light blue;
    
    display: flex;
    align-items: center;
  }
  .calculator-number, .calculator-operation, .calculator-clear, .calculator-equals {
    /* Ensure all buttons have the same size and appearance */
    padding: 1em;
    font-size: 20px;
    border: 3px solid #3e3e3e;
    text-align: center;
    cursor: pointer;
    flex: 1 1 25%; /* Make sure all buttons take up equal space */
    box-sizing: border-box; /* Include padding and border in element's total width and height */
  }
</style>

<!-- Add a container for the animation -->
<div id="animation">
  <div class="calculator-container">
      <!--result-->
      <div class="calculator-output" id="output">0</div>
      <!--row 1-->
      <div class="calculator-clear">A/C</div>
      <div class="calculator-operation">√</div>
      <div class="calculator-operation">x³</div>
      <div class="calculator-operation">log</div>
      <!--row 2-->
      <div class="calculator-number">1</div>
      <div class="calculator-number">2</div>
      <div class="calculator-number">3</div>
      <div class="calculator-operation">+</div>
      <!--row 3-->
      <div class="calculator-number">4</div>
      <div class="calculator-number">5</div>
      <div class="calculator-number">6</div>
      <div class="calculator-operation">-</div>
      <!--row 4-->
      <div class="calculator-number">7</div>
      <div class="calculator-number">8</div>
      <div class="calculator-number">9</div>
      <div class="calculator-operation">*</div>
      <!--row 5-->
      <div class="calculator-number">0</div>
      <div class="calculator-number">.</div>
      <div class="calculator-equals">=</div>  
  
  </div>
</div>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<!-- JavaScript (JS) implementation of the calculator. -->
<script>
  // initialize important variables to manage calculations
  var firstNumber = null;
  var operator = null;
  var nextReady = true;
  // build objects containing key elements
  const output = document.getElementById("output");
  const numbers = document.querySelectorAll(".calculator-number");
  const operations = document.querySelectorAll(".calculator-operation");
  const clear = document.querySelectorAll(".calculator-clear");
  const equals = document.querySelectorAll(".calculator-equals");

  // Number buttons listener
  numbers.forEach(button => {
    button.addEventListener("click", function() {
      number(button.textContent);
    });
  });

  // Number action
  function number (value) { // function to input numbers into the calculator
      if (value != ".") {
          if (nextReady == true) { // nextReady is used to tell the computer when the user is going to input a completely new number
              output.innerHTML = value;
              if (value != "0") { // if statement to ensure that there are no multiple leading zeroes
                  nextReady = false;
              }
          } else {
              output.innerHTML = output.innerHTML + value; // concatenation is used to add the numbers to the end of the input
          }
      } else { // special case for adding a decimal; can't have two decimals
          if (output.innerHTML.indexOf(".") == -1) {
              output.innerHTML = output.innerHTML + value;
              nextReady = false;
          }
      }
  }

  // Operation buttons listener
  operations.forEach(button => {
    button.addEventListener("click", function() {
      operation(button.textContent);
    });
  });

  // Operator action
  function operation (choice) { // function to input operations into the calculator
      if (firstNumber == null) { // once the operation is chosen, the displayed number is stored into the variable firstNumber
          firstNumber = parseInt(output.innerHTML);
          nextReady = true;
          operator = choice;
          return; // exits function
      }
      // occurs if there is already a number stored in the calculator
      firstNumber = calculate(firstNumber, parseFloat(output.innerHTML)); 
      operator = choice;
      output.innerHTML = firstNumber.toString();
      nextReady = true;
  }

  // Calculator
  function calculate (first, second) { // function to calculate the result of the equation
      let result = 0;
      switch (operator) {
          case "√":
              result = Math.sqrt(first);
              break;
          case "x³":
              result = first * first * first
              break;
          case "log":
              result = Math.log10 (first)
              break;
          case "+":
              result = first + second;
              break;
          case "-":
              result = first - second;
              break;
          case "*":
              result = first * second;
              break;
          case "/":
              result = first / second;
              break;
          default: 
              break;
      }
      return result;
  }

  // Equals button listener
  equals.forEach(button => {
    button.addEventListener("click", function() {
      equal();
    });
  });

  // Equal action
  function equal () { // function used when the equals button is clicked; calculates equation and displays it
      firstNumber = calculate(firstNumber, parseFloat(output.innerHTML));
      output.innerHTML = firstNumber.toString();
      nextReady = true;
  }

  // Clear button listener
  clear.forEach(button => {
    button.addEventListener("click", function() {
      clearCalc();
    });
  });

  // A/C action
  function clearCalc () { // clears calculator
      firstNumber = null;
      output.innerHTML = "0";
      nextReady = true;
  }
</script>