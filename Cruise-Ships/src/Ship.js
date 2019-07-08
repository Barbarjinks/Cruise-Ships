function Ship(port) {
  this.startingPort = port;
  this.currentPort = port;
};

Ship.prototype = {
  setSail: function () {
    this.startingPort = null;
    this.currentPort = null;
  },
  dock(port) {
    this.currentPort = port;
  },
};

module.exports = Ship;
