<script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>

$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll("button");
    const navLinks = document.querySelectorAll("nav li");
    const form = document.querySelector('#form-sign-up');

    //Smooth scroll
    navLinks.forEach(function(element) {
        // add click listener for the element in this iteration of the loop
        element.addEventListener("click", function(event){
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
    form.addEventListener('submit', function(event){
        event.preventDefault();
        let email = document.getElementById('input-field').value;
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            alert("Thanks for subscribing!")
        } else{
            alert("Please insert a valid email address.")
        }
    });

    // for(i = 0; i < buttons.length; i++){
    //     buttons[i].addEventListener("click", clickCheck, false);
    // }

    // function clickCheck(){
    //     if(this.classList.contains("add-to-cart")){
    //         console.log("Clicked")
    //     }
    // }

    // Init carousel
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true
    });
});


