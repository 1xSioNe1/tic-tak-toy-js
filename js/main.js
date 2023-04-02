const doc = document;
const con = console.log;
const gameField = doc.querySelector('.game-field');

let turn = 1
let player;

rendorButtons()

let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


function rendorButtons() {
    for (let i = 0; i < 9; i++) {
        con(i+1)
        gButton = `<button class="game-button"></button>`
        gameField.innerHTML += gButton;
    }
}

function printField() {
    let gameButtons = doc.querySelectorAll('.game-button');
    win.forEach(function(row) {
        con(gameButtons[row[0]].innerHTML ===
            gameButtons[row[1]].innerHTML ===
            gameButtons[row[2]].innerHTML)
        if (gameButtons[row[0]].innerHTML) {
            con('awdasdadasdadfsdfs')
            if (
                gameButtons[row[0]].innerHTML ===
                gameButtons[row[1]].innerHTML ===
                gameButtons[row[2]].innerHTML
            ) {
                alert(`win ${gameButtons[row[0]].innerHTML}`)
            }
        }
    })
}

const gameButton = doc.querySelectorAll('.game-button');

gameButton.forEach(function(gameButtonF) {
    gameButtonF.onclick = function() {
        if (turn == 9) {
            alert('Your turns gone (^_^)')
        }
        if (this.innerHTML) {
            return;
        }
        player = 'X';
        if (turn % 2 == 0) {
            player = 'O';
        }
        this.innerHTML = player;
        turn++
        printField()
    }
})


