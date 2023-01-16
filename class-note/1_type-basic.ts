// JS 문자열 선언
var str = 'hello'
var num = 10;
var arr = [10,11,12];

// TS 
var str:string = 'hello';
var num:number = 10;
var arr:Array<number> = [10,11,12];
let numItems: number[] = [1,2,3];
let show : boolean = true;

// TS Tuple ( 배열의 타입, 순서까지 정함) 
let tsTuple : [string, number] = ['문자', 10];

// TS Object
let tsObj : object = {};

// let personObj: object = {
//     name : 'moon'
//     , age : 32
// };

// TS Object 내부의 타입까지 정리가능
let personObj : { name: string, age:number } = {
    name : 'moon'
    , age: 32
};

