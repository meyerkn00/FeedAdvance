function formsubmit(event) {
    /* This one line stops the form from actually submitting, and instead lets JS hijack it */
    event.preventDefault();

    /* Pulls key-value pair from the form result and stores it as formData */
    const formElement = document.querySelector('form');
    const formData = new FormData(formElement);

    /* math goes here */
    let total_daily_feed_volume = +formData.get('feedlimit_val') * +formData.get('weight_val')
    let feed_volume = total_daily_feed_volume/8;

    let hourly_feed_volume = (feed_volume/3);

    /* Rates are coerced to 0 if they are any "falsey" values such as NaN, null, etc
    Note: this is no longer needed because the default value for these inputs is 0 */
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
    Old output below
    output.textContent = 
      `Fluid Rate: ${fluid_rate.toFixed(1)} (mL/hr).
      Total Daily Feed Volume: ${total_daily_feed_volume} (mL)
      Feed Volume: ${feed_volume.toFixed(1)} (ml per 3 hours)`;
    */

    /* If TFL rate is 0, do not show fluid rate*/
    if (+formData.get('tflrate_val') === 0) {
      output.textContent = 
        `Total Daily Feed Volume: ${total_daily_feed_volume} (mL)
        Feed Volume: ${feed_volume.toFixed(1)} (ml per 3 hours)`;
    
    /* If OFL and Rate rate is 0, do not show feed volume */   
    } else if ((+formData.get('feedlimit_val') + +formData.get('weight_val')) === 0 ) {
      output.textContent = 
        `Fluid Rate: ${fluid_rate.toFixed(1)} (mL/hr).`;
    
    /* Otherwise, show all three */   
    } else {
      output.textContent = 
        `Fluid Rate: ${fluid_rate.toFixed(1)} (mL/hr).
        Total Daily Feed Volume: ${total_daily_feed_volume} (mL)
        Feed Volume: ${feed_volume.toFixed(1)} (ml per 3 hours)`;      
    }
}


/* Below waits untilt the page loads and then creates a listener event for form submission */
window.onload = function() {

  var form = document.getElementById("dataform");
  var output = document.getElementById("output");
  /* Form submission is an event, so I can use that to call my function */
  form.addEventListener("submit", formsubmit);

  addEventListener("input", (event) => {
    output.textContent = ""
  });

}