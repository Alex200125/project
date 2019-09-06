/*class Hater {
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this. lastName = lastName;
	}

	sayName() {
		console.log(`${this.firstName} ${this.lastName}`)
	}

}

let hater1 = new Hater('Jon', 'Keho');
hater1.sayName();

let hater2 = new Hater('Uolt', 'Disney');
hater2.sayName();*/

class Bloger {
	constructor(firstName, lastName, nameBloger) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.nameBloger = nameBloger;
	}

	sayName() {
		console.log(`Канал ${this.nameBloger} [автор канала: ${this.firstName} ${this.lastName}]`)
	}
}

let blogerName = new Bloger('Александр', 'Пронин', 'Friman');
blogerName.sayName();





