const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const counters = document.querySelectorAll('.counter');
const menu = document.getElementById('mobile-menu');
let scrollStarted = false;


btn.addEventListener('click', navToggle);
// created a eventlistner which listens to a click and when thathappens it fire off a function navtoggle
document.addEventListener('scroll', scrollPage);

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
  
}

function scrollPage() {
    const scrollPos = window.scrollY;

    if (scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
        reset();
    scrollStarted = false;
 }
};

function countUp() {
    // when we use query selector it returns an array , to get individual data we use loop
    counters.forEach((counter) => {
        counter.innerText = '0';
    
        const updateCounter = () => {
            // get count target (final no we get)
            const target = +counter.getAttribute('data-target');
            // get current counter value (initial value which is zero)
            const c = +counter.innerText;
            
            // create an increment because it needs to count up
            const increment = target / 100;

            // if counter is less than target ,  add increment
            if (c < target) {
                // round up and set the counter value
                counter.innerText = `${Math.ceil(c + increment)}`;

                setTimeout(updateCounter, 65);
            } else {
                counter.innerText = target; 
            }
        };
        updateCounter();
    });
}

function reset() {
    counters.forEach((counter) => counter.innerHTML = '0');
}