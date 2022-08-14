// 1) Дано трехзначное число. 
// Верно ли, что все цифры одинаковы? ‘333’
// Есть ли среди цифр цифры одинаковые? ‘332’ ‘233’ ‘323’

let totalNamber, firstNamber, secondNamber, thierdNumber;
totalNamber = parseInt(prompt("Введите число от 100 до 999: "));
thierdNumber = totalNamber % 10;
secondNamber = ((totalNamber - thierdNumber) / 10) % 10;
firstNamber = ((totalNamber - thierdNumber - secondNamber * 10) / 100) % 10;
if (firstNamber == thierdNumber && firstNamber == secondNamber && secondNamber == thierdNumber) {
  alert('В числе все одинаковые цифры');
} else if (firstNamber == secondNamber || firstNamber == thierdNumber || secondNamber == thierdNumber ) {
  alert('В числе есть одинаковые цифры');
}
else  {
    alert('В числе все цифры разные');
  }