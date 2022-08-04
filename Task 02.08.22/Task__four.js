// 4) Логирование пользователя:
// Проверить, имеет ли пользователь право доступа в админ панель сайта.
// Сначала проверяется логин ли равен admin, если так то спросить пароль у пользователя, который равен mySuperPassword.
// Результаты каждого шага выводить в консоль.


const login = prompt("your login?"),
pusvord = prompt ("yor pasvord");

if ( login == "admin") {
    alert ("confirm");
}
else if (alert !== "admin") {
    alert ("error");
}

if( pusvord == "mySuperPassword") {
    alert ("confirm");
}
else if (alert !== "mySuperPassword") {
    alert ("error");
}

