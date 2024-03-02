<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];


    $to = 'pospishil@vop-develop.cz'
    $subject = 'Rezervace tetování'
    $body = "Od: $name\n Email: $email\n Telefon: $phone\n Zpráva: $message";

    $headers = "From: $email";


    if (mail($to, $subject, $body, $headers)) {
        echo 'Zpráva byla úspěšně odeslána.';
    } else {
        echo ('Odeslání zprávy selhalo. Zkuste to znovu prosím.');
    }

?>

