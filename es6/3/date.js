const now = new Date(); // 현재 날짜와 시간
now;

const halloween = new Date(2020, 9, 31); // 월은 0에서 시작합니다. 즉, 9는 10월입니다.

const halloweenParty = new Date(2020, 9, 31, 19, 0); // 19:00 = 7:00 pm

halloweenParty.getFullYear(); // 2020
halloweenParty.getMonth(); // 9
halloweenParty.getDate(); // 31
halloweenParty.getHours(); // 19
halloweenParty.getMinutes(); // 0
halloweenParty.getSeconds(); // 0
halloweenParty.getMilliseconds(); // 0
