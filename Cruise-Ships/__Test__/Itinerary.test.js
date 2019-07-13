const Itinerary = require('../src/Itinerary');
const Port = require('../src/Port');

describe('Itinerary', () => {
  it('can be instantiated', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
  it('can have ports', () => {
    const hull = new Port('Hull');
    const calais = new Port('Calais');

    const itinerary = new Itinerary([hull, calais]);

    expect(itinerary.ports).toEqual([hull, calais]);
  });
});
