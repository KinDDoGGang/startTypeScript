// ES2015 ( Es6) > class 문법 생김

class Person {

    constructor(name, age) {
        this.name = name;
        this.age = age;        
    }
    constructor() {
        console.log('person class 생성 되었습니다.');
    }
}

var seho = new Person('세호', '33');
console.log(seho);