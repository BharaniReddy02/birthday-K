/* ==========================================================
   HAPPY BIRTHDAY KALYAN
   PREMIUM SCRIPT
   PART 1
==========================================================*/

// =======================================
// DOM Elements
// =======================================

const intro = document.getElementById("intro");
const openBtn = document.getElementById("openBtn");
const mainContent = document.getElementById("mainContent");

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

const giftBox = document.getElementById("giftBox");
const letter = document.getElementById("letterSection");

const celebrateBtn = document.getElementById("celebrateBtn");

const typingText = document.getElementById("typingText");

const heartContainer = document.getElementById("heartContainer");
const balloonContainer = document.getElementById("balloonContainer");
const shootingContainer = document.getElementById("shootingStars");

// =======================================
// Birthday Message
// =======================================

const message =
"Happy Birthday Waste fellow 🫶🏻 Wishing you endless happiness, success, good health and lots of beautiful memories. Enjoy every moment of your special day! 🎂❤️";

// =======================================
// Intro
// =======================================

openBtn.addEventListener("click", () => {

    intro.style.opacity = "0";

    setTimeout(() => {

        intro.style.display = "none";

        mainContent.classList.remove("hidden");

        startMusic();

        typeWriter();

        launchConfetti();

        createHearts();

        createBalloons();

        createShootingStars();

    },900);

});

// =======================================
// Music
// =======================================

function startMusic(){

    music.volume=.5;

    music.play();

    musicBtn.classList.add("playing");

}

musicBtn.addEventListener("click",()=>{

if(music.paused){

music.play();

musicBtn.classList.add("playing");

}else{

music.pause();

musicBtn.classList.remove("playing");

}

});

// =======================================
// Typewriter
// =======================================

let index=0;

function typeWriter(){

if(index<message.length){

typingText.innerHTML+=message.charAt(index);

index++;

setTimeout(typeWriter,40);

}

}

// =======================================
// Swiper
// =======================================

const swiper=new Swiper(".mySwiper",{

loop:true,

speed:1500,

effect:"fade",

autoplay:{

delay:3000,

disableOnInteraction:false

},

pagination:{

el:".swiper-pagination",

clickable:true

}

});

// =======================================
// AOS
// =======================================

AOS.init({

duration:1000,

once:true

});

// =======================================
// Gift Opening
// =======================================

giftBox.addEventListener("click",()=>{

giftBox.classList.add("open");

setTimeout(()=>{

letter.classList.remove("hidden");

letter.classList.add("showLetter");

letter.scrollIntoView({

behavior:"smooth"

});

launchConfetti();

},900);

});

// =======================================
// Celebrate Button
// =======================================

celebrateBtn.addEventListener("click",()=>{

launchConfetti();

for(let i=0;i<6;i++){

setTimeout(()=>{

launchConfetti();

},i*400);

}

});
/* ==========================================================
   PART 2
   PARTICLES + CONFETTI + FLOATING EFFECTS
==========================================================*/

// =======================================
// Floating Hearts
// =======================================

function createHeart() {

    const heart = document.createElement("i");

    heart.className = "fa-solid fa-heart heart";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (18 + Math.random() * 20) + "px";

    heart.style.animationDuration = (6 + Math.random() * 6) + "s";

    heart.style.opacity = Math.random();

    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 12000);

}

function createHearts() {

    setInterval(() => {

        createHeart();

    }, 500);

}

// =======================================
// Balloons
// =======================================

const balloonColors = [

"#ff4d6d",
"#FFD700",
"#6C63FF",
"#00C896",
"#FF7F50",
"#00BFFF"

];

function createBalloon(){

const balloon=document.createElement("div");

balloon.classList.add("balloon");

balloon.style.left=Math.random()*100+"vw";

balloon.style.background=

balloonColors[Math.floor(Math.random()*balloonColors.length)];

balloon.style.animationDuration=

(8+Math.random()*5)+"s";

balloonContainer.appendChild(balloon);

setTimeout(()=>{

balloon.remove();

},14000);

}

function createBalloons(){

setInterval(()=>{

createBalloon();

},1800);

}

// =======================================
// Shooting Stars
// =======================================

