const generateBill = require('../../src/utils/billing');

describe('Billing', function () {

    it("generates parking bill for less than 2hrs", function () {
        const bill = generateBill(1);
        expect(bill).toBe(10);
    });

    it("generates parking bill for  2hrs", function () {
        const bill = generateBill(2);
        expect(bill).toBe(10);
    });

    it("generates parking bill for greater than 2hrs", function () {
        const bill = generateBill(5);
        expect(bill).toBe(40);
    });

});
