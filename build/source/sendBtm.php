<?
if((isset($_POST['name-btm'])&&$_POST['name-btm']!="")&&(isset($_POST['intro-form-tel-bottom'])&&$_POST['intro-form-tel-bottom']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'dkfolkin@gmail.com, city21anapa@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок c нижней формы'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p><strong>Имя заказчика:</strong> '.$_POST['name-btm'].'</p>
                        <p><strong>Телефон:</strong> '.$_POST['intro-form-tel-bottom'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>