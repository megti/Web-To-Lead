function beforeSubmit() {
    let outputdate = document.querySelector(".outputdate");
    let inputdate = document.querySelector(".inputdate");
    console.log('Input Date', inputdate.value);
    let formattedDate = new Date(inputdate.value).toLocaleDateString("Localeen-GB");
    console.log('formattedDate', formattedDate);
    outputdate.value = formattedDate;
}