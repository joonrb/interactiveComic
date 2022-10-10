let clickSound = new Audio("sound/mouseClickSound.mp3");
let backgroundMusic = new Audio("sound/bgm.mp3");

window.addEventListener("DOMContentLoaded", event => {
  const audio = document.querySelector("backgroundMusic");
  audio.volume = 0.2;
  audio.play();
});

let dormClicked = document.getElementById("dorm");

dormClicked.addEventListener("click", ()=>{
    clickSound.play();
    if(document.getElementById("dorm_m").style.display == "none")
        document.getElementById("dorm_m").style.display = "block";
    else
        document.getElementById("dorm_m").style.display = "none";
})

let skipClicked = document.getElementById("skip");

skipClicked.addEventListener("click", ()=>{
    clickSound.play();
    if(document.getElementById("skip_m").style.display == "none")
        document.getElementById("skip_m").style.display = "block";
    else
        document.getElementById("skip_m").style.display = "none";
})

let waitFriendClicked = document.getElementById("waitfriend");

waitFriendClicked.addEventListener("click", ()=>{
    clickSound.play();
    if(document.getElementById("waitfriend_m").style.display == "none")
        document.getElementById("waitfriend_m").style.display = "block";
    else
        document.getElementById("waitfriend_m").style.display = "none";
})

let eatAloneClicked = document.getElementById("eatalone");

eatAloneClicked.addEventListener("click", ()=>{
    clickSound.play();
    if(document.getElementById("eatalone_m").style.display == "none")
        document.getElementById("eatalone_m").style.display = "block";
    else
        document.getElementById("eatalone_m").style.display = "none";
})

let partyClicked = document.getElementById("party");

partyClicked.addEventListener("click", ()=>{
    clickSound.play();
    if(document.getElementById("party_m").style.display == "none")
        document.getElementById("party_m").style.display = "block";
    else
        document.getElementById("party_m").style.display = "none";
})

let studyClicked = document.getElementById("study");

studyClicked.addEventListener("click", ()=>{
    clickSound.play();
    if(document.getElementById("study_m").style.display == "none")
        document.getElementById("study_m").style.display = "block";
    else
        document.getElementById("study_m").style.display = "none";
})
/*
let coffeeClicked = document.getElementById("coffee");

coffeeClicked.addEventListener("click", ()=>{
    console.log("HI");
    if(document.getElementById("study_m").style.display == "none")
        document.getElementById("study_m").style.display = "block";
    else
        document.getElementById("study_m").style.display = "none";
})*/

let dateClicked = document.getElementById("date_night");

dateClicked.addEventListener("click", ()=>{
    clickSound.play();
    if(document.getElementById("datenightbubble").style.display == "none")
        document.getElementById("datenightbubble").style.display = "block";
    else
        document.getElementById("datenightbubble").style.display = "none";
})

let barahaClicked = document.getElementById("fun_baraha");

barahaClicked.addEventListener("click", ()=>{
    clickSound.play();
    if(document.getElementById("funbarahabubble").style.display == "none")
        document.getElementById("funbarahabubble").style.display = "block";
    else
        document.getElementById("funbarahabubble").style.display = "none";
})

let selfCareClicked = document.getElementById("selfcare_workout");

selfCareClicked.addEventListener("click", ()=>{
    clickSound.play();
    if(document.getElementById("selfcarebubble").style.display == "none")
        document.getElementById("selfcarebubble").style.display = "block";
    else
        document.getElementById("selfcarebubble").style.display = "none";
})

let studySit3Clicked = document.getElementById("studySit3");

studySit3Clicked.addEventListener("click", ()=>{
    clickSound.play();
    if(document.getElementById("studybubble").style.display == "none")
        document.getElementById("studybubble").style.display = "block";
    else
        document.getElementById("studybubble").style.display = "none";
})

let exitClicked = document.getElementById("Exit");

exitClicked.addEventListener("click", ()=>{
    clickSound.play();
    document.getElementById("Result").style.display = "block";
    document.getElementById("Exit").style.display = "none";   
    document.getElementById("exitPrompt").style.display = "none";
    document.getElementById("Thought").style.display = "none";
})
