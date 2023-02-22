//your code here
let board = document.querySelector('.grid-container')

for (let i = 0; i < 100; i++) {
    let boardCell = document.createElement('div')
    boardCell.id = i;
    boardCell.classList.add('grid-item', 'valid')
    boardCell.setAttribute('data', "0")

    boardCell.innerText = i
    board.appendChild(boardCell)
}

let bombIds = [];
while (bombIds.length < 10) {
    let randomId = Math.floor(Math.random() * 60) + 20;
    if (!bombIds.includes(randomId)) {
        bombIds.push(randomId);
    }
}

for (let i = 0; i < bombIds.length; i++) {
    let bombDiv = document.getElementById(bombIds[i]);
    bombDiv.classList.remove('valid');
    bombDiv.classList.add('bomb');
    bombDiv.style.backgroundColor = 'red';
}

let bombArrDATA = {
    left: -1,
    right: "+" + 1,
    up: -10,
    down: "+" + 10,
    upLeft: -11,
    upRight: -9,
    downLeft: "+" + 9,
    downRight: "+" + 11
};

let bombArrDATARIGHT = {
    left: -1,
    up: -10,
    down: "+" + 10,
    upLeft: -11,
    downLeft: "+" + 9,
};

let bombArrDATALEFT = {
    right: "+" + 1,
    up: -10,
    down: "+" + 10,
    upRight: -9,
    downRight: "+" + 11
};

