// console.log(process.argv);
/*
    d:\nodejs>node add.js 10 20
    [
    'C:\\Program Files\\nodejs\\node.exe',
    'd:\\nodejs\\add.js',
    '10',
    '20'
    ]
*/

let sum = 0;
for (let i = 2; i < process.argv.length; i++)
    // console.log(process.argv[i]);
    sum += +process.argv[i];
console.log(sum);




// console.log(http);

