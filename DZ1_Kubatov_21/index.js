var nik = prompt("Ведите имя");
var fam = prompt("Ведите фамилию")
alert("Здравствуйте! " + nik + " " + fam)

// #2

var number1 = Number(prompt("Ведите Первое число"))
var number2 = Number(prompt("Ведите Второе число"))
if(isNaN(number1) || isNaN(number2)) console.log('Ввели число!');
else{
    if(number1>number2) console.log("Число " + number1 + " больше")
    else if(number1===number2) console.log("Равны")
    else console.log("Число " + number2 + " больше")
}

// №3


var color = prompt("Ведите цвет светофора").toLowerCase();
if(color === 'красный' || color === 'red') console.log('Стой');
else if(color === "желтый" || color === 'yellow') console.log("Жди")
else if(color === "зеленый" || color === 'green') console.log("Иди")
else console.log("Нет такого цвета светофора")