console.log(bombIds);
for (let i = 0; i < bombIds.length; i++) {
    console.log("index---->", i);
    console.log("bombid>>>", bombIds[i]);
    if (bombIds[i] % 10 === 0) {
        console.log("hiii");
        for (let bomb in bombArrDATALEFT) {
            let bombsNumber = eval(bombIds[i] + String(bombArrDATALEFT[bomb]))
            if (bombsNumber % 10 !== 0 && (bombsNumber - 9) % 10 !== 0) {
                let bombsNumberDiv = document.getElementById(bombsNumber)
        let newbombcount = 0;
                for (let newbomb in bombArrDATA) {
                    console.log("bombsNumber", bombsNumber);
                    let newBombnumbers = eval(bombsNumber + String(bombArrDATA[newbomb]))
                    console.log("newBombnumbersDiv>>>>", newBombnumbers);
                    let divOfnewNumber = document.getElementById(newBombnumbers);
                    console.log(divOfnewNumber);
                    console.log("newbombcount-before if>>>>", newbombcount);
                    if (divOfnewNumber.classList.contains('bomb')) {
                        newbombcount++;
                        console.log("newbombcount-inside if>>>>", newbombcount);
                    }
                    console.log("newbombcount-after if>>>>", newbombcount);

                }
                bombsNumberDiv.setAttribute('data',newbombcount)
                console.log(bombsNumberDiv);
            } else if (bombsNumber % 10 === 0) {
                let bombsNumberDiv = document.getElementById(bombsNumber)
                let newbombcount = 0;
                for (let newbomb in bombArrDATALEFT) {
                    console.log("bombsNumber", bombsNumber);
                    let newBombnumbers = eval(bombsNumber + String(bombArrDATALEFT[newbomb]))
                    console.log("newBombnumbersDiv>>>>", newBombnumbers);
                    let divOfnewNumber = document.getElementById(newBombnumbers);
                    console.log(divOfnewNumber);
                    console.log("newbombcount-before if>>>>", newbombcount);
                    if (divOfnewNumber.classList.contains('bomb')) {
                        newbombcount++;
                        console.log("newbombcount-inside if>>>>", newbombcount);
                    }
                    console.log("newbombcount-after if>>>>", newbombcount);

                }
                bombsNumberDiv.setAttribute('data',newbombcount)
                console.log(bombsNumberDiv);
            }
        }
    } else if ((bombIds[i] - 9) % 10 === 0) {
        console.log("hiii-2");
        for (let bomb in bombArrDATARIGHT) {
            let bombsNumber = eval(bombIds[i] + String(bombArrDATARIGHT[bomb]))
            if (bombsNumber % 10 !== 0 && (bombsNumber - 9) % 10 !== 0) {
                let bombsNumberDiv = document.getElementById(bombsNumber)
        let newbombcount = 0;
                for (let newbomb in bombArrDATA) {
                    console.log("bombsNumber", bombsNumber);
                    let newBombnumbers = eval(bombsNumber + String(bombArrDATA[newbomb]))
                    console.log("newBombnumbersDiv>>>>", newBombnumbers);
                    let divOfnewNumber = document.getElementById(newBombnumbers);
                    console.log(divOfnewNumber);
                    console.log("newbombcount-before if>>>>", newbombcount);
                    if (divOfnewNumber.classList.contains('bomb')) {
                        newbombcount++;
                        console.log("newbombcount-inside if>>>>", newbombcount);
                    }
                    console.log("newbombcount-after if>>>>", newbombcount);

                }
                bombsNumberDiv.setAttribute('data',newbombcount)
                console.log(bombsNumberDiv);
            } else if ((bombsNumber - 9) % 10 === 0) {
                let bombsNumberDiv = document.getElementById(bombsNumber)
                let newbombcount = 0;
                for (let newbomb in bombArrDATARIGHT) {
                    console.log("bombsNumber", bombsNumber);
                    let newBombnumbers = eval(bombsNumber + String(bombArrDATARIGHT[newbomb]))
                    console.log("newBombnumbersDiv>>>>", newBombnumbers);
                    let divOfnewNumber = document.getElementById(newBombnumbers);
                    console.log(divOfnewNumber);
                    console.log("newbombcount-before if>>>>", newbombcount);
                    if (divOfnewNumber.classList.contains('bomb')) {
                        newbombcount++;
                        console.log("newbombcount-inside if>>>>", newbombcount);
                    }
                    console.log("newbombcount-after if>>>>", newbombcount);

                }
                bombsNumberDiv.setAttribute('data',newbombcount)
                console.log(bombsNumberDiv);
            }

        }
    } else {
        console.log("hiii-3");
        console.log("bombIds[i]", bombIds[i]);
        for (let bomb in bombArrDATA) {
            let bombsNumber = eval(bombIds[i] + String(bombArrDATA[bomb]))
            if (bombsNumber % 10 !== 0 && (bombsNumber - 9) % 10 !== 0) {
                let bombsNumberDiv = document.getElementById(bombsNumber)
        let newbombcount = 0;
                for (let newbomb in bombArrDATA) {
                    console.log("bombsNumber", bombsNumber);
                    let newBombnumbers = eval(bombsNumber + String(bombArrDATA[newbomb]))
                    console.log("newBombnumbersDiv>>>>", newBombnumbers);
                    let divOfnewNumber = document.getElementById(newBombnumbers);
                    console.log(divOfnewNumber);
                    console.log("newbombcount-before if>>>>", newbombcount);
                    if (divOfnewNumber.classList.contains('bomb')) {
                        newbombcount++;
                        console.log("newbombcount-inside if>>>>", newbombcount);
                    }
                    console.log("newbombcount-after if>>>>", newbombcount);

                }
                bombsNumberDiv.setAttribute('data',newbombcount)
                console.log(bombsNumberDiv);
            } else if (bombsNumber % 10 === 0) {
                let bombsNumberDiv = document.getElementById(bombsNumber)
                let newbombcount = 0;
                for (let newbomb in bombArrDATALEFT) {
                    console.log("bombsNumber", bombsNumber);
                    let newBombnumbers = eval(bombsNumber + String(bombArrDATALEFT[newbomb]))
                    console.log("newBombnumbersDiv>>>>", newBombnumbers);
                    let divOfnewNumber = document.getElementById(newBombnumbers);
                    console.log(divOfnewNumber);
                    console.log("newbombcount-before if>>>>", newbombcount);
                    if (divOfnewNumber.classList.contains('bomb')) {
                        newbombcount++;
                        console.log("newbombcount-inside if>>>>", newbombcount);
                    }
                    console.log("newbombcount-after if>>>>", newbombcount);

                }
                bombsNumberDiv.setAttribute('data',newbombcount)
                console.log(bombsNumberDiv);
            } else if ((bombsNumber - 9) % 10 === 0) {
                let bombsNumberDiv = document.getElementById(bombsNumber)
                let newbombcount = 0;
                for (let newbomb in bombArrDATARIGHT) {
                    console.log("bombsNumber", bombsNumber);
                    let newBombnumbers = eval(bombsNumber + String(bombArrDATARIGHT[newbomb]))
                    console.log("newBombnumbersDiv>>>>", newBombnumbers);
                    let divOfnewNumber = document.getElementById(newBombnumbers);
                    console.log(divOfnewNumber);
                    console.log("newbombcount-before if>>>>", newbombcount);
                    if (divOfnewNumber.classList.contains('bomb')) {
                        newbombcount++;
                        console.log("newbombcount-inside if>>>>", newbombcount);
                    }
                    console.log("newbombcount-after if>>>>", newbombcount);

                }
                bombsNumberDiv.setAttribute('data',newbombcount)
                console.log(bombsNumberDiv);
            }

        }
    }
}


