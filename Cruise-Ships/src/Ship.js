const ship = new Ship('Titanic');


function Ship(name){
    this.startingPort = 'Hull';
};

Ship.prototype ={
    setSail: function() {
        this.startingPort = undefined;
    },

};

module.exports = Ship;