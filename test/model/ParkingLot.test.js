const Status = require("../../src/constants/Status");
const {ParkingLot} = require('../../src/model');

describe('ParkingLot', function () {
    it("gets initialized with given number of slots", function () {
        console.log = jest.fn();
        const parkingLot = new ParkingLot(3);
        expect(parkingLot.slots.length).toBe(3);
        expect(console.log).toBeCalledTimes(1);
        expect(console.log).toHaveBeenCalledWith('Created parking lot with 3 slots');
    });

    it("parks car on next available subsequent slot", function () {
        console.log = jest.fn();
        const parkingLot = new ParkingLot(3);
        let nextSubsequentSlotNumber = parkingLot.availableSubsequentSlot();
        parkingLot.park("KA-09-HH-0987");
        expect(
            parkingLot.slots.find(
                (slot) => slot.car.registrationNumber === "KA-09-HH-0987").slotNumber
        ).toBe(nextSubsequentSlotNumber);
        expect(parkingLot.slots[nextSubsequentSlotNumber - 1].status).toBe(Status.OCCUPIED);
        expect(console.log).toBeCalledTimes(2);
        expect(console.log).toHaveBeenCalledWith("Allocated slot number: 1");
    });

    it("leaves car from parking lot and makes the slot available", function () {
        console.log = jest.fn();
        const parkingLot = new ParkingLot(3);
        let slotNumberOfKA09HH0987 = parkingLot.availableSubsequentSlot();
        parkingLot.park("KA-09-HH-0987");
        expect(parkingLot.slots[slotNumberOfKA09HH0987 - 1].status).toBe(Status.OCCUPIED);
        parkingLot.leave(slotNumberOfKA09HH0987);
        expect(parkingLot.slots[slotNumberOfKA09HH0987 - 1].status).toBe(Status.VACANT);
        expect(console.log).toBeCalledTimes(3);
        expect(console.log).toHaveBeenCalledWith('Registration number KA-09-HH-0987 with Slot Number 1 is free with Charge 30');
    });

    it("display message when parking lot is fully occupied", function () {
        console.log = jest.fn();
        const parkingLot = new ParkingLot(2);
        parkingLot.park("KA-09-HH-0987");
        parkingLot.park("KA-09-HH-0999");
        parkingLot.park("KA-09-HH-1000");
        expect(console.log).toBeCalledTimes(4);
        expect(console.log).toHaveBeenCalledWith("Sorry, parking lot is full");
    });

});
