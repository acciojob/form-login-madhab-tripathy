function getFormvalue() {
    //Write your code here
    let text = document.querySelectorAll('input[type=text]');
    return alert(`${text[0].value} ${text[1].value}`)
}