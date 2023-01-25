function sum ( a:number, b:number): number {
    return a+b
};

// optional parameter( :? )
function existOrNot(a: string, b?:string) {
    return a.concat(b || '');
};

existOrNot("Hi", "myNameIs");
existOrNot("Hi");

sum (10, 20);

// TS에서는 아래 함수 오류
// sum (10,20,30);