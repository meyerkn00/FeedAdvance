function formsubmit(event) {
    /* This one line stops the form from actually submitting, and instead lets JS hijack it */
    event.preventDefault();

    const formElement = document.querySelector('form');
    const formData = new FormData(formElement);

    /* 
    math goes here 
    to do: coerce thing1/2 values from null to 0 if they are empty
    
    let result = +formData.get('weightval') + +formData.get('volgoalval');
    */
    let feed_volume = (+formData.get('feedlimit_val') * +formData.get('weight_val'))/8;

    let hourly_feed_volume = (feed_volume/3);

    let fluid_rate = +formData.get('tflrate_val') 
      - (formData.get('rate1') || 0)
      - (formData.get('rate2') || 0)
      - (formData.get('rate3') || 0)
      - (formData.get('rate4') || 0)
      - (formData.get('rate5') || 0)
      - hourly_feed_volume;
    /* 
    Below is where I output the results in the <p> element directly below the form. 
    Note that concat string needs to go within backticks
    */
    output.textContent = `Fluid Rate: ${fluid_rate} (mL/hr). Feed Volume: ${feed_volume} (ml per 3 hours)`;
}

window.onload = function() {

  var form = document.getElementById("dataform");
  var output = document.getElementById("output");
  /* Form submission is an event, so I can use that to call my function */
  form.addEventListener("submit", formsubmit);

}