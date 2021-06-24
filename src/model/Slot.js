const Status = require('../constants/Status');

class Slot {
    constructor(slotNumber, car, status) {
        this.slotNumber = slotNumber;
        this.status = Status.VACANT;
        this.car = undefined
    }

    allocate(car){
        this.car = car;
        this.status = Status.OCCUPIED;
    }

    deallocate(){
        this.car = undefined;
        this.status = Status.VACANT;
    }
}

module.exports = Slot;