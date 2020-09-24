const returnFirstTwoDrivers = (arrOfDrivers) => {
  return arrOfDrivers.slice(0,2);
}

const returnLastTwoDrivers = (arrOfDrivers) => {
  let arraySize = arrOfDrivers.length;
  
  return arrOfDrivers.slice(arraySize - 2);
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

const createFareMultiplier = (multiplyier) => {
  return (fare) => {
    return multiplyier * fare;
  };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrDrivers, funcToReturn) => {
  return funcToReturn(arrDrivers);
}