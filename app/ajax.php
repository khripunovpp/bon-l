<?php

$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$city = htmlspecialchars($_POST['city']);
$phone = htmlspecialchars($_POST['phone']);

$jsonout = '{"status": "error", "message": "Упс"}';

if (!empty($phone)) {

	// $to = 'info@bon-l.ru, info@lymmed.ru';
	$to = 'khripunovpp@gmail.com';
	$subject = 'BON-L';
	$headers  = 'MIME-Version: 1.0' . "\r\n";
	$headers .= 'Content-type: text/html; utf-8' . "\r\n";
	$headers .= 'From: Bon-l <info@bon-l.ru>' . "\r\n";
	$message = "<table>";
	$message .= "<tr><td><b>Имя</b></td><td>$name</td></tr>";
	$message .= "<tr><td><b>Контактный телефон</b></td><td>$phone</td></tr>";
    $message .= "<tr><td><b>E-mail</b></td><td>$email</td></tr>";
    $message .= "<tr><td><b>Город</b></td><td>$city</td></tr>";
	$message .= "<tr><td colspan=\"2\">Сообщение создано автоматически!</td></tr>";
	$message .= "</table>";
				
	mail($to, $subject, $message, $headers);

	$jsonout = '{"status": "success", "message": "Заявка принята! Менеджер свяжется с Вами в ближайшее (рабочее) время."}';

} else {

	$jsonout = '{status": "error", "message": "Без телефона мы не сможем связаться с вами."}';
	
}

echo $jsonout;

?>