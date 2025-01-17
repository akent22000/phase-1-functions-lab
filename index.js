// Code your solution in this file!
const office = 42;

function distanceFromHqInBlocks(pickUp) {
    if (pickUp > office) {
        return pickUp - office;
    } else {
        return office - pickUp;
    }
}


function distanceFromHqInFeet(pickUp) {
    return distanceFromHqInBlocks(pickUp) * 264;
}
  

function distanceTravelledInFeet(start, end) {
    if (start > end) {
        return (start - end) * 264;
    } else {
        return (end - start) * 264;
    }
} 

function calculatesFarePrice (start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
        return 0;

    } else if (distance <= 2000) {
        return .02 * (distance - 400);

    } else if (distance <= 2500) {
        return 25;

    } else {
        return 'cannot travel that far'
        
    }
  }