let boardDivs = document.querySelectorAll('.grid-item')
boardDivs.forEach(boardCell => {
    boardCell.addEventListener("click", revealingDivs)
})
boardDivs.forEach(boardCell => {
    boardCell.addEventListener("contextmenu", addingFlag)
})

function revealingDivs(e) {
    let id = e.target.id
    let clickedCell = document.getElementById(id)

    if (clickedCell.classList.contains('bomb')) {
        gameOver()
    } else {
        clickedCell.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'
        clickedCell.style.opacity = '0.6'
        clickedCell.classList.add('checked')

        if (!clickedCell.classList.contains('bomb')) {
            let bombCount = 0;
            console.log("first after declaration", bombCount);
            let bombArr = {
                left: -1,
                right: "+" + 1,
                up: -10,
                down: "+" + 10,
                upLeft: -11,
                upRight: -9,
                downLeft: "+" + 9,
                downRight: "+" + 11
            };
            let bombArrUP = {
                left: -1,
                right: "+" + 1,
                down: "+" + 10,
                downLeft: "+" + 9,
                downRight: "+" + 11
            };
            let bombArrRIGHT = {
                left: -1,
                up: -10,
                down: "+" + 10,
                upLeft: -11,
                downLeft: "+" + 9,
            };
            let bombArrDOWN = {
                left: -1,
                right: "+" + 1,
                up: -10,
                upLeft: -11,
                upRight: -9,
            };
            let bombArrLEFT = {
                right: "+" + 1,
                up: -10,
                down: "+" + 10,
                upRight: -9,
                downRight: "+" + 11
            };

            let corner1 = {
                up: -10,
                upRight: -9,
                right: "+" + 1,
            }
            let corner2 = {
                up: -10,
                upLeft: -11,
                left: -1,
            }
            let corner3 = {
                down: "+" + 10,
                downRight: "+" + 11,
                right: "+" + 1,
            }
            let corner4 = {
                down: "+" + 10,
                downLeft: "+" + 9,
                left: -1,
            }
            console.log(id, typeof id);

            if (id == 0) {
                for (let bomb in corner3) {
                    let bombsNumber = eval(id + String(corner3[bomb]))
                    let bombsNumberDiv = document.getElementById(bombsNumber)
                    if (bombsNumberDiv.classList.contains('bomb')) {
                        bombCount++;
                        console.log("inside for loop>>>", bombCount);
                    }
                }
                clickedCell.innerText = bombCount
            } else if (id == 9) {
                for (let bomb in corner4) {
                    let bombsNumber = eval(id + String(corner4[bomb]))
                    let bombsNumberDiv = document.getElementById(bombsNumber)
                    if (bombsNumberDiv.classList.contains('bomb')) {
                        bombCount++;
                        console.log("inside for loop>>>", bombCount);
                    }
                }
                clickedCell.innerText = bombCount
            } else if (id == 90) {
                console.log("id is", id);
                for (let bomb in corner1) {
                    let bombsNumber = eval(id + String(corner1[bomb]))
                    let bombsNumberDiv = document.getElementById(bombsNumber)
                    if (bombsNumberDiv.classList.contains('bomb')) {
                        bombCount++;
                        console.log("inside for loop>>>", bombCount);
                    }
                }
                clickedCell.innerText = bombCount
            } else if (id == 99) {
                console.log("id is", id);

                for (let bomb in corner2) {
                    let bombsNumber = eval(id + String(corner2[bomb]))
                    console.log("sdgsdfg", bombsNumber);
                    let bombsNumberDiv = document.getElementById(bombsNumber)
                    if (bombsNumberDiv.classList.contains('bomb')) {
                        bombCount++;
                        console.log("inside for loop>>>", bombCount);
                    }
                }
                clickedCell.innerText = bombCount
            } else if (id >= 10 && (id % 10) !== 0 && id < 89 && ((id - 9) % 10) !== 0) {
                for (let bomb in bombArr) {
                    let bombsNumber = eval(id + String(bombArr[bomb]))
                    let bombsNumberDiv = document.getElementById(bombsNumber)
                    if (bombsNumberDiv.classList.contains('bomb')) {
                        bombCount++;
                        console.log("inside for loop>>>", bombCount);
                    }
                }
                clickedCell.innerText = bombCount
                console.log("outsude for loop>>>", bombCount);
            } else if (id < 10) {
                for (let bomb in bombArrUP) {
                    let bombsNumber = eval(id + String(bombArrUP[bomb]))
                    let bombsNumberDiv = document.getElementById(bombsNumber)
                    if (bombsNumberDiv.classList.contains('bomb')) {
                        bombCount++;
                        console.log("inside for loop>>>", bombCount);
                    }
                }
                clickedCell.innerText = bombCount
            } else if (id % 10 === 0) {
                for (let bomb in bombArrLEFT) {
                    let bombsNumber = eval(id + String(bombArrLEFT[bomb]))
                    let bombsNumberDiv = document.getElementById(bombsNumber)
                    if (bombsNumberDiv.classList.contains('bomb')) {
                        bombCount++;
                        console.log("inside for loop>>>", bombCount);
                    }
                }
                clickedCell.innerText = bombCount
            } else if ((id - 9) % 10 === 0) {
                for (let bomb in bombArrRIGHT) {
                    let bombsNumber = eval(id + String(bombArrRIGHT[bomb]))
                    let bombsNumberDiv = document.getElementById(bombsNumber)
                    if (bombsNumberDiv.classList.contains('bomb')) {
                        bombCount++;
                        console.log("inside for loop>>>", bombCount);
                    }
                }
                clickedCell.innerText = bombCount
            } else if (id > 90 && id < 99 && id !== 90 && id !== 99) {
                for (let bomb in bombArrDOWN) {
                    let bombsNumber = eval(id + String(bombArrDOWN[bomb]))
                    let bombsNumberDiv = document.getElementById(bombsNumber)
                    if (bombsNumberDiv.classList.contains('bomb')) {
                        bombCount++;
                        console.log("inside for loop>>>", bombCount);
                    }
                }
                clickedCell.innerText = bombCount
            }

            clickedCell.setAttribute('data', bombCount)

            let allClicked = document.querySelectorAll('.checked')
            let count = 0
            if (allClicked.length === 90) {
                allClicked.forEach(div => {
                    if (!div.classList.contains('bomb')) {
                        count++;
                    }
                })
                if (count === 90) {
                    won()
                }
            }
        }
    }
}

