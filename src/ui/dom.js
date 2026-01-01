const renderBoard = (board, container, isEnemy = false) => {
    container.innerHTML = '';

    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.x = x;
            cell.dataset.y = y;

            const coord = [x, y];

            // misses
            board.missedAttacks.forEach(([mx, my]) => {
                if (mx === x && my === y) {cell.classList.add('miss');
                }
            });

            // ships (player only)
            if (!isEnemy && board.hasShipAt(x, y)) {
                cell.classList.add('ship');
            }

            // Hits (both boards)
            if (board.wasHitAt(x, y)) {
                cell.classList.add(board.hasShipAt(x, y) ? 'hit' : 'miss');
            }

            container.appendChild(cell)
        }
    }
};

const renderBoards = (playerBoard, computerBoard) => {
    renderBoard(playerBoard, document.querySelector('#player-board'));
    renderBoard(computerBoard, document.querySelector('#computer-board'), true);
};

export {renderBoards}