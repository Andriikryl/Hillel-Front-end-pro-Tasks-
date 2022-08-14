// 2) Определить, есть ли заданное шестизначное число зеркальным? (123321, 147741)


{
    let totalNumaber,firstNumber,secondNamber,thierdNumber,fourNumber,fiveNumber,sixNumber;
totalNumaber = parseInt(prompt("Введите шестизначное число"));
firstNumber = (totalNumaber % 10).toFixed();
secondNamber = ((totalNumaber-firstNumber)/10 % 10).toFixed();
thierdNumber = ((totalNumaber-secondNamber)/100 % 10).toFixed();
fourNumber = ((totalNumaber-thierdNumber)/1000 % 10).toFixed();
fiveNumber= ((totalNumaber-fourNumber)/10000 % 10).toFixed();
sixNumber = ((totalNumaber-fiveNumber)/100000 % 10).toFixed();

if (firstNumber==sixNumber && secondNamber==fiveNumber && thierdNumber==fourNumber){
    alert('шестизначное число зеркальное')
}
else {
    alert("error")
}
}