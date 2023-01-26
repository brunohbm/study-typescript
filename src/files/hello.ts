function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

const teste = 'Hello';

const teste1: string = "teste";

greet('Date', new Date());

console.log('teste :>> ', teste);
console.log('teste1 :>> ', teste1);

function consolo(aSerConsolado: string) {
    console.log(aSerConsolado);
}

consolo('Bruno');

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
    consolo('teste');
} else {
    consolo('teste');
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

const underWater1: Bird[] | Fish[] = [{ fly: () => {} }, { swim: () => {} }].filter(isFish);
console.log(underWater1);

function isBird(pet: Fish | Bird): pet is Bird {
    return (pet as Bird).fly !== undefined;
}

const inTheSky: Bird[] | Fish[] = [{ fly: () => {} }, { swim: () => {} }].filter(isBird);
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