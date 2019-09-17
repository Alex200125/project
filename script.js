

//uslovie start

// let num = 50;
// if(num < 49) {
//     console.log("Неверно");
// } else if(num > 100) {
//     console.log("Слишком много");
// } else {
//     console.log("Верно");
// };

// (num == 50) ? console.log('hai') : console.log('Error');

// switch(num) {
//     case num < 49:
//         console.log('hai');
//         break;
//     case num > 100:
//         console.log('ooi');
//         break;
//     case num > 80:
//         console.log('ooi');
//         break;
//     case 50:
//         console.log('Это так!)');
//         break;
//     default:
//         console.log('Что-то пошло не так');
//         break;
// }

//uslovie end

//dom zad
let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

//cicle start
for(let i = 0; i < 2;) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');

    if(typeof(a) ===  'string' &&  typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        console.log("done");
        appData.expenses[a] = b; //ключ, условие
    } else {
        console.error('Произошла ошибочка:(' + "</br>" + 'Введите заного');
        continue;
        
    }
    i++;
    
};

//cicle two start
// let i = 0;
// while(i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//             b = prompt("Во сколько обойдется?", '');

//     if(typeof(a) ===  'string' &&  typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b; //ключ, условие
//     } else {
//         console.error('Произошла ошибочка:(' + "</br>" + 'Введите заного');
//         console.log(i);
//         continue;
        
//     }
//     i++;
//     console.log(i);
// }

//cicle three start
// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//         if(typeof(a) ===  'string' &&  typeof(a) != null && typeof(b) != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
//             console.log("done");
//              appData.expenses[a] = b; //ключ, условие
//         } else {
//             console.error('Произошла ошибочка:(' + "</br>" + 'Введите заного');
//             console.log(i);
//             continue;
                    
//         }
//         i++;
//         console.log(i);
// } while(i < 2);

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
} else if(appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Ошибка');
}

//cicle end