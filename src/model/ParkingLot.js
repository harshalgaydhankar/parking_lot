const Slot = require('./Slot');

class ParkingLot {
    constructor(numberOfSlots) {
        this.slots = [...new Array(numberOfSlots)].map((item, index)=> new Slot(index+1));
    }
}

module.exports = ParkingLot;