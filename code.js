// tail-recursive factorial function is never used but still tested
function factorial(n, iters = 0, accum = 1) {
    return (n === iters) ? accum : factorial(n, iters+=1, accum *= iters)
}

function e(n, sum = 1, iters = 1, fact = 1) {
    return (n === 0) ? sum : e(n-1, sum += (1.0 / fact), iters+=1, fact*=iters)
}
