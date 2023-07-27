/*!
=========================================================
* LeadMark Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// protfolio filters
$(window).on("load", function() {
    var t = $(".portfolio-container");
    t.isotope({
        filter: ".new",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $(".filters a").click(function() {
        $(".filters .active").removeClass("active"), $(this).addClass("active");
        var i = $(this).attr("data-filter");
        return t.isotope({
            filter: i,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
             
            }
        }), !1
    })
})

// setting toggle backgroung color
const setNavbarToggleBackgroundColor = () => {
    let navBarToggleButtonElement = document.querySelector('.setToggleColor');
    let navBarToggleClassElement = document.querySelector('.bgToggleColor');
    navBarToggleButtonElement.addEventListener('click', () => {
        let toggle = false
        if (!toggle) {
            navBarToggleClassElement.classList.add('toggleBgColor');
            toggle = true;
        } else {
            navBarToggleClassElement.classList.remove('toggleBgColor');
            toggle = false;
        }
    })
}
setNavbarToggleBackgroundColor()


// setting onscroll navbar backgroundColor

const windowScrollBackroundColor = () => {
    let navElement = document.querySelector('.scrollBackgroundBg');
    let btnScrollBg = document.querySelector('.btn-scroll')
    window.addEventListener('scroll', changeBgColor)
    function changeBgColor() {
            if (window.scrollY >= 20) {
                navElement.classList.add('xl-display-bg');
                btnScrollBg.classList.add('btn-primary-scroll');

            } else {
                navElement.classList.remove('xl-display-bg');
                btnScrollBg.classList.remove('btn-primary-scroll');
            }
    }

}
windowScrollBackroundColor()

//changing text content

            let textElement_1 = document.querySelector('.changeContent_1');
            let textElement_2 = document.querySelector('.changeContent_2');
            let textElement_3 = document.querySelector('.changeContent_3');
            let textElement_4 = document.querySelector('.changeContent_4');


            let textChange = document.querySelector('.change-text');
            textElement_1.addEventListener('click', () => {
                textChange.innerHTML = 'Academic and Professional Qualifications'
            })
            textElement_2.addEventListener('click', () => {
                textChange.innerHTML = 'WORKING EXPERIENCE'
            })
            textElement_3.addEventListener('click', () => {
                textChange.innerHTML = 'COURSES TAUGHT AT VARIOUS TIMES'
            })
            textElement_4.addEventListener('click', () => {
                textChange.innerHTML = 'OTHER RESPONSIBILITIES OUTSIDE TEACHING'
            })