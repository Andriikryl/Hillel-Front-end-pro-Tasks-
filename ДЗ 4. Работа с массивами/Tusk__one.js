// 1. Создать массив, длину и элементы которого задает пользователь (через
//     prompt) (повторяется промпт, пока пользователь не нажмет кэнсэл). Затем отсортировать массив по росту. Затем, удалить
//     элементы из массива со 2 по 4. По мере изменений выводить содержимое массива в консоль.

{
    const arr = [];
    while (true) {
        let number = prompt();
        if (number !== null) {
            arr.push(number);
        } else{
            break;
        }
        console.log(arr);
    }
    function sortNums(item1, item2){
        if (item1 > item2) {
            return 1;
        }
        if (item1 === item2) {
            return 0;
        }
        if (item1 < item2) {
            return -1;
        }
    }
    const sortedArr = arr.sort(sortNums);
    console.log(sortedArr);
    
    sortedArr.splice(1,3);
    console.log(sortedArr);
}