function shootingStar(){

const star=document.createElement("div");

star.className="shootingStar";

star.style.left=(Math.random()*100)+"vw";

star.style.top=(Math.random()*35)+"vh";

shootingContainer.appendChild(star);

setTimeout(()=>{

star.remove();

},3000);

}

function createShootingStars(){

setInterval(()=>{

shootingStar();

},5000);

}

// =======================================
// Confetti
// =======================================

function launchConfetti(){

confetti({

particleCount:180,

spread:90,

origin:{

y:.6

}

});

confetti({

particleCount:120,

angle:60,

spread:70,

origin:{

x:0

}

});

confetti({

particleCount:120,

angle:120,

spread:70,

origin:{

x:1

}

});

}

// =======================================
// Auto Confetti Every Minute
// =======================================

setInterval(()=>{

launchConfetti();

},60000);

// =======================================
// Hero Animation
// =======================================

gsap.from(".hero h1",{

opacity:0,

y:60,

duration:1.2

});

gsap.from(".hero h3",{

opacity:0,

y:40,

delay:.3,

duration:1

});

gsap.from("#typingText",{

opacity:0,

y:20,

delay:.7,

duration:1

});

// =======================================
// Scroll Animation
// =======================================

gsap.utils.toArray("section").forEach(section=>{

gsap.from(section,{

scrollTrigger:section,

opacity:0,

y:60,

duration:1

});

});
/* ==========================================================
   PART 3
   FINAL FEATURES
==========================================================*/

// =======================================
// Fireworks Effect
// =======================================

function fireworks() {

    const duration = 4000;

    const animationEnd = Date.now() + duration;

    const interval = setInterval(() => {

        if (Date.now() > animationEnd) {

            clearInterval(interval);

            return;

        }

        confetti({

            particleCount: 40,

            startVelocity: 40,

            spread: 360,

            ticks: 100,

            origin: {

                x: Math.random(),

                y: Math.random() - 0.2

            }

        });

    }, 250);

}

// =======================================
// Celebrate Button
// =======================================

celebrateBtn.addEventListener("click", () => {

    fireworks();

});

// =======================================
// Gallery Click Animation
// =======================================

document.querySelectorAll(".swiper-slide img").forEach(img => {

    img.addEventListener("click", () => {

        img.animate([

            {

                transform: "scale(1)"

            },

            {

                transform: "scale(1.08)"

            },

            {

                transform: "scale(1)"

            }

        ], {

            duration: 600

        });

    });

});

// =======================================
// Cursor Sparkle
// =======================================

document.addEventListener("mousemove", e => {

    if (window.innerWidth < 768) return;

    const star = document.createElement("div");

    star.innerHTML = "✨";

    star.style.position = "fixed";

    star.style.left = e.clientX + "px";

    star.style.top = e.clientY + "px";

    star.style.pointerEvents = "none";

    star.style.fontSize = "12px";

    star.style.zIndex = "9999";

    document.body.appendChild(star);

    star.animate([

        {

            opacity: 1,

            transform: "translateY(0)"

        },

        {

            opacity: 0,

            transform: "translateY(-30px)"

        }

    ], {

        duration: 800

    });

    setTimeout(() => {

        star.remove();

    }, 800);

});

// =======================================
// Music Fade In
// =======================================

music.volume = 0;

function fadeMusic() {

    let volume = 0;

    const fade = setInterval(() => {

        volume += 0.05;

        if (volume >= 0.5) {

            volume = 0.5;

            clearInterval(fade);

        }

        music.volume = volume;

    }, 150);

}

openBtn.addEventListener("click", () => {

    setTimeout(fadeMusic, 800);

});

// =======================================
// Pause Effects when Tab is Hidden
// =======================================

document.addEventListener("visibilitychange", () => {

    if (document.hidden) {

        music.pause();

    } else {

        music.play().catch(() => {});

    }

});

// =======================================
// Keyboard Shortcuts
// =======================================

document.addEventListener("keydown", e => {

    if (e.code === "Space") {

        e.preventDefault();

        musicBtn.click();

    }

});

// =======================================
// Welcome Message
// =======================================

console.log("%c🎉 Happy Birthday Kalyan ❤️", "color:#FFD700;font-size:24px;font-weight:bold;");
console.log("%cMade with ❤️ especially for Kalyan", "color:white;font-size:16px;");

// =======================================
// End of Script
// =======================================