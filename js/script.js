function toggleNav() {
    'use strict';
    var x = document.getElementById("navLinks");
    if (!x.classList.contains("open")) {
        x.classList.add("open");
    } else {
        x.classList.remove("open");
    }
}

function formSubmitted() {
    'use strict';
    var x = document.getElementById('form');
    if (x.checkValidity()) {
        alert('Message received. Thank you!');
    }

}

function init() {
    'use strict';
    document.getElementById('hamburger').onclick = toggleNav;
    document.getElementById('form').onsubmit = formSubmitted;
}

window.onload = init;