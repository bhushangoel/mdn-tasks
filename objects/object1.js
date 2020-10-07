function Person(first, last, age, gender, interests) {
    this.name = {
        first : first,
        last : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() {
        console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
    };
    this.greeting = function() {
        console.log('Hi! I\'m ' + this.name.first + '.');
    };
}

let person1 = new Person('Bhushan', 'Goel', 28, 'Male', ['Coding', 'Reading']);

console.log('1 : ',person1);
console.log('2 : ',person1.bio());
console.log('3 : ',person1.greeting());
console.log('---------------------------------');

let person2 = Object.create(person1);
console.log('1 : ',person2);
console.log('2 : ',person2.bio());
console.log('3 : ',person2.greeting());
