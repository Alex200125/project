// console.log(4/0);
// console.log('string' * 5);

// let sumthing;
// console.log(sumthing);

// let object = {
//     name: 'Josh',
//     eag: 25,
//     pol: 'm'
// };

// console.log(object['eag']);

// let arr = ['png', 'jpeg', 'jpg', 'gif'];
// console.log(arr[2]);

// document.write('何');

// alert('Hello World');

// let answer = confirm('Anata ha dare desu ka');

// console.log(answer);

//  let answer = +prompt('Вам есть 18? ', 'Да');

//  console.log(typeof(answer ));

// let incr = 8,
//     decr = 5;

    
// console.log(incr++, decr--);

// console.log(5%2);
// console.log("2" === 2);

// let isChecked = false,
//     isClose = false;

// console.log(isChecked || !isClose);

let money = prompt("Ваш бюджет на месяц?");
    time = "2001.09.12";

let appData = {
    moneyData: money,
    timeData: time,
    expenses: {
    },
    optionalExpenses: {


    },
    income: [
        {}
    ],
    savings: false
    
};

let a1 = prompt("Введите обязательную статью расходов в этом месяце");
    a2 = prompt("Во сколько обойдётся?");
    a3 = prompt("Введите обязательную статью расходов в этом месяце");
    a4 = prompt("Во сколько обойдётся?");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.moneyData / 30);