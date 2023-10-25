function formsubmit(event) {
    /* This one line stops the form from actually submitting, and instead lets JS hijack it */
    event.preventDefault();

    /* Currently broken: Pulls key-value pairs from submitted form
    let form = document.querySelector("form")

    Takes said key-value pairs and assigns to variables we can use
    let weight = form.elements.weightval
    let volgoal = form.elements.volgoalval
    let thing1 = form.elements.thing1val
    let thing2 = form.elements.thing2val
    */

    /* declare each form element so that JS can call it. This step does not store the data */
    var weight = document.getElementById("weight");
    var volgal = document.getElementById("volgoal");
    var volgal = document.getElementById("thing1");
    var volgal = document.getElementById("thing2");
    /* add additional form elements here*/

    /* take form results and store them as variables locally */
    localStorage.setItem("weight", weight.value)
    localStorage.setItem("volgoal", volgoal.value)
    localStorage.setItem("thing1", thing1.value)
    localStorage.setItem("thing2", thing2.value)
    /* add additional variables to save locally */

    /* 
    math goes here 
    to do: coerce thing1/2 values from null to 0 if they are empty
    */
    let result = +weight.value + +volgoal.value

    /* 
    Below is where I output the results in the <p> element directly below the form. 
    Note that concat string needs to go within backticks
    */
    output.textContent = `Output goes here: ${result} (units)`;
}

window.onload = function() {

  var form = document.getElementById("dataform");
  var output = document.getElementById("output");
  /* Form submission is an event, so I can use that to call my function */
  form.addEventListener("submit", formsubmit);

}