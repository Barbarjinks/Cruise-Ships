/* globals describe it expect */
const Ship = require('../src/Ship.js');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itinerary');

describe('ship', () => {
  it('can be instantiated', () => {
    const port = new Port('Hull');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship).toBeInstanceOf(Object);
  });
  it('Has a starting point', () => {
    const port = new Port('Hull');
    const itinerary = new Itinerary([port]);
    const ship = new Ship(itinerary);

    expect(ship.currentPort).toBe(port);
  });
  it('can set sail', () => {
    const hull = new Port('Hull');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([hull, calais]);
    const ship = new Ship(itinerary);
    ship.setSail();

    expect(ship.currentPort).toBeFalsy();

    expect(hull.ships).not.toContain(ship);
  });
  it('can dock at a different port', () => {
    const hull = new Port('Hull');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([hull, calais]);
    const ship = new Ship(itinerary);
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
    expect(calais.ships).toContain(ship);
  });
  it('gets added to port on instantiation', () => {
    const hull = new Port('Hull');
    const itinerary = new Itinerary([hull]);
    const ship = new Ship(itinerary);

    expect(hull.ships).toContain(ship);
  });
  it('can\'t sail further than its itinerary', ()=> {
    const hull = new Port('Hull');
    const calais = new Port('Calais');
    const itinerary = new Itinerary([hull, calais]);
    const ship = new Ship(itinerary);

    ship.setSail();
    ship.dock();

    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
  });
});
