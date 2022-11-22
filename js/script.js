// Show and hide navbar links
function toggleNav() {
    'use strict';
    var x = document.getElementById("navLinks");
    if (!x.classList.contains("open")) {
        x.classList.add("open");
    } else {
        x.classList.remove("open");
    }
}

// Open To-do List modal
function openTdModal() {
    'use strict';
    document.getElementById("tdModal").style.display = "block";
}

// Open Brick-by-Brick modal
function openBBModal() {
    'use strict';
    document.getElementById("bbModal").style.display = "block";
}

// Open Frontend Mentor modal
function openFmModal() {
    'use strict';
    document.getElementById("fmModal").style.display = "block";
}

// Close any open modals
function closeModal() {
    'use strict';
    var modal = document.getElementsByClassName("modal");
    for (let i = 0; i < modal.length; i++) {
        modal[i].style.display = "none";
    }
}

// Contact form submit message
function formSubmitted() {
    'use strict';
    var x = document.getElementById("form");
    if (x.checkValidity()) {
        alert("Message received. Thank you!");
    }

}

function init() {
    'use strict';
    // Hamburger icon in navbar
    document.getElementById("hamburger").onclick = toggleNav;

    // Links to open To-do List modal
    var tdOpen = document.getElementsByClassName("tdOpen");
    for (let i = 0; i < tdOpen.length; i++) {
        tdOpen[i].onclick = openTdModal;
    }

    // Links to open Brick-by-Brick modal
    var bbOpen = document.getElementsByClassName("bbOpen");
    for (let i = 0; i < bbOpen.length; i++) {
        bbOpen[i].onclick = openBBModal;
    }

    // Links to open Frontend Mentor modal
    var fmOpen = document.getElementsByClassName("fmOpen");
    for (let i = 0; i < fmOpen.length; i++) {
        fmOpen[i].onclick = openFmModal;
    }

    // Close modal buttons
    var close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = closeModal;
    }

    // Close modals when the user clicks outside
    window.onclick = function (event) {
        var modal = document.getElementsByClassName("modal");
        for (let i = 0; i < modal.length; i++) {
            if (event.target == modal[i]) {
                modal[i].style.display = "none";
            }
        }
    }

    // Contact form
    document.getElementById("form").onsubmit = formSubmitted;
}

// Run function when page has loaded
window.onload = init;