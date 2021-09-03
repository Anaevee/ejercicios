function parseBinaryToDecimal(binary) {

    const length = binary.length;

    const string = binary.split("");

    let decimal = null;
    const counter = getCounter(string);
    const storeBin = getStoreBin(string, counter);

    for (let i = 0; i < length; i++) {
        decimal += storeBin[i];
    }

    console.log(decimal);
}

function getCounter(string) {
    return string.map(function (val, i) {
        return i;
    }).reverse();
}

function getStoreBin(string ,counter) {
    return string.map(function (val, i) {
        return val * Math.pow(2, counter[i]);
    });
}