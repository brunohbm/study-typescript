function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

const teste = 'Hello';

const teste1: string = "teste";

greet('Date', new Date());

console.log('teste :>> ', teste);
console.log('teste1 :>> ', teste1);

function consoleLog(aSerConsolado: string) {
    console.log(aSerConsolado);
}

consoleLog('Bruno');

function sum(num1: number, num2: number) {
    if (num2) {
        return num1 + num2;
    }

    return 'Not a sum';
}

sum(10, 20);

const arrayStrings = ['0', '1', '2', '3', '4', '5', '6', '7'];

arrayStrings.map(item => {
    return item + '-';
});

function printObject(obj: object) {
    Object.keys(obj).map(key => console.log(key));
};

printObject({
    teste: 1,
    teste1: 1,
});

printObject([]);

function printCoord(posi: { x: number; y: number }) {
    return posi.x + posi.x;
}

printCoord({ x: 1, y: 2 });

type Coord = {
    x: number,
    y: number,
};

const newCord: Coord = {
    x: 0,
    y: 0,
};

printCoord(newCord);

const testTypeAssersions = (null as any) as Coord;

console.log(testTypeAssersions.x);

let testLiteralType = 'teste';

testLiteralType = '100';

console.log(testLiteralType);

const testLiteral = 'teste 0';

console.log(testLiteral);

let testLiteral0: "TESTE" | "0" | "1" = "TESTE";

console.log(testLiteral0);

let testLiteral1: boolean = true;

testLiteral1 = false;

console.log(testLiteral1);

function request(method: "GET" | "POST") {
    console.log(method);
};

const req = {
    method: 'GET',
};

const req1 = {
    method: 'GET',
} as const;

const testessss = 'GET';

request(req.method as 'GET');
request(req1.method);
request(testessss);

function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
}

liveDangerously(10);

const firstName = Symbol("name");
const secondName = Symbol("name");

if (firstName.description === secondName.description) {
    consoleLog('teste');
} else {
    consoleLog('teste');
}

Symbol.for('name');

// Narrowing
// Estreitamento das tipagens de acordo com a lógica. 
function narrowingExemple(param: string | number) {
    console.log(param);

    // type guards
    if (typeof param === 'string') {
        return param.toUpperCase();
    }

    return param + 10;
}

narrowingExemple(10);

const booleanType = Boolean('TESTE');
// const booleanType: boolean
console.log(booleanType);

const trueType = !!'TESTE';
// const trueType: true
console.log(trueType);

function multiplyAll(
    values: number[] | undefined,
    factor: number
): number[] | undefined {
    // Narrowing by '!' Negation
    if (!values) {
        return values;
    } else {
        return values.map((x) => x * factor);
    }
}

multiplyAll([10], 1);

type Fish = { swim: () => void };
type Bird = { fly: () => void };

// Using type predicates
function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
}

const underWater1: Bird[] | Fish[] = [{ fly: () => { } }, { swim: () => { } }].filter(isFish);
console.log(underWater1);

function isBird(pet: Fish | Bird): pet is Bird {
    return (pet as Bird).fly !== undefined;
}

const inTheSky: Bird[] | Fish[] = [{ fly: () => { } }, { swim: () => { } }].filter(isBird);
console.log(inTheSky);


// Call Signatures
// This is how your should describe a function with type
type DescribableFunction = {
    (someText: string): string;
};

const testFunction: DescribableFunction = someText => {
    return someText + 'teste';
};

function foSomething(fn: DescribableFunction): string {
    return fn('10') + '20';
}

foSomething(testFunction);

// Generic Functions

function firstElement<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

const n = firstElement([1, 2, 3]);

function longest<Type extends { length: number }>(arr: Type, arr1: Type): Type | undefined {
    if (arr.length < arr1.length) return arr1;
    return arr;
}

longest("00", "0");
longest(["00"], ["0"]);

function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        // I don't feel like providing the index today
        callback(arr[i]);
    }
}

