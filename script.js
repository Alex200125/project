

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

let money, time;

detectedDayBudget();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpenses() {
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
        
    }
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ваш дневной бюджет на 1 день составляет: " + appData.moneyPerDay);
}

detectDayBudget();

detectLevel();

function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if(appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Ошибка');
    }
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.mothIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.mothIncome);
    }
}

function detectedDayBudget() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}

checkSavings();

chooseOptExpenses();

function chooseOptExpenses() {
    for(let i = 0; i < 3;) {
        let a = prompt("Статья обязательных расходов?", '');
    
        if(typeof(a) ===  'string' &&  typeof(a) != null && a != '') {
            console.log("done");
            appData.optionalExpenses[i] = a; //ключ, условие
        } else {
            console.error('Произошла ошибочка:(' + "</br>" + 'Введите заного');
            continue;
            
        }
        i++;
        
    }
}



//cicle end



//FUNCTION

// let name = 123;

// function showFirstMessage(text) {
//     alert(text);
//     let name = 234;
// }

// showFirstMessage('Какой-то текст');
// console.log(name);



// let calc = function(a, b) {
//     return a + b;
// }

