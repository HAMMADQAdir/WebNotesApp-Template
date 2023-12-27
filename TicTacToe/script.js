var boxes = document.querySelectorAll(".box");
var reset_btn = document.querySelector("#reset");
let flag = 0;
let winningArray = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6]
];
var winner = document.querySelector("h2");

reset_btn.addEventListener("click", function () {
    boxes.forEach((box) => {
        box.innerText = "";
        winner.innerHTML = "";
    });
});

// No need to set innerText to "" for each box outside the reset event listener

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (!flag) {
            if (box.innerText === "") {
                flag = 1;
                console.log("X");
                box.style.color = "green";
                box.innerHTML = "X";

                if (checkWinning() === 1) {
                    winner.innerHTML = "Winner : X";
                    setTimeout(function(){
                        
                            boxes.forEach((box) => {
                                box.innerText = "";
                                winner.innerHTML = "";
                            });
                        
                    },2000)
                } else if (draw()) {
                    winner.innerHTML = "Draw";
                    setTimeout(function(){
                        
                        boxes.forEach((box) => {
                            box.innerText = "";
                            winner.innerHTML = "";
                        });
                    
                },2000)
                }
            } else {
                handleInvalidMove();
            }
        } else if (flag === 1) {
            if (box.innerText === "") {
                console.log("O");
                box.style.color = "red";
                flag = 0;
                box.innerHTML = "O";

                if (checkWinning() === 1) {
                    winner.innerHTML = "Winner : X";
                    setTimeout(function(){
                        
                        boxes.forEach((box) => {
                            box.innerText = "";
                            winner.innerHTML = "";
                        });
                    
                },2000)
                } else if (draw()) {
                    winner.innerHTML = "Draw";
                    setTimeout(function(){
                        
                        boxes.forEach((box) => {
                            box.innerText = "";
                            winner.innerHTML = "";
                        });
                    
                },2000)
                }
            } else {
                handleInvalidMove();
            }
        }
    });
});

function draw() {
   
    let allBoxesFilled = Array.from(boxes).every((box) => box.innerText !== "");

   
    if (allBoxesFilled && checkWinning() === -1) {
        console.log("Draw");
        return true;
    }
    return false;
}

function checkWinning() {
    for (let pattern of winningArray) {
        if (
            boxes[pattern[0]].innerText === "X" &&
            boxes[pattern[1]].innerText === "X" &&
            boxes[pattern[2]].innerText === "X"
        ) {
            console.log("X is the winner");

            boxes[pattern[0]].style.color = "#809848";
            boxes[pattern[1]].style.color = "#809848";
            boxes[pattern[2]].style.color = "#809848";
            return 1;
        } else if (
            boxes[pattern[0]].innerText === "O" &&
            boxes[pattern[1]].innerText === "O" &&
            boxes[pattern[2]].innerText === "O"
        ) {
            console.log("O is the winner");
            boxes[pattern[0]].style.color = "#809848";
            boxes[pattern[1]].style.color = "#809848";
            boxes[pattern[2]].style.color = "#809848";
            return 0;
        }
    }
   
    return -1;
}

function handleInvalidMove() {
    winner.style.color = "red";
    winner.innerHTML = "Enter at an empty position!!";
    setTimeout(() => {
        winner.innerHTML = "Winner : ";
    }, 3000);
}
