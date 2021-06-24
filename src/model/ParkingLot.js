const Slot = require('./Slot');
const Status = require("../constants/Status");
const Car = require("./Car");
const printMessage = require('../utils/printer');
const generateBill = require('../utils/billing');

class ParkingLot {
    constructor(numberOfSlots) {
        this.slots = [...new Array(numberOfSlots)].map((item, index)=> new Slot(index+1));
        printMessage(`Created parking lot with ${numberOfSlots} slots`)
    }

    park(carRegistrationNumber){
        const availableSlotNumber = this.availableSubsequentSlot();
        if(availableSlotNumber === -1){
            printMessage("Sorry, parking lot is full");
        }
        else{
            this.slots[availableSlotNumber - 1].allocate(new Car(carRegistrationNumber));
            printMessage(`Allocated slot number: ${availableSlotNumber}`);
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

    leave(slotNumber, noOfHours) {
        const slotToVacant = this.slots[slotNumber -1];
        printMessage(`Registration number ${slotToVacant.car.registrationNumber} with Slot Number ${slotToVacant.slotNumber} is free with Charge ${generateBill(noOfHours)}`);
        this.slots[slotNumber -1].deallocate();
    }

    status() {
        printMessage("Slot No.  Registration No.");
        this.slots.forEach((slot) =>{
            printMessage(`${slot.slotNumber}   ${slot.car.registrationNumber}`);
        });
    }
}

module.exports = ParkingLot;