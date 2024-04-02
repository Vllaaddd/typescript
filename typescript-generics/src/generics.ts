function identity<T>(arg: T): T{
    return arg;
}

let output1 = identity<string>('myString')
let output2 = identity<number>(100)

function reverse<T>(arr: T[]): T[]{
    return arr.reverse()
}

let numbers = reverse<number>([1, 2, 3, 4, 5]);
console.log(numbers); // [5, 4, 3, 2, 1]

let strings = reverse<string>(["a", "b", "c", "d"]);
console.log(strings); // ["d", "c", "b", "a"]

function lengthOfObject<T extends {length: number}>(param: T): number{
    return param.length;
}

lengthOfObject([10, 11, 12, 13])
lengthOfObject("Hello world")
// lengthOfObject(5)
lengthOfObject({name: 'Earth', length: 10})

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key];
}

const student = {
    name: "John",
    age: 25,
    groupNumber: 12,
};
  
  
let studentName = getProperty(student, "name");
console.log(studentName); // "John"

// let studentAddress = getProperty(student, "address");
// console.log(studentAddress); // undefined

type Todo = {
    title: string;
    description: string;
    completed: boolean;
}

function updateTodo(todo: Todo, fieldsToUpdate:Partial<Todo>): Todo{
    return{...todo, ...fieldsToUpdate}
}

const todo1: Todo = {
    title: 'Learn Typescript',
    description: 'Study the basics of Typescript',
    completed: false,
}

const todo2 = updateTodo(todo1, {
    completed: true,
})

type Person = {
    name: string,
    age: number,
    address: string,
}

type PersonSummary = Pick<Person, "name" | "age">

const johnSummary: PersonSummary = {
    name: "John",
    age: 30,
}

type PersonWithoutAddress = Omit<Person, "address" | "age">

const john: PersonWithoutAddress = {
    name: "John"
}

type CityDatabase = Record<string, number>

const database: CityDatabase = {
    Kyiv: 2884000,
    Kharkiv: 1441000,
    Odesa: 1015000,
}

database.Lviv = 721301

interface Collection{
    [key: string]:number,
}

const products: Collection = {
    apples: 20,
    bananas: 30,
    lemons: 10,
}

const clothes: Collection = {
    shirts: 10,
    jeans: 15,
}

interface MixedCollection{
    [key: string]: string | number,
}

const cars: MixedCollection = {
    model: "bmw",
    color: "black",
    year: 2023,
}

type User = {
    name: string,
    age: number,
    address: string,
}

const updateUser = (user: User, fieldsToUpdate: Partial<User>): User => {
    return { ...user, ...fieldsToUpdate }
}

const user: User = {
    name: "John",
    age: 20,
    address: "Kyiv"
}

updateUser(user, {
    age: 30,
})

const changeUserInfo = <T>(user: T, changes: Partial<T>): T => {
    return {...user, ...changes}
}

changeUserInfo(user, {
    name: 'Max'
})

interface User2{
    name: string,
    age: number,
    address: string,
    email: string,
}

const getUserData = (user: User2): Pick<User2, "name" | "email"> => {
    return {
        name: user.name, 
        email: user.email
    }
}

type Months = Record<string, number>

const months: Months = {
    January: 31,
    February: 29,
    March: 31,
    April: 30,
    May: 31,
    June: 30,
    July: 31,
    August: 31,
    September: 30,
    October: 31,
    November: 30,
    December: 31,
}