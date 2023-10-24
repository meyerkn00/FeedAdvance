function formsubmit(event) {
    /* This one line stops the form from actually submitting, and instead lets JS hijack it */
    event.preventDefault();

    var weight = document.getElementById("weight");
    var volgal = document.getElementById("volgoal");
    /* add additional form elements */

    localStorage.setItem("weight", weight.value)
    localStorage.setItem("volgoal", volgoal.value)
    /* add additional variables to save locally */
    
    /* math goes here*/

    /* below is where I output the results in a <p> element */
    output.textContent = 'Output goes here';
}

window.onload = function() {

  var form = document.getElementById("formid");
  var output = document.getElementById("output");
  /* Form submission is an event, so I can use that to call my function */
  form.addEventListener("submit", formsubmit);

}