let captchachecked = false;
function beforeSubmit(event) {
    if (captchachecked) {
        let outputdate = document.querySelector(".outputdate");
        let inputdate = document.querySelector(".inputdate");
        console.log('Input Date', inputdate.value);
        let formattedDate = new Date(inputdate.value).toLocaleDateString("Localeen-GB");
        console.log('formattedDate', formattedDate);
        outputdate.value = formattedDate;
    }
    else {
        alert("Please verify your identity usingg recaptcha");
        event.preventDefault();
    }

}
function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") { var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value); elems["ts"] = JSON.stringify(new Date().getTime()); document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500);

function captchasuccess() {
    captchachecked = true;
    console.log('captchachecked', captchachecked);
}