// Code your solution in this file!


const returnFirstTwoDrivers = (driversArray) => {
    let newArray = [driversArray[0], driversArray[1]]
    return newArray
}

const returnLastTwoDrivers = (driversArray) => {
    let lastDriver = driversArray.length - 1
    let secondToLastDriver = driversArray.length - 2
    let newArray = [driversArray[secondToLastDriver], driversArray[lastDriver]]
    return newArray
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (integer) => {
    return (fare) => {
        return fare * integer
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (driversArray, selectDrivers) => {
    return selectDrivers(driversArray)
}