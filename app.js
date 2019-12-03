var yearOfBirth = prompt('What is your birth year?');
var monthOfBirth = prompt('What is your birth month?');
var dayOfBirth = prompt('What is your birth date?');

const months = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12
}

var todayYear = 2019;
var todayMonth = 'december';
var todayDay = 4;

var fullYears = todayYear - yearOfBirth;

if (months[monthOfBirth] < months[todayMonth]) {
    alert('You are ' + fullYears + '.');
} else if (months[monthOfBirth] > months[todayMonth]) {
    alert('You are ' + (fullYears - 1) + '.');
} else {
    if (dayOfBirth < todayDay) {
        alert('You are ' + fullYears);
    } else if (dayOfBirth > todayDay) {
        alert('You are ' + (fullYears - 1) + '.');
    } else {
        alert('You are ' + fullYears + '. Happy Birthday to You!');
    }
}
