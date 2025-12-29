import { playerTurn } from "../gameController";

const bindBoardEvents = () => {
    document
        .querySelector('#computer-board')
        .addEventListener('click', (e) => {
            const cell = e.target;
            if (!cell.dataset.x) return;

            const coord = [
                Number(cell.dataset.x),
                Number(cell.dataset.y),
            ];

            playerTurn(coord);
        });
};

export {bindBoardEvents};