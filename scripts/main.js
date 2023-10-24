function formsubmit(event) {
    /* This one line stops the form from actually submitting, and instead lets JS hijack it */
    event.preventDefault();

    /* declare each form element so that JS can call it. This step does not store the data */
    var weight = document.getElementById("weight");
    var volgal = document.getElementById("volgoal");
    /* add additional form elements here*/

    /* take form results and store them as variables locally */
    localStorage.setItem("weight", weight.value)
    localStorage.setItem("volgoal", volgoal.value)
    /* add additional variables to save locally */

    /* math goes here */
    let result = +weight.value + +volgoal.value

    /* 
    Below is where I output the results in the <p> element directly below the form. 
    Note that concat string needs to go within backticks
    */
    output.textContent = `Output goes here: ${result}`;
}

window.onload = function() {

  var form = document.getElementById("formid");
  var output = document.getElementById("output");
  /* Form submission is an event, so I can use that to call my function */
  form.addEventListener("submit", formsubmit);

}