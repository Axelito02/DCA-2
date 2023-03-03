"use strict";
let names = "alex";
names = '12';
let namee = 'axelito';
let age = 12;
let heig = 32;
let array = ['axelito', 'jhoho', 'kazura'];
function help(name) {
    return `help ${age}`;
}
console.log(help(names));
const Users = {
    name: 'axelito',
    id: 12
};
// webcomponents
class account {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user2 = new account('axelito', 12);
// Unions
function lenght(obj) {
    return obj.length;
}
let arrayEj = [12];
