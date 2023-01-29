// 중간에 오탈자가 나거나 다른 사람이 interface 규칙을 보고 정의대로 따라갈 수 있음 (통일성)
// User Interface 사용 var jaemoon : User = { age: 32, name: '이재문' }
interface User { 
    age: number;
    name: string;
};

const getUser = (user: User) => {
    console.log(user);
}

const capt = {
    age: 11
    , name: '판교'
};

const seho : User = {
    name: '조세호'
    ,age: 33
};

getUser(capt);
getUser(seho);

// 함수 인자1 : number  인자2 : number, return : number
interface SumFunction {
    (a: number, b: number) : number
};

// 함수의 모습까지 interface로 정의 가능, 가장 큰 메리트
var sum : SumFunction;
sum = function(a: number, b: number): number {
    return a + b;
}

// String Array 정의
interface StringArray {
    [index : number] : string;
};

var stringArr: StringArray = ['a', 'b', 'c'];
// stringArr[0]  = 1 ; ( x )
 stringArr[0] = 'a';


 /* 딕셔너리 패턴 */
 interface StringRegDictionary { 
    [key: string] : RegExp;
 };

 var obj: StringRegDictionary = {
    // sth: /abc/
    // cssFile: 'css' (x) -> key : string, value: 정규표현식
    cssFile: /\.css$/,  // css 로 끝나는 확장파일
    jsFile: /\.js$/,    // js로 끝나는 확장파일
 };

 Object.keys(obj).forEach(value => {});

 /* 인터페이스 확장 */
 interface Person {
    name: string;
    age: number;
 }

 interface Developer extends Person {
    language: string;
 };

 var jmDeveloper : Developer = {
    language : 'typescript'
    , name: 'moon'
    , age: 32
};
