//1 

let funcWithMath = setMath('-');

function setMath(znak) {
    return function funcWithMath() {
        const num = Array.from(arguments);
        console.log(num);
        if('+' === znak) {
            function count() {
                let sum = 0;
                for (i = 0; i < num.length; i++) {
                    sum += num[i];
                    }
                    return sum;
            }
            return `${num.join(" + ")} = ${count()}`;
        }  else if('-' === znak) {
            function count() {
                let min = num[0] * 2;
                for (i = 0; i < num.length; i++) {
                    min -= num[i];
                    }
                    return min;
            }
            return `${num.join(" - ")} = ${count()}`;
        } else if('*' === znak) {
            function count() {
                let mn = 1;
                for (i = 0; i < num.length; i++) {
                    mn *= num[i];
                    }
                    return mn;
            }
            return `${num.join(" * ")} = ${count()}`;
        } else if('/' === znak) {
            function count() {
                let del = num[0] ** 2;
                for (i = 0; i < num.length; i++) {
                    del /= num[i];
                    }
                    return del;
            }
            return `${num.join(" / ")} = ${count()}`;
        }
    }
}

let res = funcWithMath(10,2,3);
console.log(res);

//2

let whatDo = setNumbers(10,2,3);

function setNumbers() {
    const num = Array.from(arguments);
    console.log(num);
    return function whatDo(znak) {
        if('+' === znak) {
            function count() {
                let sum = 0;
                for (i = 0; i < num.length; i++) {
                    sum += num[i];
                    }
                    return sum;
            }
            return `${num.join(" + ")} = ${count()}`;
        } else if('-' === znak) {
            function count() {
                let min = num[0] * 2;
                for (i = 0; i < num.length; i++) {
                    min -= num[i];
                    }
                    return min;
            }
            return `${num.join(" - ")} = ${count()}`;
        } else if('*' === znak) {
            function count() {
                let mn = 1;
                for (i = 0; i < num.length; i++) {
                    mn *= num[i];
                    }
                    return mn;
            }
            return `${num.join(" * ")} = ${count()}`;
        } else if('/' === znak) {
            function count() {
                let del = num[0] ** 2;
                for (i = 0; i < num.length; i++) {
                    del /= num[i];
                    }
                    return del;
            }
            return `${num.join(" / ")} = ${count()}`;
        }
    }
}

console.log(whatDo('/'));