myForEach([10, 10, 10, 10], (arg) => {
    console.log(arg);
});

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
    if (d !== undefined && y !== undefined) {
        return new Date(y, mOrTimestamp, d);
    } else {
        return new Date(mOrTimestamp);
    }
}

makeDate(10001446);
makeDate(10001446, 10001446, 10001446);

interface User {
    id: number;
    admin: boolean;
}

declare const getDB: () => DB;
interface DB {
    filterUsers(filter: (this: User) => boolean): string;
}

type Teste = {
    tyeste: string;
};

declare const getTeste: () => Teste;

const testeasd = getTeste();

const db = getDB();
const admins = db.filterUsers(function (this: User) {
    return this.admin;
});

function unknownValue(value: unknown): any {
    return value;
}

function anyValue(value: any): any {
    if (value) return value.map((va: any) => va);
    return value + 10;
}

// Return any
function doSomething0(f: Function) {
    return f(1, 2, 3);
}

// Return number
function doSomething(f: (a: number, b: number, c: number) => number) {
    return f(1, 2, 3);
}

// Rest Parameters
function multiply(n: number, ...m: number[]) {
    return m.map(num => num * n);
}

multiply(10, 1, 2, 3, 4, 5, 6, 7, 8, 9);

// ------------------------------------------

function sum0(n: number, m: number) {
    return m + n;
}

// If defined only as 'const args = [8,5]' it will return an error, because arrays are mutable. 
const args = [8, 5] as const;

sum0(...args);

// ------------------------------------------

// Contextual function type
type voidFunc = () => void;

const f1: voidFunc = () => {
    return true;
}

f1();

function f2(): void {
    // return true;
}

console.log('f1()', f1());

// ------------------------------------------

interface OptionalObj {
    name: string;
    age?: number;
    weight?: number;
};

function consoleObj({
    name,
    age = 0,
}: OptionalObj) {
    console.log(age);
}

consoleObj({ name: 'Bruno Henrique', age: 10 });

// ------------------------------------------

interface ReadOnlyObj {
    readonly name: string;
}

const readonlyObj: ReadOnlyObj = {
    name: 'Bruno'
};

// Cannot assign to 'name' because it is a read-only property.
// readonlyObj.name = '';

// ------------------------------------------

interface ReadOnlyObj2 {
    readonly colors: {
        primary: string;
    }
}

const colors: ReadOnlyObj2 = {
    colors: {
        primary: '#fff'
    },
};

// Cannot assign to 'colors' because it is a read-only property.
// colors.colors = {};
colors.colors.primary = ''

// ------------------------------------------

interface Person {
    name: string;
    age: number;
};

interface ReadOnlyPerson {
    readonly name: string;
    readonly age: number;
}

const person: Person = { name: 'bruno', age: 10 };

const readonlyPerson: ReadOnlyPerson = person;


console.log(person.age); // 10
console.log(readonlyPerson.age); // 10

person.age++;

console.log(readonlyPerson.age) //11

// --------------Index Signatures--------------

interface StringArray {
    [index: number]: string;
}

const stringArray: StringArray = ['10', '20'];
const objArray: StringArray = { 10: '10' };


// ---------------------------------------------

interface ReadonlyStringArray {
    readonly [index: number]: string;
}

const myArray: ReadonlyStringArray = ['10', '20', '30'];

// ------------------ Extending Types---------------------------

interface NewAdress {
    street: string;
    number: number;
}

interface NewFullAdress extends NewAdress {
    city: string;
}

const testeAdressInterface: NewFullAdress = {
    number: 10,
    street: 'teste',
    city: 'acapuco',
};

interface Colorful {
    color: string;
}

interface Circle {
    radious: number;
}

interface ColorfulCircle extends Colorful, Circle {
    type: string;
}

const colorfulCircle: ColorfulCircle = {
    color: 'red',
    radious: 158,
    type: 'beautiful'
};


// ------------------ Intersection Types & -------------------

type BasicAdress = {
    street: string;
    number: number;
};

type FullAdress = BasicAdress & {
    number: string;
}

