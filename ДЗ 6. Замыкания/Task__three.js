// 3. Создать функцию, которая удаляет из строки все символы, переданные вторым аргументом. 'func("hello world", ['l', 'd'])' вернет нам "heo wor"

















function deliteSymbol(mainString = "I love learn Js", remuvEle = ['l', 'e']){
    let stringArrey = mainString.split("");
    let finalResult = stringArrey.reduce( (typeOne, typeTwo) => {if (!remuvEle.includes(typeTwo)) typeOne.push(typeTwo); 
    return typeOne;} , [ ]);
                    
    return finalResult.join('');
}

const newString = deliteSymbol();
console.log(newString);

