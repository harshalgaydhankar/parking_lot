const fs = require('fs');
const readline = require('readline');
const ParkingLot = require("../model/ParkingLot");

class CommandParser {

    constructor(fileName) {
        this.fileName = fileName;
        this.parkingLot = undefined;
    }

    executeCommnadsOnParkingLot(){
        const lineReader = readline.createInterface({
            input: fs.createReadStream(this.fileName),
            output: process.stdout,
            terminal: false
        });

        lineReader.on('line', (line) => {
            console.log(line);
        });
    }
}

module.exports = CommandParser;