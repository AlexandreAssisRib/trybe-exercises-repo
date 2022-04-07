let result = netSalary(2700)
console.log(result)

function netSalary(grossIncome) {
    let salary = 0;
if( grossIncome >= 5189.82) {
   let deductedSalary = grossIncome - 570.88;
   salary = deductedSalary - ((27.5/100)*deductedSalary) + 869.36;
   return salary
}
else if (grossIncome>= 2594.93 && grossIncome< 5189.82){
     deductedSalary = grossIncome - ((11/100)*grossIncome);
     if (deductedSalary>= 1903.99 && deductedSalary<2826.65){
         salary = deductedSalary - ((7.5/100)*deductedSalary) + 142.80;
         return salary
     }
     else if (deductedSalary>= 2826.65 && deductedSalary<3751.05){
        salary = deductedSalary - ((15/100)*deductedSalary) + 354.80;
        return salary
     }
     else if ( deductedSalary>=3751.05 && deductedSalary< 4664.68) {
         salary = deductedSalary - ((22.5/100)*deductedSalary + 636.13);
         return salary
     } else {

     }

     }

else if(grossIncome>= 1556.95 && grossIncome<2594.93){
    deductedSalary = grossIncome*(9/100);
    if (deductedSalary<2826.65 && deductedSalary>=1903.99){
        salary = deductedSalary - ((7.5/100)*deductedSalary) + 142.80;
        return salary
    } else {
        return deductedSalary
    }
}
else if( grossIncome < 1556.95) {
    deductedSalary = grossIncome - ((8/100)*grossIncome)
    salary = deductedSalary;
    return salary
}
}

