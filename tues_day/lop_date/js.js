
//     class Date {
//     day;
//     month;
//     year;
//
//     constructor(day, month, year) {
//     this.day = day;
//     this.month = month;
//     this.year = year;
// }
//
//     getDay() {
//     return this.day;
// }
//
//     getMonth() {
//     return this.month;
// }
//
//     getYear() {
//     return this.year;
// }
//
//     setDay(newDay) {
//     this.day = newDay;
// }
//
//     toString() {
//     console.log("Hien thi : " + this.day + "/" + this.getMonth() + "/" + this.getYear());
// }
// }
//
//     let tomorrow = new Date(25, 10, 2022);
//     console.log(tomorrow.getDay() + "/" + tomorrow.getMonth() + "/" + tomorrow.getYear())
//      tomorrow.setDay(24);
//      console.log("Ngay sau khi chinh sua : " + tomorrow.getDay() + "/" + tomorrow.getMonth() + "/" + tomorrow.getYear());
//     tomorrow.toString();
let MyDate = function(day, month, year) {

    this.day = day;

    this.month = month;

    this.year = year;

    this.getDay = function() {
        return this.day;
    }
    this.getMonth = function() {
        return this.month;
    }
    this.getYear = function() {
        return this.year;
    }
    this.setDay = function(day) {
        this.day  = day;
    }
    this.setMonth = function(month) {
        this.month  = month;
    }
    this.setYear = function(year) {
        this.year  = year;
    }

};
let date = new MyDate(2, 2, 2007);

date.setDay(10);
date.setMonth(10);
date.setYear(2019);

let day = date.getDay();

let month = date.getMonth();

let year = date.getYear();

alert(day + "/" + month + "/" + year);
