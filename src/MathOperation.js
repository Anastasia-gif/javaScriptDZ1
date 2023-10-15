/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function calculationResult() {
    let x = 10;
    let y = 12;
    let z = 3;

    x += y - x++ * z;
    console.log(`Переменная x = ${x}`);
    z = --x - y * 5;
    console.log(`Переменная z = ${z}`);
    y /= x + 5 % z;
    console.log(`Переменная y = ${y}`);
    z = x++ + y * 5;
    console.log(`Переменная z = ${z}`);
    x = y - (x++) * z;
    console.log(`Переменная x = ${x}`);
}
calculationResult();