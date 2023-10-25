function formsubmit(event) {
    /* This one line stops the form from actually submitting, and instead lets JS hijack it */
    event.preventDefault();

    /* Pulls key-value pair from the form result and stores it as formData */
    const formElement = document.querySelector('form');
    const formData = new FormData(formElement);

    /* math goes here */
    let feed_volume = (+formData.get('feedlimit_val') * +formData.get('weight_val'))/8;

    let hourly_feed_volume = (feed_volume/3);

    /* Rates are coerced to 0 if they are any "falsey" values such as NaN, null, etc */
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
    Numbers are rounded to 1 decimal place and turned into string 
    (important only if I need to do more math)
    */
    output.textContent = `Fluid Rate: ${fluid_rate.toFixed(2)} (mL/hr). 
      Feed Volume: ${feed_volume.toFixed(1)} (ml per 3 hours)`;
}


/* Below waits untilt the page loads and then creates a listener event for form submission */
window.onload = function() {

  var form = document.getElementById("dataform");
  var output = document.getElementById("output");
  /* Form submission is an event, so I can use that to call my function */
  form.addEventListener("submit", formsubmit);

}