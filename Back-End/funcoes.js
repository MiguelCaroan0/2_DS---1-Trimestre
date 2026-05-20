function somaPequena(num1, num2){
    if (num1 >= 10 || num2 >= 10){
        return 'Apenas súmeros menores que 10';
    }
    else {
        return num1 + num2;
    }
}

console.log(somaPequena(9, 1));