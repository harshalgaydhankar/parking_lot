const Status = require("../../src/constants/Status");
const {Car, Slot} = require("../../src/model");

describe('Slot', function () {
    it("gets initialized with a slot number and status vacant", function () {
        const slot = new Slot(3);
        expect(slot).toEqual({slotNumber: 3, status: Status.VACANT, car: undefined});
    });

    it("gets allocated with car assigned and update status occupied", function () {
        const slot = new Slot(3);
        const car = new Car("KA-09-HH-0987");
        slot.allocate(car);
        expect(slot).toEqual({
            slotNumber: 3,
            status: Status.OCCUPIED,
            car: {
                color: "WHITE",
                registrationNumber: "KA-09-HH-0987"
            }
        });
    });

    it("gets deallocated and set car as undefined and status as vacant", function () {
        const slot = new Slot(3);
        const car = new Car("KA-09-HH-0987");
        slot.allocate(car);
        expect(slot).toEqual({
            slotNumber: 3,
            status: Status.OCCUPIED,
            car: {
                color: "WHITE",
                registrationNumber: "KA-09-HH-0987"
            }
        });
        slot.deallocate();
        expect(slot).toEqual({
            slotNumber: 3,
            status: Status.VACANT,
            car: undefined
        });
        expect(slot).toEqual({slotNumber: 3, status: Status.VACANT, car: undefined});
    });

});
