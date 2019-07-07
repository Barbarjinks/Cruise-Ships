/* globals describe it expect */
const Ship = require('../src/Ship.js');

describe('ship', () => {
    it('can be instantiated', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });
    it('Has a starting point', () => {
        const ship = new Ship('Titanic');

        expect(ship.startingPort).toBe('Hull')
    });
    it('can set sail', () => {
        const ship = new Ship('Titanic');

        ship.setSail();

        expect(ship.startingPort).toBeFalsy();
    });
});