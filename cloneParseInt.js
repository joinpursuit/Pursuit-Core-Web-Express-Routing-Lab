const arr = ['100', '-12', '0', '0', '123412.2452', '-2534.2345'];

const ogParseInt = (arr, base) => {
    const og = arr.map(ele => parseInt(ele, base));
    const my = arr.map(ele => myParseInt(ele, base));
    return {
        og,
        my
    }
}

const myParseInt = (num, base = 10) => {
    let decimal = num.indexOf('.')
    // console.log(decimal)
    if (decimal > -1) {
        num = num.substring(0, decimal);
        // console.log('Decimal hit ->', num)
    }

    let parsedNum = 0;
    let digit = 1;

    if (base === 10) {
        for (let i = num.length - 1; i >= 0; i--) {
            // console.log(num[i])
            // console.log(digit)
            if (num[i] === '-') {
                parsedNum *= -1;
                continue;
            } else if (num[i] === '0') {
                digit *= 10;
                continue;
            }
            parsedNum += num[i] * digit;
            digit *= 10;
        }
    }
    return parsedNum;
}

let num = 5

console.log(ogParseInt(arr));

const arr2 = ['-2', '0', '1', '2', '5', '8', '16', '17'];

const ogToString = (arr, base = 2) => {
    const og = arr.map(ele => (+ele).toString(base));
    // const my = arr.map(ele => (+ele).myToString(base));
    return {
        og,
        // my
    }
}

const myToString = (arr, base = 2) => {
    
}

console.log(ogToString(arr2));