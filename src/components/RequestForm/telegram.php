<?php

define ('url',"https://api.telegram.org/bot1747833143:AAGmm2CnUrkYCyHIdVzEkgJVg2HfNUCba28/");
$name = $_GET['name'];
$comment = $_GET['comment'];
$phone = $_GET['phone'];
$chat_id = '987210358';
$message = urlencode("Имя пользователя:".$name."\n Сообщение : ".$comment);
file_get_contents(url."sendmessage?text=".$comment."&chat_id=".$chat_id."&parse_mode=HTML");


// $name = $_POST['name'];
// $comment = $_POST['comment'];
// $phone = $_POST['phone'];

// $token = '1747833143:AAGmm2CnUrkYCyHIdVzEkgJVg2HfNUCba28';

// $chat_id = '987210358';

// $arr = array(
//     'Имя пользователя: ' => $name,
//     'Сообщение: ' => $comment,
//     'Телефон: ' => $phone
// );