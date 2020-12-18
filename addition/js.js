// eslint-disable-next-line strict
'use strict';

const hello = document.querySelector('.hello'),
    date = new Date(),
    today = date.getDay(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    dayOfWeik = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

function showMessage() {
    let a = 'AM';

    function timesOfDay() {
        if (hours > 11 && hours < 18) {
            return 'Добрый день';
        } else if (hours >= 18 && hours < 23) {
            return 'Добрый вечер';
        } else if (hours < 6 && hours >= 23) {
            return 'Доброй ночи';
        } else {
            return 'Доброе утро';
        }
    }

    function time() {
        if (hours >= 13) {
            a = 'PM';
            return hours - 12;
        } else {
            return hours;
        }
    }

    function checkTime(item) {
        if (item < 10) {
            item = '0' + item;
            return item;
        } else {
            return item;
        }
    }

    function newYear() {
        const y = date.getFullYear() + 1,
            n = new Date(`01 january ${y}`);
        return Math.floor((n.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
    }
    time();
    hello.innerHTML = `${timesOfDay()}<br>
    Сегодня: ${dayOfWeik[today]} <br> 
    Текущее время: ${checkTime(hours)}:${checkTime(minutes)}:${checkTime(seconds)} ${a}<br>
    До нового года осталось ${newYear()} дней`;
}


showMessage();