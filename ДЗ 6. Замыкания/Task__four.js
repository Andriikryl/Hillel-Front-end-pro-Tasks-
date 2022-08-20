// 4. Написать функцию, принимающую один параметр. При первом вызове она его запоминает, при втором - суммирует переданный параметр с тем, что передали впервые и т.д. Все это с замыканиями, например: sum(3) = 3 sum(5) = 8 sum(20) = 28
// На каждом вызове возвращает текущую сумму









function getNumber() {

    let counter = 0;
    return function (firstType) {
    return counter+=firstType;

    };
   }


let finalResult = getNumber();

   console.log(finalResult(1)); 
   console.log(finalResult(2)); 
   console.log(finalResult(3));