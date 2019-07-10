const Port = require('../src/Port.js');

describe('port', () => {
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('Gives it a name', () => {
    const port = new Port('Hull');
    expect(port.name).toEqual('Hull');
  });
  it('can add a ship', () => {
    const port = new Port('Hull');
    const ship = {};

    port.addShip(ship);

    expect(port.ships).toContain(ship);
  });
  it('can remove a ship', () => {
    const port = new Port('Hull');
    const titanic = {};
    const britanic = {};

    port.addShip(titanic);
    port.addShip(britanic);
    port.removeShip(britanic);

    expect(port.ships).toEqual([titanic]);
  });
});
