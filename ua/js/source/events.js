let face = document.querySelectorAll('.team__social-fb');
let tw = document.querySelectorAll('.team__social-tw');
let linkedin = document.getElementsByClassName('team__social-in');
let unba = document.getElementsByClassName('team__social-unba');
let twContacts = document.querySelector('.contacts__social-tw-icon');
let telegaContacts = document.querySelector('.contacts__social-tele-icon');
let mailContacts = document.querySelector('.contacts__social-mail');
let menuBox = document.querySelector('.menu__box');
let menuToggle = document.querySelector('#menu__toggle');



twContacts.addEventListener('mouseover', () => {
    twContacts.setAttribute('src', 'img/Twitter-orange.svg');
})

twContacts.addEventListener('mouseout', () => {
    twContacts.setAttribute('src', 'img/Twitter-white.svg');
})

telegaContacts.addEventListener('mouseover', () => {
    telegaContacts.setAttribute('src', 'img/Telegram-orange.svg');
})

telegaContacts.addEventListener('mouseout', () => {
    telegaContacts.setAttribute('src', 'img/Telegram-white.svg');
})

mailContacts.addEventListener('mouseover', () => {
    mailContacts.setAttribute('src', 'img/mail-orange.svg');
})

mailContacts.addEventListener('mouseout', () => {
    mailContacts.setAttribute('src', 'img/mail.svg');
})

menuBox.addEventListener('click', () => {
    menuToggle.checked = '';
})

for (let i = 0; i < face.length; i++) {
    face[i].addEventListener('mouseover', () => {
        face[i].setAttribute('src', 'img/Facebook-orange.svg')
    })
    face[i].addEventListener('mouseout', () => {
        face[i].setAttribute('src', 'img/Facebook.svg')
    })
}

for (let i = 0; i < tw.length; i++) {
    tw[i].addEventListener('mouseover', () => {
        tw[i].setAttribute('src', 'img/Twitter-orange.svg')
    })
    tw[i].addEventListener('mouseout', () => {
        tw[i].setAttribute('src', 'img/Twitter.svg')
    })
}

for (let i = 0; i < linkedin.length; i++) {
    linkedin[i].addEventListener('mouseover', () => {
        linkedin[i].setAttribute('src', 'img/Linkedin-orange.svg')
    })
    linkedin[i].addEventListener('mouseout', () => {
        linkedin[i].setAttribute('src', 'img/Linkedin.svg')
    })
}

for (let i = 0; i < unba.length; i++) {
    unba[i].addEventListener('mouseover', () => {
        unba[i].setAttribute('src', 'img/erau-orange.svg')
    })
    unba[i].addEventListener('mouseout', () => {
        unba[i].setAttribute('src', 'img/erau.svg')
    })
}
//more buttons in the Team section
let extension = document.querySelectorAll('.extension');
let more = document.querySelectorAll('.more');
let three_dots = document.querySelectorAll('.three-dots');

for (let i = 0; i < more.length; i++) {
    more[i].addEventListener('click', () => {
        extension[i].style.display = 'block';
        more[i].style.display = 'none';
        three_dots[i].style.display = 'none';
    })
}

//typing animation
let speed = 75;
let h1 = document.querySelector('.header-h1');
let delay = h1.innerHTML.length * speed + speed;

function typeEffect(element, speed) {
    let text = element.innerHTML;
    element.innerHTML = "";

    let i = 0;
    let timer = setInterval(() => {
        if (i < text.length) {
            element.append(text.charAt(i));
            i++;
        } else {
            clearInterval(timer);
        }
    }, speed);
}

// type affect to header
typeEffect(h1, speed);

// type affect to body
// setTimeout(function(){
//     p.style.display = "inline-block";
//     typeEffect(p, speed);
// }, delay);
