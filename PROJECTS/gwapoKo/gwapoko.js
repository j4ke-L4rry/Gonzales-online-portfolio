const noButton = document.getElementById("noButton");
const box = document.querySelector(".box");

const noMessages = [
    "Wehh? sure ka ana?",
    "Bisag gwapohan jud na ba",
    "Ayaw palag, e yes nana",
    "LAINAHA >:(",

];

let clickCount = 0;

noButton.addEventListener('mouseover', () => {
    const maxX = box.clientWidth -  noButton.clientWidth - 20;
    const maxY = box.clientHeight - noButton.clientHeight - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";
});

document.getElementById("yesButton").addEventListener('click',()=>{
    alert("kahibaw man ko");
});


noButton.addEventListener('click',()=>{
    alert(noMessages[clickCount]);
    clickCount = (clickCount + 1) % noMessages.length;
});