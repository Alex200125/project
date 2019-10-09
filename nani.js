//function

// function showFirstMessage(text) {
//     alert(text);
// }

// showFirstMessage('Какой-то текст');

// function learnJS(lang, callback) {
//     console.log("Я учу " + lang);
//     callback();
// }

// function done() {
//     console.log("Я прошёл 5 уроков")
// }

// learnJS("JavaScript", done);


//UROK

let options = {
    width: 1024,
    height: 980,
    name: 'test'
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: 'black',
    bg: 'red'
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log('Свойствой ' + key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options).length);

// let arr = [1, 2, 3, 5, 'six'];

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + ' (массив: ' + mass + ')');
// });

// console.log(arr);

// let mass = [1, 3, 6, 7, 4];


// for(let key of mass) {
//     console.log(key);
// }


// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ["sdf", 'dfj', 'eee', 'rqa'];
//     i = arr.join(', ');

// console.log(i);

let arr = [1, 15, 4];
    i = arr.sort(compareNum);

function compareNum(a, b) {
    return a - b;
}

console.log(arr);

let soldier = {
    health: 400,
    armor: 100
};

let pick = {
    health: 100
};

pick.__proto__ = soldier;

console.log(pick);
console.log(pick.armor);