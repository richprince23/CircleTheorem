var player = document.getElementById('player');

function loadLesson1(){
    // player.style.display = "block";
    document.querySelector("#btnNext").style.display = "flex";
    document.querySelector("#lesson-content").innerHTML = document.getElementById("1").innerHTML;
    document.querySelector("#main-lesson-title").innerHTML = "LESSON 1";
    document.querySelector("#lesson-title").innerHTML = "LESSON 1";
    document.querySelector("#player").src = "./videos/lesson1.mp4";
    document.querySelector("title").innerHTML = "Circle Theorem | Lesson 1";
    document.querySelector("#btnPrev").setAttribute("data-prev", "null")
    document.querySelector("#btnNext").setAttribute("data-next", "2")
    
}

function loadLesson2(){
    // player.style.display = "block";
    document.querySelector("#btnNext").style.display = "flex";
    document.querySelector("#lesson-content").innerHTML = document.getElementById("2").innerHTML;
    document.querySelector("#main-lesson-title").innerHTML = "LESSON 2";
    document.querySelector("#lesson-title").innerHTML = "LESSON 2";
    document.querySelector("#player").src = "./videos/lesson2.mp4";
    document.querySelector("title").innerHTML = "Circle Theorem | Lesson 2";
    document.querySelector("#btnPrev").setAttribute("data-prev", "1")
    document.querySelector("#btnNext").setAttribute("data-next", "3")
}
function loadLesson3(){
    document.querySelector("#lesson-content").innerHTML = document.getElementById("3").innerHTML;
    document.querySelector("#main-lesson-title").innerHTML = "LESSON 3";
    document.querySelector("#lesson-title").innerHTML = "LESSON 3";
    document.querySelector("#player").src = "./videos/lesson3.mp4";
    document.querySelector("title").innerHTML = "Circle Theorem | Lesson 3";
    document.querySelector("#btnPrev").setAttribute("data-prev", "2")
    document.querySelector("#btnNext").setAttribute("data-next", "4")
}
function loadLesson4(){
    // player.style.display = "block";
    document.querySelector("#btnNext").style.display = "flex";
    document.querySelector("#lesson-content").innerHTML = document.getElementById("4").innerHTML;
    document.querySelector("#main-lesson-title").innerHTML = "LESSON 4";
    document.querySelector("#lesson-title").innerHTML = "LESSON 4";
    document.querySelector("#player").src = "./videos/lesson4.mp4";
    document.querySelector("title").innerHTML = "Circle Theorem | Lesson 4";
    document.querySelector("#btnPrev").setAttribute("data-prev", "3")
    document.querySelector("#btnNext").setAttribute("data-next", "5")
}
function loadLesson5(){
    // player.style.display = "block";
    document.querySelector("#btnNext").style.display = "flex";
    document.querySelector("#lesson-content").innerHTML = document.getElementById("5").innerHTML;
    document.querySelector("#main-lesson-title").innerHTML = "LESSON 5";
    document.querySelector("#lesson-title").innerHTML = "LESSON 5";
    document.querySelector("#player").src = "./videos/lesson5.mp4";
    document.querySelector("title").innerHTML = "Circle Theorem | Lesson 5";
    document.querySelector("#btnPrev").setAttribute("data-prev", "4")
    document.querySelector("#btnNext").setAttribute("data-next", "6")
}
function loadLesson6(){
    // player.style.display = "block";
    document.querySelector("#btnNext").style.display = "flex";
    document.querySelector("#lesson-content").innerHTML = document.getElementById("6").innerHTML;
    document.querySelector("#main-lesson-title").innerHTML = "LESSON 6";
    document.querySelector("#lesson-title").innerHTML = "LESSON 6";
    document.querySelector("#player").src = "./videos/lesson6.mp4";
    document.querySelector("title").innerHTML = "Circle Theorem | Lesson 6";
    document.querySelector("#btnPrev").setAttribute("data-prev", "5")
    document.querySelector("#btnNext").setAttribute("data-next", "7")

}
function loadLesson7(){
    // player.style.display = "none";
    document.querySelector("#btnNext").style.display = "flex";
    document.querySelector("#lesson-content").innerHTML = document.getElementById("7").innerHTML;
    document.querySelector("#main-lesson-title").innerHTML = "LESSON 7";
    document.querySelector("#lesson-title").innerHTML = "LESSON 7";
    // document.querySelector("#player").src = "./videos/lesson6.mp4";
    document.querySelector("title").innerHTML = "Circle Theorem | Lesson 7";
    document.querySelector("#btnPrev").setAttribute("data-prev", "6")
    document.querySelector("#btnNext").setAttribute("data-next", "8")
    document.querySelector("#btnNext").style = null;
    document.querySelector("#btnNext").textContent = "Next";

}
function loadLesson8(){
    player.style.display = "block";
    document.querySelector("#btnNext").style.display = "flex";
    document.querySelector("#lesson-content").innerHTML = document.getElementById("8").innerHTML;
    document.querySelector("#main-lesson-title").innerHTML = "LESSON 8";
    document.querySelector("#lesson-title").innerHTML = "LESSON 8";
    // document.querySelector("#player").src = "./videos/lesson6.mp4";
    document.querySelector("title").innerHTML = "Circle Theorem | Lesson 8";
    document.querySelector("#btnPrev").setAttribute("data-prev", "7")
    document.querySelector("#btnNext").setAttribute("data-next", "answers")
    document.querySelector("#btnNext").textContent = "View Answers";

}


function loadAnswers(){
    document.querySelector("#btnNext").style.display = "none";
    document.querySelector("#lesson-content").innerHTML = document.getElementById("answers").innerHTML;
    document.querySelector("#main-lesson-title").innerHTML = "ANSWERS";
    document.querySelector("#lesson-title").innerHTML = "ANSWERS";
    // document.querySelector("#player").src = "./videos/lesson6.mp4";
    // player.style.display = "none";
    document.querySelector("title").innerHTML = "Circle Theorem | ANSWERS";
    document.querySelector("#btnPrev").setAttribute("data-prev", "6")
    
}

document.querySelector("#btnPrev").addEventListener('click', ()=>{
    let prev = document.querySelector("#btnPrev").getAttribute("data-prev");
    switch(prev){
        case "null":
            // case 1
            break;
        case "1":
            loadLesson1();
            break;
        case "2":
            loadLesson2();
            break;
        case "3":
            loadLesson3();
            break;
        case "4":
            loadLesson4();
            break;
        case "5":
            loadLesson5();
            break;
        case "6":
            loadLesson6();
            break;
        case "7":
            loadLesson7();
            break;
        case "8":
            loadLesson8();
            break;
        default:
            // default code
    };
});
document.querySelector("#btnNext").addEventListener('click', ()=>{
    let next = document.querySelector("#btnNext").getAttribute("data-next");
    switch(next){
        case "null":
            // case 1
            break;
        case "1":
            loadLesson1();
            break;
        case "2":
            loadLesson2();
            break;
        case "3":
            loadLesson3();
            break;
        case "4":
            loadLesson4();
            break;
        case "5":
            loadLesson5();
            break;
        case "6":
            loadLesson6();
            break;
        case "7":
            loadLesson7();
            break;
        case "8":
            loadLesson8();
            break;
        case "answers":
            loadAnswers();
            break;
        default:
            // default code
    };
});