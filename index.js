// Select Nodelists

const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

// Show Time ( recursive function)
function showTime() {
    // let today = new Date()
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const showAmPm = true;
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // Use 12 hour format
    hour = hour % 12 || 12;

    // Output/ Display the time
    // This is now a type of highe order function
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)
        } ${showAmPm ? amPm : ''}`;

    // Update time every second
    setTimeout(showTime, 1000);
}

// Add Zero to min and sec when needed
// n is min or sec
function addZero(n) {
    // add a nuber in the base 10
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set dynamic background image

function setBg() {
    // let today = new Date(),
    let today = new Date(),
        hour = today.getHours();
    if (hour < 12) {
        // Morning
        document.body.style.background = "url('../Time-controled-landing-page/img/aerial-photography-of-grass-field') no-repeat center center fixed"
        document.body.style.color = '#ffffff';
        // document.body.style.backgroundSize = 'no-repeat center center fixed';
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        // Afternoon
        document.body.style.background = "url('../Time-controled-landing-page/img/afternoon-cascade-creek-environment-1174108 (1).jpg') no-repeat center center fixed"
        greeting.textContent = 'Good Afternoon';
        //  document.body.style.color = '#ffffff';
    } else {
        // Evening
        document.body.style.background = "url('../Time-controled-landing-page/img/white-and-black-moon-with-black-skies-and-body-of-water-748626 (1).jpg') no-repeat center center fixed"
        greeting.textContent = 'Good Evening';
        document.body.style.color = '#ffffff';

        // document.h2.style.opacity = '1';
    }
}



// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Update Name
function updateName(e) {
    if (e.type === 'keypress') {
        // check for key enter
        if (e.which == 13 || e.keycode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        // update name in local storage
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Update Focus
function updateFocus(e) {
    if (e.type === 'keypress') {
        // check for key enter
        if (e.which == 13 || e.keycode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        // update focus in local storage
        localStorage.setItem('focus', e.target.innerText);
    }
}

// Updating contenteditable
name.addEventListener('keypress', updateName);
name.addEventListener('blur', updateName)
focus.addEventListener('keypress', updateFocus);
focus.addEventListener('blur', updateFocus);

// Run functions
showTime();
setBg();
getName();
getFocus();





/*
1. In set bg we did not set time to 12 hour clock,  so that we can really know what time of day we are working with

// 

*/