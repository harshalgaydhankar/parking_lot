const Car = require('../../src/model/Car');

describe('Car', function () {
    it("gets initialized with a registration number and color", function () {
        const car = new Car("KA-09-HH-0987", "RED");
        expect(car.registrationNumber).toBe("KA-09-HH-0987");
        expect(car.color).toBe("RED");
    });

    it("gets initialized with a registration number and default color as white", function () {
        const car = new Car("KA-09-HH-0987");
        expect(car.registrationNumber).toBe("KA-09-HH-0987");
        expect(car.color).toBe("WHITE");
    });

});
