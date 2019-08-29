
exports.seed = function(knex) {
  return knex('dailylines').del()
    .then(() => knex.batchInsert('dailylines', masterFakeYears, 30));
};

const faker = require('faker');



const myFakeYears = fakeYears(2014,2019);

for (let line of myFakeYears) {
    line.user_id=1;
    line.note = faker.random.words(33);
}

const myFakeYears2 = fakeYears(2014,2019);

for (let line of myFakeYears2) {
    line.user_id=2;
    line.note = faker.random.words(33);
}
const myFakeYears3 = fakeYears(2014,2019);

for (let line of myFakeYears3) {
    line.user_id=3;
    line.note = faker.random.words(33);
}
const myFakeYears4 = fakeYears(2014,2019);

for (let line of myFakeYears4) {
    line.user_id=4;
    line.note = faker.random.words(33);
}
const myFakeYears5 = fakeYears(2014,2019);

for (let line of myFakeYears5) {
    line.user_id=5;
    line.note = faker.random.words(33);
}
const myFakeYears6 = fakeYears(2014,2019);

for (let line of myFakeYears6) {
    line.user_id=6;
    line.note = faker.random.words(33);
}
const myFakeYears7 = fakeYears(2014,2019);

for (let line of myFakeYears7) {
    line.user_id=7;
    line.note = faker.random.words(33);
}


const masterFakeYears = [...myFakeYears, ...myFakeYears2, ...myFakeYears3, ...myFakeYears4, ...myFakeYears5, ...myFakeYears6, ...myFakeYears7]


function fakeYears(from,to) {
    const result = [];
    for (let i=from; i<=to; i++) {
        let thisYear = yearMaker(i);
        result.push(...thisYear);
    }
    return result;

    function yearMaker(year) {
        const mmNums = [31,28,31,30,31,30,31,31,30,31,30,31];
        // ACCOUNT FOR LEAP YEARS
        if (year % 4 === 0) mmNums[1] = 29;
        else if (year % 4 === 0 && year % 100 === 0) mmNums[1] = 28;
        else if (year % 4 === 0 && year % 100 !== 0 && year % 400 === 0) mmNums[1] = 29;
        else mmNums[1] = 28;

        const myYear = [];
        for (let i=0, month=i+1; i<mmNums.length; i++) {
            let max = mmNums[i];
            let thisMonth = monthMaker(max,month,year);
            myYear.push(...thisMonth);
            month++;
        }
        return myYear;
    }
    function monthMaker(n,month,year) {
        const myMonth = [];
        for (let i=1; i<=n; i++) {
            let day = i.toString().padStart(2,'0');
            month = month.toString().padStart(2,'0');
            myMonth.push({
            date: `${month}${day}${year}`,
            });
        }
        return myMonth;
    }
}
