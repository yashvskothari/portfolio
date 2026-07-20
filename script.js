// ===========================================
// PORTFOLIO SCRIPT
// PART 1
// ===========================================

// ===========================================
// EMAILJS INITIALIZATION
// ===========================================

emailjs.init({
    publicKey: "LkaDJrQ1PczRq_hJ2"
});


// ===========================================
// LOADING SCREEN
// ===========================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1200);

});


// ===========================================
// AOS INITIALIZATION
// ===========================================

AOS.init({

    duration: 1000,

    once: true,

    offset: 120,

    easing: "ease-in-out"

});


// ===========================================
// TYPING EFFECT
// ===========================================

new Typed("#typing", {

    strings: [

        "Power BI Developer",

        "Frontend Developer",

        "Data Analyst",

        "AI Enthusiast",

        "Problem Solver"

    ],

    typeSpeed: 70,

    backSpeed: 45,

    backDelay: 1500,

    loop: true,

    smartBackspace: true

});


// ===========================================
// PARTICLES BACKGROUND
// ===========================================

particlesJS("particles-js", {

    particles: {

        number: {

            value: 70,

            density: {

                enable: true,

                value_area: 900

            }

        },

        color: {

            value: "#edf1f8"

        },

        shape: {

            type: "circle"

        },

        opacity: {

            value: 0.35

        },

        size: {

            value: 3,

            random: true

        },

        line_linked: {

            enable: true,

            distance: 150,

            color: "#073bf7",

            opacity: 0.2,

            width: 1

        },

        move: {

            enable: true,

            speed: 2,

            direction: "none",

            random: false,

            straight: false,

            out_mode: "out"

        }

    },

    interactivity: {

        detect_on: "canvas",

        events: {

            onhover: {

                enable: true,

                mode: "grab"

            },

            onclick: {

                enable: true,

                mode: "push"

            }

        },

        modes: {

            grab: {

                distance: 170,

                line_linked: {

                    opacity: 0.6

                }

            },

            push: {

                particles_nb: 4

            }

        }

    },

    retina_detect: true

});


// ===========================================
// CUSTOM CURSOR
// ===========================================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";

    cursor.style.top = e.clientY + "px";

});


// Cursor Grow on Hover

const hoverElements = document.querySelectorAll(

    "a, button, .project-card, .skill-card, .image-card"

);

hoverElements.forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor.style.width = "45px";

        cursor.style.height = "45px";

    });

    item.addEventListener("mouseleave", () => {

        cursor.style.width = "26px";

        cursor.style.height = "26px";

    });

});


// ===========================================
// SCROLL PROGRESS BAR
// ===========================================

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scrollTop =

        document.documentElement.scrollTop;

    const scrollHeight =

        document.documentElement.scrollHeight -

        document.documentElement.clientHeight;

    const progress =

        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";

});


// ===========================================
// STICKY NAVBAR
// ===========================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    }

    else {

        header.classList.remove("scrolled");

    }

});


// ===========================================
// HERO IMAGE PARALLAX
// ===========================================

const heroImage = document.querySelector(".image-card");

window.addEventListener("mousemove", (e) => {

    if (!heroImage) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;

    const y = (window.innerHeight / 2 - e.clientY) / 40;

    heroImage.style.transform =

        `rotateY(${-x}deg) rotateX(${y}deg)`;

});


// Reset Image Rotation

window.addEventListener("mouseleave", () => {

    if (!heroImage) return;

    heroImage.style.transform =

        "rotateY(0deg) rotateX(0deg)";

});


// ===========================================
// OPTIONAL: CONSOLE MESSAGE
// ===========================================

console.log(

    "%cWelcome to Yash Kothari's Portfolio!",

    "color:#4F8CFF;font-size:18px;font-weight:bold;"

);

console.log(

    "%cDesigned with HTML, CSS & JavaScript",

    "color:#00E5FF;font-size:14px;"

);
// ===========================================
// PORTFOLIO SCRIPT
// PART 2
// Navigation & Scroll Features
// ===========================================



// ===========================================
// MOBILE MENU
// ===========================================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuBtn.classList.toggle("active");

    if (menuBtn.classList.contains("active")) {

        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    }

    else {

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});



// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        menuBtn.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});



// ===========================================
// SMOOTH SCROLL
// ===========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 70,

                behavior: "smooth"

            });

        }

    });

});



// ===========================================
// BACK TO TOP BUTTON
// ===========================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    }

    else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



// ===========================================
// SKILL BAR ANIMATION
// ===========================================

const skillSection = document.querySelector("#skills");
const skillBars = document.querySelectorAll(".fill");

let skillsAnimated = false;

function animateSkills() {

    if (skillsAnimated) return;

    const trigger = skillSection.getBoundingClientRect().top;

    if (trigger < window.innerHeight - 120) {

        skillsAnimated = true;

        skillBars.forEach(bar => {

            const finalWidth = window.getComputedStyle(bar).width;

            bar.style.width = "0px";

            setTimeout(() => {

                bar.style.width = finalWidth;

            }, 200);

        });

    }

}

window.addEventListener("scroll", animateSkills);
animateSkills();


// ===========================================
// ACTIVE NAVIGATION (SCROLL SPY)
// ===========================================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (

            window.scrollY >= sectionTop &&

            window.scrollY < sectionTop + sectionHeight

        ) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (

            link.getAttribute("href") === "#" + current

        ) {

            link.classList.add("active");

        }

    });

});



