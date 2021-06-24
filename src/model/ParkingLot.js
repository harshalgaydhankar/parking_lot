const Slot = require('./Slot');
const Status = require("../constants/Status");
const Car = require("./Car");

class ParkingLot {
    constructor(numberOfSlots) {
        this.slots = [...new Array(numberOfSlots)].map((item, index)=> new Slot(index+1));
        console.log(`Created parking lot with ${numberOfSlots} slots`)
    }

    park(carRegistrationNumber){
        const availableSlotNumber = this.availableSubsequentSlot();
        if(availableSlotNumber === -1){
            console.log("Sorry, parking lot is full");
        }
        else{
            this.slots[availableSlotNumber - 1].allocate(new Car(carRegistrationNumber));
        }
    }

    availableSubsequentSlot(){
        const availableSlots = this.slots.filter(slot => slot.status === Status.VACANT);
        if(availableSlots.length > 0){
            availableSlots.sort((a, b) => a.slotNumber - b.slotNumber);
            return availableSlots[0].slotNumber;
        }
        else {
            return -1;
        }
    }

    leave(slotNumber) {
        this.slots[slotNumber -1].deallocate();
    }
}

module.exports = ParkingLot;