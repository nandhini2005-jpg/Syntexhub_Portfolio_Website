// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e){
        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }
    });
});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

function reveal(){
    reveals.forEach(item=>{
        const windowHeight = window.innerHeight;
        const revealTop = item.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", reveal);
reveal();

// Typing Effect
const typing = document.querySelector(".typing");

const textArray = [
    "AI Enthusiast",
    "Web Developer",
    "Frontend Designer"
];

let textIndex = 0;
let charIndex = 0;

function typeText(){

    if(charIndex < textArray[textIndex].length){

        typing.textContent +=
        textArray[textIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText,100);

    }else{

        setTimeout(eraseText,1500);

    }
}

function eraseText(){

    if(charIndex > 0){

        typing.textContent =
        textArray[textIndex].substring(0,charIndex-1);

        charIndex--;

        setTimeout(eraseText,50);

    }else{

        textIndex++;

        if(textIndex >= textArray.length){
            textIndex = 0;
        }

        setTimeout(typeText,300);
    }
}

document.addEventListener("DOMContentLoaded",()=>{
    if(typing){
        typeText();
    }
});