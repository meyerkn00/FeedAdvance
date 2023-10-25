function formsubmit(event) {
    /* This one line stops the form from actually submitting, and instead lets JS hijack it */
    event.preventDefault();

    /* Pulls key-value pairs from submitted form */
    let form = document.querySelector("form")

    /* Takes said key-value pairs and assigns to variables we can use */
    let weight = form.elements.weightvol
    let volgoal = form.elements.volgoalval
    let thing1 = form.elements.thing1val
    let thing2 = form.elements.thing2val

    /* 
    math goes here 
    to do: coerce thing1/2 values from null to 0 if they are empty
    */
    let result = +weight + +volgoal

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