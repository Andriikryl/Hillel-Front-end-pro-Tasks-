// 4) Логирование пользователя:
// Проверить, имеет ли пользователь право доступа в админ панель сайта.
// Сначала проверяется логин ли равен admin, если так то спросить пароль у пользователя, который равен mySuperPassword.
// Результаты каждого шага выводить в консоль.


const login = prompt("your login?")

if ( login == "admin") {
    pusvord = prompt ("yor pasvord");
    if( pusvord == "mySuperPassword") {
        alert ("confirm");
        console.log(login)
    }
    else if (alert !== "mySuperPassword") {
        alert ("error");
        console.log(pusvord)
    }
}
else if (alert !== "admin") {
    alert ("error");
    console.log(login);
}




