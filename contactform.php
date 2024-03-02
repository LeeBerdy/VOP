<?php

    $name = $_POST['name'];
    $company = $_POST['company'];
    $email = $_POST['email'];
    $message = $_POST['message'];


    $to = 'pospishil@vop-develop.cz';
    $subject = 'Rezervace tetování';
    $body = "Od: $name\n Firma: $company\n Email: $email\n Zpráva: $message";

    $headers = "From: $email";


    if (mail($to, $subject, $body, $headers)) {
        echo 'Zpráva byla úspěšně odeslána.';
    } else {
        echo ('Odeslání zprávy selhalo. Zkuste to znovu prosím.');
    }

?>