// ===========================================
// NAVBAR SHADOW WHEN MENU OPENS
// ===========================================

menuBtn.addEventListener("click", () => {

    if (navLinks.classList.contains("active")) {

        header.classList.add("scrolled");

    }

});



// ===========================================
// CLOSE MENU ON WINDOW RESIZE
// ===========================================

window.addEventListener("resize", () => {

    if (window.innerWidth > 900) {

        navLinks.classList.remove("active");

        menuBtn.classList.remove("active");

        menuBtn.innerHTML =

            '<i class="fa-solid fa-bars"></i>';

    }

});



// ===========================================
// FADE HEADER WHEN AT TOP
// ===========================================

window.addEventListener("scroll", () => {

    if (window.scrollY < 50) {

        header.style.background =

            "rgba(8,10,20,.45)";

    }

    else {

        header.style.background =

            "rgba(7,11,23,.92)";

    }

});



// ===========================================
// CONTACT FORM (EMAILJS)
// ===========================================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const button = contactForm.querySelector("button");

        const originalText = button.innerHTML;

        button.innerHTML = "Sending...";
        button.disabled = true;

        emailjs.sendForm(

            "service_pkrei8k",
            "template_xc9lgbj",
            this

        ).then(() => {

            alert("Message sent successfully!");

            contactForm.reset();

        }).catch((error) => {

            console.error(error);

            alert("Failed to send message.");

        }).finally(() => {

            button.innerHTML = originalText;

            button.disabled = false;

        });

    });

}

// ===========================================
// PORTFOLIO SCRIPT
// PART 3
// Premium Effects & Final Polish
// ===========================================



// ===========================================
// 3D PROJECT CARD TILT
// ===========================================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;

        const centerY = rect.height / 2;

        const rotateX = -((y - centerY) / 18);

        const rotateY = ((x - centerX) / 18);

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0deg) rotateY(0deg)";

    });

});



// ===========================================
// BUTTON RIPPLE EFFECT
// ===========================================

const rippleButtons = document.querySelectorAll(

    ".btn, button, .buttons a"

);

rippleButtons.forEach(button => {

    button.addEventListener("click", function(e){

        const circle = document.createElement("span");

        const diameter = Math.max(

            this.clientWidth,

            this.clientHeight

        );

        const radius = diameter / 2;

        circle.style.width = diameter + "px";

        circle.style.height = diameter + "px";

        circle.style.left =

            e.clientX -

            this.getBoundingClientRect().left -

            radius +

            "px";

        circle.style.top =

            e.clientY -

            this.getBoundingClientRect().top -

            radius +

            "px";

        circle.style.position = "absolute";

        circle.style.borderRadius = "50%";

        circle.style.background =

            "rgba(255,255,255,.45)";

        circle.style.transform = "scale(0)";

        circle.style.animation =

            "ripple .6s linear";

        circle.style.pointerEvents = "none";

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});



// ===========================================
// RIPPLE KEYFRAME
// ===========================================

const rippleStyle = document.createElement("style");

rippleStyle.innerHTML = `

@keyframes ripple{

0%{

transform:scale(0);

opacity:.8;

}

100%{

transform:scale(4);

opacity:0;

}

}

.btn,
button,
.buttons a{

overflow:hidden;

position:relative;

}

`;

document.head.appendChild(rippleStyle);



// ===========================================
// FLOATING HERO IMAGE
// ===========================================

let floatTime = 0;

function floatHero(){

    if(!heroImage) return;

    floatTime += 0.02;

    const y = Math.sin(floatTime) * 8;

    heroImage.style.marginTop = y + "px";

    requestAnimationFrame(floatHero);

}

floatHero();



// ===========================================
// PROJECT IMAGE PARALLAX
// ===========================================

document.querySelectorAll(".project-card img")

.forEach(image=>{

    image.addEventListener("mousemove",()=>{

        image.style.transform="scale(1.08)";

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform="scale(1)";

    });

});



// ===========================================
// RANDOM GLOW COLOR
// ===========================================

const glowColors=[

"#4F8CFF",

"#00E5FF",

"#7C3AED",

"#7ED957"

];

setInterval(()=>{

    const random=

    glowColors[

        Math.floor(

            Math.random()*glowColors.length

        )

    ];

    document.documentElement.style.setProperty(

        "--primary",

        random

    );

},10000);



// ===========================================
// INTERSECTION OBSERVER
// ===========================================

const observer=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},

{

threshold:.15

}

);

document.querySelectorAll(

".about-card,.skill-card,.project-card,.timeline-item"

)

.forEach(el=>observer.observe(el));



// ===========================================
// CARD HOVER GLOW
// ===========================================

document.querySelectorAll(

".project-card,.skill-card"

)

.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.boxShadow=

"0 20px 50px rgba(79,140,255,.35)";

});

card.addEventListener("mouseleave",()=>{

card.style.boxShadow="";

});

});


// ===========================================
// CURRENT YEAR (OPTIONAL)
// ===========================================

const footer=document.querySelector("footer p");

if(footer){

footer.innerHTML=

`© ${new Date().getFullYear()} Yashvardhan Singh Kothari. <br> Designed, developed, and continuously improved.`;

}



// ===========================================
// PAGE FADE IN
// ===========================================

document.body.style.opacity="0";

window.addEventListener("load",()=>{

setTimeout(()=>{

document.body.style.transition=

"opacity .8s ease";

document.body.style.opacity="1";

},200);

});



// ===========================================
// END OF FILE
// ===========================================