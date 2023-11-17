const sumLessThirdsFifths = (n) => {
    if (n < 3) return 0;

    sum = 0;

    for (i = 3; i < n; i++) {
        if (isDivisible(i, 3) || isDivisible(i, 5)) sum += i;
    }

    return sum;
};

const isDivisible = (n, divisibility) => {
    return n % divisibility == 0;
}

console.log(sumLessThirdsFifths(13));