// 2 Реализовать функцию removeElement(array, item) чтобы удалить элемент item из массива array.




function removeElement(array, item){
    const index = array.indexOf(item);
    const removed = array.splice(index, 1);
    console.log(removed);
}



