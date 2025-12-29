import Ship from './ship';

class Gameboard {
    constructor() {
        this.ships = [];
        this.missedAttacks = [];
    }

    placeShip(length, coordinates) {
        const ship = Ship(length);
        this.ships.push({ship, coordinates});
    }

    receiveAttack([x, y]) {
        for (const obj of this.ships) {
            for (const coord of obj.coordinates) {
                if (coord[0] === x && coord[1] === y) {
                    obj.ship.hit();
                    return 'hit';
                }
            }
        }

        this.missedAttacks.push([x, y]);
        return 'miss';
    }

    allShipsSunk() {
        return this.ships.every(obj => obj.ship.isSunk());
    }
}

export default Gameboard;