//https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/gear1.png') {
        myImage.setAttribute('src', 'images/gear2.png');
    } else {
        myImage.setAttribute('src', 'images/gear1.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {

    let myName = prompt('Please enter your name.');

    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to tommaho.com,  ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();

} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome to tommaho.com,  ' + storedName;

}

myButton.onclick = function() {
    setUserName();
}