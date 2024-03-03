
let x = 80000;
let tax;
let salary;

if (x<10000);
 {tax = (x*0.05)}

if (x>=10000 && x<50000)
{tax = (x*0.1)};

if (x>50000 && x<=100000)
{tax = (x*0.15)};

if (x>100000 && x <=200000)
{tax = (x*0.2)};

if (x>200000)
{tax = (x*0.25)}

salary = (x - tax)

console.log('Gross', x)
console.log('Tax', tax)
console.log('Netto', salary)