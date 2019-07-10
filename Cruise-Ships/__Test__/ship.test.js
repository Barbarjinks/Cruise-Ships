/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');

describe('ship', () => {
  it('can be instantiated', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
  it('Has a starting point', () => {
    const port = new Port('Hull');
    const ship = new Ship(port);

    expect(ship.startingPort).toBe(port);
  });
  it('can set sail', () => {
    const ship = new Ship(Port);

    ship.setSail();

    expect(ship.startingPort).toBeFalsy();
  });
  it('can dock at a different port', () => {
    const hull = new Port('Hull');
    const ship = new Ship(hull);

    const calais = new Port('Calais');
    ship.dock(calais);

    expect(ship.currentPort).toBe(calais);
  });
});