let clickedBomb = document.querySelectorAll(".bomb")
let shouldTriggerClick = true;
let countdgdfg = 0
clickedBomb.forEach(bomb => {
    bomb.addEventListener("click", () => {
        bomb.classList.add('checked')
        if (shouldTriggerClick) {
            clickedBomb.forEach(bomb => {
                bomb.innerText = "💣"
                bomb.classList.add('checked')
                console.log(countdgdfg++);
                bomb.click()
            })
        }
        shouldTriggerClick = false;
        gameOver()

    })

})

let flagCount = 10;
let result = document.getElementById('result')

function addingFlag(e) {
    e.preventDefault()
    let flagsLeft = document.getElementById('flagsLeft')

    let id = e.target.id
    let clickedCell = document.getElementById(id)
    if (!clickedCell.classList.contains('flag')) {
        if (flagCount > 0) {
            flagCount--;
            clickedCell.innerText = '🚩'
            clickedCell.classList.add('flag')
            flagsLeft.innerText = flagCount
        }
    } else {
        flagCount++;
        clickedCell.innerText = ''
        clickedCell.classList.remove('flag')
        flagsLeft.innerText = flagCount

    }

    let flagged = 0
    if (flagCount === 0) {
        let allFlags = document.querySelectorAll('.flag')
        console.log(allFlags);
        for (let index = 0; index < allFlags.length; index++) {
            if (!allFlags[index].classList.contains('bomb')) {
                console.log(1);
                flagged = 1;
            }
        }
        if (flagged === 0) {
            won()
        }

    }
}




function gameOver() {
    result.innerHTML = "YOU LOSE!"
    boardDivs.forEach(boardCell => {
        boardCell.removeEventListener("click", revealingDivs)
    })
    boardDivs.forEach(boardCell => {
        boardCell.removeEventListener("contextmenu", addingFlag)
    })
}
function won() {
    result.innerText = "YOU WIN!"

    boardDivs.forEach(boardCell => {
        boardCell.removeEventListener("click", revealingDivs)
    })
    boardDivs.forEach(boardCell => {
        boardCell.removeEventListener("contextmenu", addingFlag)
    })
}