const testeAdress: FullAdress = {
    number: 0 as never,
    street: 'teste',
};



// ------------------ Generic object types -------------------

interface Box<Type> {
    contents: Type;
}

type OneOrNull<Type> = Type | null;

type OneOrMany<Type> = Type | Type[];

type OneOrManyOrNull<Type> = OneOrNull<OneOrMany<Type>>;

const testeGenericTypes: OneOrManyOrNull<string> = ['text'];

console.log(testeGenericTypes);

type ArrayString = Array<string>;


// ------------------ ReadonlyArray -------------------

let readOnlyArray: ReadonlyArray<string> = [];

readOnlyArray = ['', '101'];


// ------------------ Tuple Types -------------------

type TupleExemple = [string, number, string];

const testTuple: TupleExemple = ['10', 10, '10'];

console.log(testTuple.length); // Always 3

testTuple[0] = '100';

type RestElementsTuple = [string, number, ...string[]];

const restTuple: RestElementsTuple = ['10', 10, '5', '', '', '='];


// ------------------ Identity -------------------

function identity<Type>(arg: Type): Type {
    return arg;
}

identity<string>('10');
identity('10');
identity(10);


interface GenericFn0 {
    <Type>(args: Type): Type;
}

const newIdentity0: GenericFn0 = identity;

console.log(newIdentity0('10').toUpperCase());

interface GenericFn1<Type> {
    (args: Type): Type
};

const newIdentity1: GenericFn1<string> = identity;

newIdentity1('10');


// ------------------ Generic Classes -------------------

class GenericClass<Type> {
    num: number;
    children: Type;
}

let myGenericClass = new GenericClass<string>();
myGenericClass.children = '10';
myGenericClass.num = 10;


// ------------------ Generic Constraints -------------------

interface iLengthwise {
    length: number;
}

function constrainedFunc<Type extends iLengthwise>(param: Type) {
    console.log(param.length);
}

constrainedFunc('54');

type tLengthwise = {
    length: number;
};

function constrainedFunc1<Type extends tLengthwise>(param: Type) {
    console.log(param);
}

constrainedFunc1({ length: 10 });


// ------------------ Using Type Parameters in Generic Constraints -------------------

function tpInGeneric<Type, Key extends keyof Type>(obj: Type, key: Key) {
    console.log(obj[key]);
}

tpInGeneric({ age: 10, name: "Bruno" }, 'age');

function tpInGeneric1<Type, SubType extends Type>(type: Type, subtype: SubType) {
    console.log(type, subtype);
}

tpInGeneric1({ name: 10 }, { age: 10, name: 10 })


// ------------------ Using Class Types in Generics -------------------

class BeeKeeper {
    hasMask: boolean = true;
}

class ZooKeeper {
    nametag: string = "Mikle";
}

class Animal {
    numLegs: number = 4;
}

class Bee extends Animal {
    keeper: BeeKeeper = new BeeKeeper();
}

class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
}

class Ant extends Animal { }


function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

console.log(createInstance(Lion).keeper.nametag);
console.log(createInstance(Bee).keeper.hasMask);
console.log(createInstance(Animal).numLegs);
console.log(createInstance(Ant).numLegs);


// ------------------ Keyof -------------------

type TestKeyof = {
    [k: string]: boolean;
};

const testKeyof: TestKeyof = { 0: false };

type Key = keyof TestKeyof;

const key: Key = '{}';

// ------------------ ReturnType -------------------

type FunctionRT = () => string;

type stringRT = ReturnType<FunctionRT>;

function funcRT() {
    return { teste: 1 };
}

type stringRT0 = ReturnType<typeof funcRT>;


// ------------------ Indexed Access Types -------------------

type BigPerson = {
    height: string;
    size: number;
};

type HeightType = BigPerson['height' | 'size'];

type HeightType0 = BigPerson[keyof BigPerson];

const IATArray = [
    { key: 'key', label: 100 }
];

type HeightType1 = typeof IATArray[0]['label'];
