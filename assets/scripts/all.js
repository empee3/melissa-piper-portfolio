(function() {
    const   d = document,
            gridTrigger = d.getElementById('grid-trigger'),
            gridOverlay = d.getElementById('grid-overlay'),
            stickyMenu = d.getElementById('nav-bar');
            hero = d.querySelector('.hero'),
            navLinks = d.querySelectorAll('#main-nav a'),
            words = ["HTML", "CSS", "JavaScript", "PHP", "WordPress", "Drupal", "React",
                     "Sketch", "Photoshop"];

    let     introText = d.querySelector('.hero-text h1 .med-text'),
            counter = 0,
            stickyMenuOffset = 0,
            inst = setInterval(generateWords, 1800);

    function generateWords() {
        introText.innerHTML = words[counter];
        counter++;
        if (counter >= words.length) {
            counter = 0;
        }
    }

    function getOffset() {
        return stickyMenu.offsetHeight;
    }

    d.addEventListener('DOMContentLoaded', generateWords);

    // Add event listener to make sidebar menu sticky, if menu exists
    if (stickyMenu) {
        stickyMenuOffset = getOffset();

        window.addEventListener("scroll", function(e) {
            requestAnimationFrame(function() {
                if (window.pageYOffset > stickyMenuOffset){
                    stickyMenu.classList.add('sticky')
                }
                else {
                    stickyMenu.classList.remove('sticky')
                }
            })
        });

        // Get new offset value when window is resized
        window.addEventListener("resize", function(e) {
            stickyMenuOffset = getOffset();
        });
    }

    // Add smooth scrolling to main nav links
    /*if (navLinks) {
        for (i=0; i<navLinks.length; i++) {
            navLinks[i].addEventListener('click', scrollToElement, false);
        }
    }*/

    //d.querySelector('.view-next-section a').addEventListener('click', scrollToElement, false);

    if (document.querySelector('.featured-work')) {    
        var mixer = mixitup('.featured-work', {
            selectors: {
                target: '.featured-item'
            }
        });
    }

})();
