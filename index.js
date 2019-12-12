// Select Nodelists

const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

// Show Time ( recursive function)
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // Use 12 hour format
    hour = hour % 12 || 12;

    // Output/ Display the time
    // This is now a type of highe order function
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

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
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('../Time-controled-landing-page/img/aerial-photography-of-grass-field-3071758.jpg')"
        greeting.textContent = 'Good Morning';
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('../Time-controled-landing-page/img/afternoon-cascade-creek-environment-1174108.jpg')"
        greeting.textContent = 'Good Afternoon';
    } else {
        // Evening
        document.body.style.backgroundImage = "url('../Time-controled-landing-page/img/white-and-black-moon-with-black-skies-and-body-of-water-748626.jpg')"
        greeting.textContent = 'Good Evening';
        document.body.style.color = '#ffffff';
        document.body.style.opacity = 1;
    }
}

// Run the time
showTime();
setBg();





/*
1. In set bg we did not set time to 12 hour clock,  so that we can really know what time of day we are working with



*/