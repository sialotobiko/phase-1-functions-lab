// Code your solution in this file!
headquarters = 42;
function distanceFromHqInBlocks(blocks) {
    //returns the number of blocks given a value

    if (blocks > 42){
        return blocks - 42;
    }
    else if (blocks < 42){
        return 42 - blocks;
    }
}

  function distanceFromHqInFeet(blocks){
    let distanceInBlocks = distanceFromHqInBlocks(blocks);
    return distanceInBlocks * 264;
  }

  function distanceTravelledInFeet(start, destination){
    if (start > destination){
        return (start - destination) * 264;
    }
    else if (destination > start){
        return (destination - start) * 264;
    }
  }

  function calculatesFarePrice(start, destination){
    let distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400){
        return 0;
  }
else if (distanceInFeet > 400 && distanceInFeet <= 2000){
    return (distanceInFeet - 400) * 0.02;
}
else if (distanceInFeet > 2000 && distanceInFeet <= 2500){
    return 25;
}
else if (distanceInFeet > 2500){
    return 'cannot travel that far';
}
}
