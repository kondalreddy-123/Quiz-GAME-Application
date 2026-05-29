
let index = 0;
let score = 0;

let id = document.querySelector("#result");

const k = document.querySelectorAll(".opt");
const inputs = document.querySelectorAll(".inp");

const blankInput = document.getElementById("blankInput");

const arr = [

{
    question: "Who is the captain of RCB in IPL?",
    options: ["Virat kohli", "Shubman gill", "Rajat patidar", "Pat cummins"],
    answer: "Rajat patidar"
},

{
    question: "Which team had won 2022 IPL title?",
    options: ["RCB", "GT", "CSK", "KKR"],
    answer: "GT"
},

{
    question: "Which team among have more than one home ground in IPL 2026?",
    options: ["CSK", "RCB", "DC", "PBKS"],
    answer: ["RCB", "DC", "PBKS"]
},

{
    question: "Who is leading run scorer in IPL ________ ?",
    answer: "virat kohli",
    type: "blank"
}

];

const qu = document.getElementById("question");

function display() {
    
    qu.innerText = arr[index].question;

    // fill in the blank question
    if (arr[index].type === "blank") {

        blankInput.style.display = "block";

        for (let i = 0; i < k.length; i++) {

            k[i].parentElement.style.display = "none";
        }

        blankInput.value = "";
    }

    else {

        blankInput.style.display = "none";

        for (let i = 0; i < k.length; i++) {

            k[i].parentElement.style.display = "block";

            k[i].innerText = arr[index].options[i];

            inputs[i].checked = false;
        }

        // checkbox question
        if (Array.isArray(arr[index].answer)) {

            for (let i = 0; i < inputs.length; i++) {

                inputs[i].type = "checkbox";
            }
        }

        // radio question
        else {

            for (let i = 0; i < inputs.length; i++) {

                inputs[i].type = "radio";
                inputs[i].name = "quiz";
            }
        }
    }
}

function nextq() {
    
    // fill in the blank
    if (arr[index].type === "blank") {

        let userAnswer = blankInput.value.toLowerCase().trim();

        if (userAnswer === arr[index].answer.toLowerCase()) {

            score++;
        }
    }

    // checkbox question
    else if (Array.isArray(arr[index].answer)) {

        let correct = true;

        for (let i = 0; i < inputs.length; i++) {

            let text = k[i].innerText;

            if (
                inputs[i].checked &&
                !arr[index].answer.includes(text)
            ) {
                correct = false;
            }

            if (
                !inputs[i].checked &&
                arr[index].answer.includes(text)
            ) {
                correct = false;
            }
        }

        if (correct) {

            score++;
        }
    }

    // radio question
    else {

        let selected = "";

        for (let i = 0; i < inputs.length; i++) {

            if (inputs[i].checked) {

                selected = k[i].innerText;
            }
        }

        if (selected === arr[index].answer) {

            score++;
        }
    }

    index++;

    if (index < arr.length) {

        display();

    } 
    
    else {

        id.innerText = "Final Score : " + score;
    }
}
function king(){
    index=0;
    display();
    score=0;
}
display();
