// function logMessage( message: string): void {
//     console.log(message);
// }

// logMessage('빈 문자열'); (O)
// logMessage(10) (x)

/* union type을 통해 여러가지의 타입 선언 가능 */
function logMessage(message: string | number | boolean) {
    if (typeof message === 'number') {
        // number타입의 api 속성 사용 가능
        return message.toLocaleString();
    } else if (typeof message === 'string') {
        // string 타입의 api 속성 사용 가능
        return message.toString();
    }
    throw new TypeError('value must be string or number');
};

logMessage('hi');
logMessage(10);

interface Developer {
    name: string;
    skill:string;
};

interface Person {
    name: string;
    age: number;
};

function askSomeone(someone : Developer | Person) {
    console.log('someone dosen`t have both type, because this code can be occured some error');
};

function askSomeone2 ( someone: Developer & Person) {
    // intersection 교차되기 때문에 모든 타입 선언 가능
    someone.age;
    someone.skill;
    someone.name;

    console.log('someone dosne`t occur error because of intersection type, this type is combine with both type properties');
};

