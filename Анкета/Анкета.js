"i=use strict";

function a() {

    let first_name;
    do {
        first_name = prompt("Скажите ваше Имя", "");
    } while (first_name.replace(/^[a-zA-Z]+$/, "").length);
    let last_name;
    do {
        last_name = prompt("Скажите вашу Фамилию", "");
    } while (last_name.replace(/^[a-zA-Z]+$/, "").length);
    let middle_name;
    do {
        middle_name = prompt("Скажите ваше Отчество", "");
    } while (middle_name.replace(/^[a-zA-Z]+$/, "").length);
    let age;
    do {
        age = prompt("Сколько вам лет?", "");
    } while (age.replace(/\d/g, "").length);


    let gender = confirm("Вы мужчина?");
    let pension;
    let age1 = age * 1 + 5;
    let gendergen;
    if (gender == true) {
        gendergen = "вы мужчина";
    } else if (gender == false) {
        gendergen = "вы женщина";
    }
    if (gender == 1 && age <= 60) {
        pension = "нет";
    } else if (gender == 0 && age <= 55) {
        pension = "нет";
    } else if (gender == 1 && age >= 60) {
        pension = "да";
    } else if (gender == 0 && age >= 55) {
        pension = "да";
    }
    alert(
        "Ваше ФИО:" + last_name + " " + first_name + " " + middle_name + "\r\n" + "Ваш возраст:" + age + "\r\n" + "Ваш возраст в днях:" + age * "365" + "\r\n" + "Сколько вам будет через 5 лет:" + age1 +"\r\n" + "Вы на пенсии:" + pension +  "\r\n" + "Ваш пол:" + gendergen
    );
}