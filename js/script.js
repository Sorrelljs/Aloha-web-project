



$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
});


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll("button");
    const navLinks = document.querySelectorAll("nav li");
    const form = document.querySelector('.subscribe-form');



    //Smooth scroll
    navLinks.forEach(function (element) {
        // add click listener for the element in this iteration of the loop
        element.addEventListener("click", function (event) {
            event.preventDefault();
            // how can you get the "href" attribute value of the clicked element to create a string that corresponds the id of the correct section?
            let href = this.querySelector('a').hash;
            // scroll to that section with .scrollIntoView()
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // E-mail validation

    form.addEventListener('submit', e => {
        handleEmail(e)
    });

    function emailIsValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function handleEmail(e) {
        e.preventDefault();
        const emailSent = e.target.elements[0].value;
        if (emailIsValid(emailSent)) {
            alert('Thanks for your subscription!');
        } else {
            alert('Your e-mail is incorrect. Please enter a valid email');
        }
    }




});


