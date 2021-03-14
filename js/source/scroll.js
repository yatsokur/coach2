//scrollTop button
let t1 = 0;
window.onscroll = scrollUpButtonAppear;

let toTop = document.getElementById('scrollTop');
let navbar = document.getElementById('navbar');

function scrollUpButtonAppear() {
    if (screen.width > 480) {
        if (window.scrollY > 100) {
            toTop.style.display = 'block';
            navbar.className = 'navbar-onscroll'
        } else {
            toTop.style.display = 'none';
            navbar.className = 'navbar'
        }
    } else {
        navbar.className = 'navbar-onscroll'
        navbar.style.opacity = '0.8';
        if (window.scrollY > 10) {
            toTop.style.display = 'block';
        } else {
            toTop.style.display = 'none';
        }
    }

}

function scrollUp() {
    let y1 = window.scrollY;
    y1 = y1 - 30;
    window.scrollTo(0, y1);
    if (y1 > 0) {
        t1 = setTimeout("scrollUp()", 1);
    } else {
        clearTimeout(t1);
    }
}

// ------------------------- CHANGE ACTIVE STATE OF LINKS ON SCROLL ------------------------- //
//select the navigation
const nav = document.querySelector('.navbar');

// --------------------- INITIALIZE CHRIS FERDINANDI'S SMOOTH SCROLL VANILLA JS LIBRARY --------------------- //
if (screen.width > 480) {
    const scroll = new SmoothScroll('a[href*="#"]', {offset: nav.offsetHeight - 40});
}
if (screen.width <= 480) {
    const scroll = new SmoothScroll('a[href*="#"]', {offset: nav.offsetHeight-80});
}







//scroll function - example
// // Add the event handler to the document body and all of its children.
// // 'wheel' is widely supported but you still might want to maximize
// // compatibility by testing for it. There's a good solution on
// // http://stackoverflow.com/a/32215631
// document.body.addEventListener('wheel', doMagic)
// document.querySelectorAll('section');
// document.querySelectorAll('header');
//
// // The following function is based on my structural ideas of a One Page Website and if you get the idea it's really trivial to adjust it to yours.
// function doMagic(e) {
//     // Store your top level full page element tags in a variable.
//     // This is to have control over your structure and
//     // to avoid <script> tags from being included in the process.
//     // These need to be uppercase as .nodeName returns that way
//     let tags = ['HEADER', 'SECTION', 'FOOTER']
//
//     // Test for the DOM element the wheel event was fired on
//     // and store the next page section for later use.
//     if (tags.includes(e.target.nodeName)) {
//         // Element is one of our top level structure tags.
//         // Get its adjacent siblings.
//         var next = e.target.nextElementSibling,
//             prev = e.target.previousElementSibling
//     } else { // If it's rather a child go up the DOM tree
//         // until we meet one of our top level tags
//         // and get the siblings from there.
//         // .closest() is quite well supported but far from 100%
//         // http://stackoverflow.com/a/42873108 provides a solution
//         // for a compatibility fix
//         var next = e.target.closest(tags).nextElementSibling,
//             prev = e.target.closest(tags).previousElementSibling
//     }
//
//     if (e.deltaY < 0) { // Wheel scrolled up
//         // Block native scroll:
//         e.preventDefault
//         // Make sure that the sibling element is one
//         // of our top structure tags.
//         // May not be necessary but I've had weird behaviours
//         // with <script> tags and you might want to exclude things.
//         if (tags.includes(prev.nodeName)) {
//             // Use a nice smooth scroll:
//             scrollIt(
//                 // The scrollIt function was written by Pawel Grzybek.
//                 // It's a very neatly written vanilla smooth scroll.
//                 // Find his awesome code in the JS options tab of this pen.
//                 prev, // Use the stored .previousElementSibling as target.
//                 800, // Animation duration
//                 'easeInOutQuad' // Easing (see Pawels pen)
//             )
//             // Toggle class for nice transitions
//             e.target.closest(tags).classList.remove('show')
//             prev.classList.add('show')
//         }
//     } else if (e.deltaY > 0) { // Wheel scrolled down
//         // Just the same as before but with the following adjacent sibling.
//         e.preventDefault
//         if (tags.includes(next.nodeName)) {
//             scrollIt(
//                 next,
//                 800,
//                 'easeInOutQuad'
//             )
//             e.target.closest(tags).classList.remove('show')
//             next.classList.add('show')
//         }
//     } else {
//         return false
//     }
// }