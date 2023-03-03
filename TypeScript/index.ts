let names:string = "alex";
names = '12';

let namee: string ='axelito';
let age: number = 12;
let heig: number = 32;

let array: string[] = ['axelito', 'jhoho', 'kazura'];

function help(name:string): string {
    return `help ${age}`
}

console.log(help(names));

// Interface
interface user {
    name: string,
    id: number
}

const Users:user = {
    name: 'axelito',
    id: 12
}

// webcomponents
class account {
    name: string;
    id: number

    constructor(name:string, id:number){
            this.name = name;
            this.id = id;
    }
}

const user2:user = new account('axelito', 12)

// Unions
function lenght(obj:string | string[]){
    return obj.length
}

// Generics
type StringArray = Array<number>

let arrayEj: StringArray = [12]
