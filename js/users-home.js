'use strict';

//initialaize 100 users-array with random data
function User (name, surname, age, isMale, email, isSubscribe) {
    this.firstName = name;
    this.lastName = surname;
    this.age = age;
    this.isMale = isMale;
    this.email = email;
    this.isSubscribe = isSubscribe;
}

// 1.1 Для примера с последней части занятия прописать метод getFullName() (возвращает строку с полным именем) для юзера. Общую логику (т.е. указанный метод) вынести в прототип. 
const protoUser = new User();

protoUser.getFullName = function() {
    return this.firstName + ' ' + this.lastName; 
}

User.prototype = protoUser;

const users = [];

for (let i = 0; i < 100; i++) {
    const user = new User(
        `Username${i}`,
        `Usersurname${i}`,
        Math.trunc(Math.random() * 99 + 1),
        Math.random() > 0.5,
        `usermail${i}@gmail.com`,
        Math.random() > 0.5,
    );
    users.push(user);    
}
console.table(users);
console.log('users[5].getFullName():>> ', users[5].getFullName());


//выводим полные имена пользователей
console.log('Test getFullName :>> ');
//вариант со стрелочной функцией
//const usersFullName = users.map(user => user.getFullName());
//тоже самое, но без стрелочной
const usersFullName = users.map(function (user) {return user.getFullName();} );
console.table(usersFullName);

// 1.2 Получить массив полных имен лиц женского пола школьного возраста (6 - 18 лет).
function isSchoolgirl (user) {
    return !user.isMale && user.age >= 6 && user.age <= 18;
}
console.log('Show only schoolgirl :>> ');
const userSchoolgirl = users.filter(isSchoolgirl);
console.table(userSchoolgirl);

// 1.3 Проверить, есть ли среди пользователей пользователь с email`ом usermail99@gmail.com
console.log('Is register email usermail99@gmail.com:>> ');
const findEmail = users.find(item => item.email === 'usermail99@gmail.com');
console.table(findEmail);

// 1.4 Проверить, все ли пользователи подписаны (subscribed).
console.log('Are there all users subscribed?:>> ');
const isAllSubscribe = users.every(item => item.isSubscribe === true);
console.table(isAllSubscribe);