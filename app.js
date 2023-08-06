function generateHeart() {
    const heart = document.createElement('div');
    heart.innerText =  "⭐" ;
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.classList.add('heart');
    document.body.appendChild(heart);
}

setInterval(generateHeart, 100);
function generateAnotherThing() {
            const anotherThing = document.createElement('div');
            anotherThing.innerText = "💙";
            anotherThing.style.left = Math.random() * 100 + 'vw';
            anotherThing.style.animationDuration = Math.random() * 2 + 3 + 's';
            anotherThing.classList.add('another-thing');
            document.body.appendChild(anotherThing);
        }