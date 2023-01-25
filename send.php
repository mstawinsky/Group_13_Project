<?php
$fio = $_POST['fio'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);
$message = htmlspecialchars($message);

$fio = urldecode($fio);
$email = urldecode($email);
$phone = urldecode($phone);
$message = urldecode($message);

$fio = trim($fio);
$email = trim($email);
$phone = trim($phone);
$message = trim($message);

if(mail("nikita.miheev.1999@mail.ru", 'Заявка с сайта', "ФИО:".$fio. "\nE-mail: ".$email. "\nТелефон:" .$phone. "\nСообщение:" .$message, "From: example@mail.ru")) 
{
    header("Location: /successForm.html");
} else {
    header("Location: /404.html");
}
?>