<?
if((isset($_POST['introName'])&&$_POST['introName']!="")&&(isset($_POST['intro-form-tel'])&&$_POST['intro-form-tel']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
        $to = 'dkfolkin@gmail.com, city21anapa@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Обратный звонок c верхней формы'; //Загаловок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p><strong>Имя заказчика:</strong> '.$_POST['introName'].'</p>
                        <p><strong>Телефон:</strong> '.$_POST['intro-form-tel'].'</p>
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
}
?>