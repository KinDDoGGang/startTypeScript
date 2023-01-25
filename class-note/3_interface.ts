// 중간에 오탈자가 나거나 다른 사람이 interface 규칙을 보고 정의대로 따라갈 수 있음 (통일성)
interface User { 
    age: number;
    name: string;
};

var seho : User = {
    name: '조세호'
    ,age: 33
};

// User Interface 사용 var jaemoon : User = { age: 32, name: '이재문' }