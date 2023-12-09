let rateBtn = document.getElementsByClassName("rate-btn")
let submit = document.querySelector("button")
let ratestate = document.querySelector(".ratestate")
let rateVal;

for (let i = 0; i < rateBtn.length; i++) {
    rateBtn[i].addEventListener("click", function() {
        rateVal = rateBtn[i].innerHTML
        console.log("rate value is: " + rateVal)
    })
}

submit.addEventListener("click", function() {
    console.log("submit button clicked")
    if (rateVal) {
        enterThanksState()
    }
    
})

function enterThanksState() {
    ratestate.innerHTML = `<section class="thankstate">
    <img src="images/illustration-thank-you.svg" alt="">
    <p>You selected ${rateVal} out of 5</p>
    <h1>Thank you!</h1>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, 
  don’t hesitate to get in touch!</p>
  </section>` 
} 