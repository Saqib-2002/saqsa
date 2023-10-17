function rem() {
    return this.style.display = 'none';
}

//const btn1 = document.getElementByClassName("button1");

function random(number) {
    return Math.floor(Math.random() * (number + 1));
}


/*
btn1.addEventListener("click", () => {
    const rndcol = rgb(`${random(255)}, ${random(255)}, ${random(255)}`);
    document.body.style.backgroundColor = 'red';
}); */


function onClick() {
    const randcol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    // document.body.style.backgroundColor = 'red';
    // console.log("hello there---", document.getElementById("button1"))
    document.getElementById("button1").style.color = randcol;
    //document.getElementById("button1").style.backgroundColor = randcol;
}

// function onClick() {
//     const randcol = 'red';
//     document.getElementById("button1").style.backgroundColor = randcol;
// }


/*function createParagraph() {
    const para = document.createElement("h6");
    para.textContent = "You clicked the button!";
    document.body.appendChild(para);
}

const buttons = document.getElementsByClassName("button1");

for (const button of buttons) {
    button.addEventListener("click", createParagraph);
}*/

const btn = document.getElementById("button2");
btn.addEventListener("click", update_btn);
function update_btn () {
    if (btn.textContent === "Start Processing") {
        btn.textContent = "Stop Processing";
        console.log("The processing has been started.");
    }
    else {
        btn.textContent = "Start Processing";
        console.log("The processing is stopped.");
    }

}