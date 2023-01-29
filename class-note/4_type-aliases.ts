/** type, interface 차이점 
 * 
 * 1. type : preview 로 봤을 때, type 확인 가능
 * 2. interface : preview로 봤을 때, interface 로만 나와서 타입 확인 불가
 * 
 * 
 * interface는 extends를 통해 확장이 가능하지만, type은 확장 불가능 
 * 좋은 소프트웨어는 확장이 용이해야 하기 때문에, type보다는 interface를 사용 권장
*/

interface Person {
 name: string;
 age: number
};

type _Person = {
    name:string;
    age: number;
};

var sseho : _Person = {
    name: '세호'
    , age: 33
};

