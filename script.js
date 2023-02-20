
const boardElement = document.querySelector('#gameBoard');


const TILE_STATUSES = {
    HIDDEN: 'hidden',
    MINE: 'mine',
    NUMBER: 'number',
    MARKED: 'marked',
}
const BOARD_SIZE = 9;
const NUMBER_OF_MINES = 10;
let counter = 0;
const board = createBoard(BOARD_SIZE, NUMBER_OF_MINES);
const minesLeftText = document.querySelector('#flagsLeft')
const messageText = document.querySelector('#result');
const bombs = document.querySelector('#bomb');
bombs.textContent = NUMBER_OF_MINES;
board.forEach(row => {
    row.forEach(tile => {
        boardElement.append(tile.element);
        tile.element.classList.add('valid');
        tile.element.id = `${counter++}`;
        tile.element.addEventListener('click', () => {
            revealTile(board, tile);
            checkGameEnd();
        });
        tile.element.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            markTile(tile);
            listMineLeft();
        });

    })
});
boardElement.style.setProperty('--size', BOARD_SIZE);
let count = 1;
let flagList = 0;
minesLeftText.textContent = flagList

function listMineLeft() {
        const markedTilesCount = board.reduce((count, row) => {
            return (count + row.filter(tile => tile.status === TILE_STATUSES.MARKED).length)
        }, 0);
        minesLeftText.textContent = flagList + markedTilesCount;
        count = markedTilesCount;
}

function markTile(tile) {
    if (tile.status !== TILE_STATUSES.HIDDEN && tile.status !== TILE_STATUSES.MARKED) {
        return;
    }
    if (tile.status === TILE_STATUSES.MARKED) {
        tile.status = TILE_STATUSES.HIDDEN;
        tile.element.textContent = '';
        if(tile.element.classList.contains('flag')){
            tile.element.classList.remove('flag');
        }
    }
    else {
        if(count<10){
            console.log(count)
            tile.status = TILE_STATUSES.MARKED;
            tile.element.classList.add('flag');
            tile.element.textContent = '🚩';
            tile.element.style.fontSize = '50%';
        }
    }
}

function revealTile(board, tile) {
    if (tile.status !== TILE_STATUSES.HIDDEN) {
        return;
    }
    if (tile.mine) {
        tile.status = TILE_STATUSES.MINE;
        tile.element.classList.add('bomb')
        tile.element.classList.remove('valid')
        tile.element.textContent = '💣';
        tile.element.style.fontSize = '50%';
        return;
    }
    tile.status = TILE_STATUSES.NUMBER;
    const adjacentTiles = nearbyTiles(board, tile);
    const mines = adjacentTiles.filter(t => t.mine);
    if (mines.length === 0) {
        adjacentTiles.forEach(revealTile.bind(null, board));
        tile.element.setAttribute('data', `${mines.length}`);
        tile.element.classList.add('checked');
    }
    else {
        tile.element.textContent = mines.length;
        tile.element.removeAttribute('data');
        tile.element.setAttribute('data', `${mines.length}`);
        tile.element.classList.add('checked');
    }
}

function createBoard(boardSize, numberOfMines) {
    const board = [];
    const minePositions = getMinePositions(boardSize, numberOfMines);
    for (let x = 0; x < 10; x++) {
        const row = [];
        for (let y = 0; y < boardSize; y++) {
            const element = document.createElement('div');
            element.dataset.status = TILE_STATUSES.HIDDEN;
            const tile = {
                element,
                x,
                y,
                mine: minePositions.some(positionMatch.bind(null, { x, y })),
                get status() {
                    return this.element.dataset.status;
                },
                set status(value) {
                    this.element.dataset.status = value;
                }
            }
            row.push(tile);
        }
        board.push(row);
    }
    return board;
}

function getMinePositions(boardSize, numberOfMines) {
    const positions = [];
    while (positions.length < numberOfMines) {
        const position = {
            x: randomNumber(boardSize),
            y: randomNumber(boardSize)
        }
        if (!positions.some(positionMatch.bind(null, position))) {
            positions.push(position);
        }
    }
    return positions;
}

function positionMatch(a, b) {
    return a.x === b.x && a.y === b.y;
}

function randomNumber(size) {
    return Math.floor(Math.random() * size);
}

function nearbyTiles(board, { x, y }) {
    const tiles = [];

    for (let xOffset = -1; xOffset < 1; xOffset++) {
        for (let yOffset = -1; yOffset < 1; yOffset++) {
            const tile = board[x + xOffset]?.[y + yOffset];
            if (tile) {
                tiles.push(tile);
            }
        }
    }
    return tiles;
}

function checkGameEnd() {
    const win = checkWin(board);
    const lose = checkLose(board);
    if (win || lose) {
        boardElement.addEventListener('click', stopProp, { capture: true })
        boardElement.addEventListener('contextmenu', stopProp, { capture: true })
    }
    if (win) {
        messageText.style.display = 'block';
        messageText.style.color = "green";
        board.forEach(row => {
            row.filter(tile => {
                if (tile.mine) {
                    tile.element.textContent = '🚩';
                }
            })
        })
    }
    if (lose) {
        messageText.innerHTML = "YOU LOSE!"
        messageText.style.color = "red";

        board.forEach(row => {
            row.filter(tile => {
                if (tile.status === TILE_STATUSES.MARKED) {
                    markTile(tile);
                }
                if (tile.mine) {
                    revealTile(board, tile)
                }
            })
        })
    }
}

function stopProp(e) {
    e.stopImmediatePropagation();

}

function checkWin() {
    return board.every(row => {
        return row.every(tile => {
            return tile.status === TILE_STATUSES.NUMBER || (tile.mine && (tile.status === TILE_STATUSES.HIDDEN || tile.status === TILE_STATUSES.MARKED));
        })
    })
}

function checkLose() {
    return board.some(row => {
        return row.some(tile => {
            return tile.status === TILE_STATUSES.MINE;
        })
    })
}