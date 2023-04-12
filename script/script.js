// 1
function sqear(a, n) {
    if (n != 1) {
        return a * sqear(a, n - 1)
    }
    else {
        return a;
    }
}
alert(sqear(+prompt("введите число"), +prompt("введите степень")));
// без рекурсий
// function sqear(a, n) {
//     let num = 1;
//     for (let i = 1; i <= n; i++) {
//         num = num * a;

//     }
//     return num;
// }


// alert(sqear(+prompt("введите число"), +prompt("введите степень")));
// не изобритая велосипед 
/*
function sqearPow(a, n) {
    return Math.pow(a, n);
}
alert(sqearPow(+prompt("введите число"), +prompt("введите степень")));*/