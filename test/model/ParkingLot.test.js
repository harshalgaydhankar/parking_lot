const {ParkingLot} = require('../../src/model');

describe('ParkingLot', function () {
    it("gets initialized with given number of slots", function () {
        console.log = jest.fn();
        const parkingLot = new ParkingLot(3);
        expect(parkingLot.slots.length).toBe(3);
        expect(console.log).toBeCalledTimes(1)
        expect(console.log).toHaveBeenCalledWith('Created parking lot with 3 slots');
    });

    it("parks car on next available subsequent slot", function () {
        const parkingLot = new ParkingLot(3);
        let nextSubsequentSlotNumber = parkingLot.availableSubsequentSlot();
        parkingLot.park("KA-09-HH-0987");
        expect(
            parkingLot.slots.find(
                (slot) => slot.car.registrationNumber === "KA-09-HH-0987").slotNumber
        ).toBe(nextSubsequentSlotNumber);

    });

});
