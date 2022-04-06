const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
const totalBatteries = batteryBatches.reduce(function(added, toBeAdded) {
    return added + toBeAdded
}, 0);

//  function reducer() {
//     const totalBatteries = batteryBatches.reduce(function(added, toBeAdded) {
//         return added + toBeAdded
//     }, 0);
//     return totalBatteries;
//  }

