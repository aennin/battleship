const renderBoard = (board, container, isEnemy = false) => {
    container.innerHTML = '';

    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            const cell = document.createElement('div');
            cell.dataset.x = x;
            cell.dataset.y = y;

            // misses
            board.missedAttacks.forEach(([mx, my]) => {
                if (mx === x && my === y) cell.classList.add('miss');
            });

            container.appendChild(cell)
        }
    }
};

const renderBoards = (playerBoard, computerBoard) => {
    renderBoard(playerBoard, document.querySelector('#player-board'));
    renderBoard(computerBoard, document.querySelector('#computer-board'), true);
};

export {renderBoards}