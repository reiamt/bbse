import * as crypto from "crypto";

const puzzleID = 'BBSE_E01';
const d =  '0000';
var x = 0;
var result;

while (true) {
    result = puzzleID + String(x);
    result = crypto.createHash('sha256').update(result).digest('hex');
    
    if (result.substr(0,4) == d) {
        break
    }

    x += 1
}

console.log('Found x' + String(x) + ' returns hash value ' + String(result));