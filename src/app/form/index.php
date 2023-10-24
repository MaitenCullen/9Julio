<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');

use vendor\phpmailer\phpmailer\src\PHPMailer;
use vendor\phpmailer\phpmailer\src\SMTP;
use vendor\phpmailer\phpmailer\src\Exception;

require 'vendor/autoload.php';

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
// require 'path/to/phpmailer/src/Exception.php';
// require 'path/to/phpmailer/src/PHPMailer.php';
// require 'path/to/phpmailer/src/SMTP.php';


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $empresa = $_POST["empresa"];
    $telefono = $_POST["telefono"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 2;  
    $mail->Debugoutput = 'html';                    //Enable verbose debug output con 0 se desactiva, protocolo seguridad
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.c2172200.ferozo.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'info@diagnostico9dejulio.com.ar';                     //SMTP username
    $mail->Password   = 'Reig87Tar/';                               //SMTP password
    $mail->SMTPSecure = 'ssl';            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('info@diagnostico9dejulio.com.ar', '9deJulio');
    $mail->addAddress('info@diagnostico9dejulio.com.ar');     //Add a recipient
    //$mail->addAddress('ellen@example.com');               //Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');
    //Attachments
    //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Asunto: ' . $empresa;
    $mail->Body = 'Nombre: ' . $nombre . '<br>' .
                  'Teléfono: ' . $telefono . '<br>' .
                  'Mail: ' . $mail->Username . '<br>' .
                  'Mensaje: ' . $mensaje;

    $mail->send();
    echo 'Mensaje enviado correctamente';
    
} catch (Exception $e) {
    echo "Error al enviar: {$mail->ErrorInfo}";
}
}
?>