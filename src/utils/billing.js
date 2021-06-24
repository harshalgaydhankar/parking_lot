const Charges = require("../constants/Charges");

const generateBill = (noOfHours) => {
    return noOfHours<=2 ?
        Charges.FIRST_TWO_HRS
        : (Charges.FIRST_TWO_HRS + ((noOfHours -2 )*Charges.REMAINING_HRS))
}
module.exports = generateBill;