const {odd, even} = require('./var');

function checkOddOrEven(num) {
    if(num % 2) {
        return odd;
    }else {
        return even;
    }
}

module.exports = checkOddOrEven;