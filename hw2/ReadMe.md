Необходимо реализовать АПИ согласно документации.

CRUD-методы должны быть защищены, корме GET запросов (см. swagger документацию), basic-авторизацией с логином\паролем admin\qwerty.



input-валидация с использованием express-validator + custom метод express-validator'а - для валидации blogId (проверки наличия такого блога) при создании поста.



В случае, если одно и тоже поле не проходит валидацию по нескольким критериям (например, websiteUrl слишком днинный и websiteUrl не соответствует шаблону регулярного выражения) - по-умолчанию, express validator добавит в массив ошибок это поле 2 раза. Однако, по заданию, клиенту нужно вернуть массив ошибок, в котором каждое поле, не прошедшее валидацию, встречается только один раз. Для этого используй свойство express-validator'a onlyFirstError или дополнительно отфильтруй результирующий массив вручную


`
errorsMessages: [
{
message: 'website url is too long';
field: 'websiteUrl';
},
{
message: 'website url does not match the template'; //should be removed
field: 'websiteUrl';
},
{
message: 'name is too long';
field: 'name';
},
];
`

📋


