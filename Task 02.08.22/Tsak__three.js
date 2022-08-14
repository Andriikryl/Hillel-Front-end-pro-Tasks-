// 3) Даны 3 числа, определить наибольшее из них.


const FirstofNumber = + (prompt("add number")),
    SecondofNumber = + (prompt("add number")),
    ThierdofNumber = + (prompt("add number"));

if (FirstofNumber > SecondofNumber && FirstofNumber > ThierdofNumber){
    alert ('first number is the biggest')
}
else if (SecondofNumber > FirstofNumber && SecondofNumber > ThierdofNumber){
    alert ('Second number is the biggest')
}
else if (ThierdofNumber > FirstofNumber && ThierdofNumber > SecondofNumber){
    alert ('Thierd number is the bigest')
}
