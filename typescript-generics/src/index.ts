let userName: string = 'Poly';
let id: number | string;

type ArrNum = readonly [number, number, number];

const coords: [number, number] = [50.12547, 30.458796];
const rgb: ArrNum = [255, 0, 0]

type Alert = 'request' | 'success' | 'error';

const notification: Alert = 'success'

// composition - number | string
// tuple - [number, number]
// union - 'request' | 'success' | "error"

enum PizzaSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'Large'
}

PizzaSize.Large
PizzaSize.Medium

interface PlagConfig{
    readonly selector: string, 
    perPage: number, 
    startIndex: number, 
    draggable?: boolean,
}

const config: PlagConfig = {
    selector: '#plugin-1',
    perPage: 2,
    startIndex: 0,
    draggable: false
}

type SumFn = (param1: number, param2?: number) => number

const fnA: SumFn = function(param1: number, param2: number): number{
    return param1 + param2;
}

fnA(2, 4);