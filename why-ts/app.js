// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

/**
 * @description 객체 타입을 미리 정의한다면 브라우저에서 값을 살펴보지 않고도 code 상에서 오류 도출 가능
 * @typedef {object} address
 * @property {string} city
 * @property {string} street
 *
 */

/**
 * @description 프로퍼티의 타입 정의 User 객체 > console.log 로 찍어보지 않고도 바로보기로 나타나게 됨
 * @typedef {object} User
 * @property {string} name
 * @property {string} email
 * @property {string} address
 */

/**
 * @returns {Promise<User>}
 */
function fetchUser() {
    return axios.get(url);
}

function startApp() {
    fetchUser
        .then(function (response) {
            //console.log(response);
            user = response.data;

            username.innerText = user.name;
            email.innerText = user.email;
            address.innerText = user.address.street;
        })
        .catch(function (error) {
            console.log(error);
        });
}

startApp();
