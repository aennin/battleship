import Ship from "../src/logic/ship";

describe('Ship', () => {
    test('stores its length', () => {
        const ship = Ship(3);
        expect(ship.length).toBe(3);
    });

    test('hit() increases the number of hits', () => {
        const ship = Ship(3);
        ship.hit();
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });

    test('isSunk() returns false when hits are less than length', () => {
        const ship = Ship(4);
        ship.hit();
        ship.hit();
        expect(ship.isSunk()).toBe(false);
    });
});