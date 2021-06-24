const {ParkingLot} = require('../../src/model');

describe('ParkingLot', function () {
    it("gets initialized with given number of slots", function () {
        const parkingLot = new ParkingLot(3);
        expect(parkingLot.slots.length).toBe(3);
    });
});
