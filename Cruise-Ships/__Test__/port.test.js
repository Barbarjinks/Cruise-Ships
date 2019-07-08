const Port = require('../src/Port.js');

describe('port', () => {
  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
  it('Gives it a name', () => {
    const port = new Port('Hull');
    expect(port.name).toEqual('Hull');
  });
});
