const fs = require('fs');
const jsc = require('jsverify');
const assert = require('assert')

eval(fs.readFileSync('code.js')+'');

function factorialTest(n) {
    if(n === 0) return 1;
    else return n * factorialTest(n - 1);
}
function eTest(n) {
    if(n === 0) return 1;
    else return 1.0 / factorialTest(n) + eTest(n - 1);
}

const test =
    jsc.forall("nat", function(n) {
        return JSON.stringify(eTest(n)) ==
            JSON.stringify(e(n));
    });
const test2 =  
    jsc.forall("nat", function(n) {
        return JSON.stringify(factorialTest(n)) ==
            JSON.stringify(factorial(n))
    })

assert(factorial(10) === 3628800);
assert(e(10) === 2.7182818011463845);
jsc.assert(test);
jsc.assert(test2)
    
