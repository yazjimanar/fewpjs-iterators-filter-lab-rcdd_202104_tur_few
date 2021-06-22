// Code your solution here
function findMatching(list, name) {
    return list.filter(function (driverName) {
        return driverName.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(list, partialName) {
    let lengthOfName = partialName.length;
    return list.filter(function (driverName) {
        return driverName.slice(0, lengthOfName) === partialName;
    });
}

function matchName(list, name) {
    return list.filter(function (driver) {
        return driver.name.toLowerCase() === name.toLowerCase();
    });
}

console.log(matchName(drivers, "Test"))

console.log(findMatching(drivers, "TTeess"))
console.log(fuzzyMatch(drivers, "Z"))
