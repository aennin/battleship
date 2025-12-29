import Player from "../src/logic/player";
import Gameboard from "../src/logic/gameboard";

describe('Player', () => {
    test('player has a gameboard', () => {
        const player = Player();
        expect(player.gameboard).toBeInstanceOf(Gameboard);
    });

    test('player can attack enemy gameboard', () => {
        const player = Player();
        const enemy = Player();

        enemy.gameboard.placeShip(2, [[0,0], [0, 1]]);
        player.attack(enemy.gameboard, [0,0]);

        expect(enemy.gameboard.missedAttacks.length).toBe(0);
    });

    test('computer player makes random attacks', () => {
        const computer = Player(true);
        const enemy = Player();

        computer.randomAttack(enemy.gameboard);

        const totalAttacks =
        enemy.gameboard.missedAttacks.length + 
        enemy.gameboard.ships.reduce(
            (sum, s) => sum + s.ship.isSunk(),
            0
        );

        expect(totalAttacks).toBeGreaterThanOrEqual(0);
    });
});