// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

let createFareMultiplier = (int) => {
    return function(val) {
       return int * val;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (drivers, randomDriver) =>{
    return randomDriver(drivers);
}