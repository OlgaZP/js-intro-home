'use strict';

// 1) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

console.log('Testing Seasons :>> ');
for (let i = 1; i<6; i++) {
    let result = '';
    switch (i) {
        case 1: 
            result = 'winter';
            break;
        case 2: 
            result = 'spring';
            break;
        case 3: 
            result = 'summer';
            break;
        case 4: 
            result = 'autumn';
            break;
        default: 
            result = 'no more seasons';
    }
    console.log(`when i=${i} in switch => result=${result}`);
}

// 2) В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

console.log('Testing Month :>> ');
for (let i = 1; i<4; i++) {
    let month = Math.trunc(Math.random() * 12 + 1);
    let season = '';
    switch (month) {
        case 1:
        case 2:
        case 12: 
            season = 'winter';
            break;
        case 3:
        case 4:
        case 5: 
            season = 'spring';
            break;
        case 6:
        case 7:
        case 8: 
            season = 'summer';
            break;
        case 9:
        case 10:
        case 11: 
            season = 'autumn';
            break;
        default: 
            season = 'inexist season';
    }
    console.log(`when month=${month} in switch => season=${season}`);
}

// 3) Запросить у пользователя номер дня недели и вывести соответствующее полное строковое название (например, если пользователь вводит 7 - выводится сообщение "воскресенье"). предусмотреть ошибку введения (default)

console.log('Testing Day of Week :>> ');
do {
    const dayNum = Number(prompt('Input number of day >>'));
    switch (dayNum) {
        case 1:
            alert('This is Monday');
            break;
        case 2:
            alert('This is Tuesday');
            break;
        case 3:
            alert('This is Wednesday');
            break;
        case 4:
            alert('This is Tuesday');
            break;
        case 5:
            alert('This is Friday');
            break;
        case 6:
            alert('This is Saturday');
            break;
        case 7:
            alert('This is Sunday');
            break;
        default:
            alert('There is no day of week correspond to '+ dayNum);        
    }
} while (confirm('Try again?'));

// 4) В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

console.log('Testing Decade of Month :>> ');
do {
    const dayNumM = Number(prompt('Input day of month>>'));
    const decade = Math.trunc((dayNumM - 1)/ 10);
    switch (decade) {
        case 0:
            alert('This is first decade');
            break;
        case 1:
            alert('This is second decade');
            break;
        case 2:
            alert('This is third decade');
            break;  
        case 3:
            if (dayNumM === 31) {
                alert('This is third decade');
                break;
            }                 
        default:
            alert('There is no day of month correspond to '+ dayNumM);        
    }
} while (confirm('Try again?'));