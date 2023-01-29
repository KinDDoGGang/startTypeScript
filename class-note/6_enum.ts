enum Shoes {
    Nike, 
    Adidas,
    Newbalance
};

enum Answer {
    Yes = 'Y',
    No = 'N'
};

// enum type 으로 정의할 경우, 'Y', 'y', 'yes', 1 등 boolean 비교값이 나올 때, 정의되어 있기 때문에 좋음
function askQuestion(answer: Answer) {
    if (answer === ('Y' || Answer.Yes)) {
        console.log('정답');
    } else if (answer === Answer.No) {
        console.log('오답');
    }
}

var myShoes = Shoes.Nike;       // return 0
