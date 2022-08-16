// // Code your solution in this file!
// first try 
// function returnFirstTwoDrivers(driver) {
//     return 
// }



// Where is the anonymous function?

function returnFirstTwoDrivers(driverSelect) {
    const firstDrivers = driverSelect
    return firstDrivers.slice(0,2)
 }

 function returnLastTwoDrivers(pickLast) {
    const lastDrivers = pickLast
    return lastDrivers.slice(2)
 }


    
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]






function createFareMultiplier (multiplier) {
    return function (number) {
       return  multiplier  * number 
        
    }
}

function fareDoubler(sum) {
    return sum * 2
}
function fareTripler(sum1) {
    return sum1 * 3
}

function selectDifferentDrivers(arrayOfDrivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(arrayOfDrivers)
}