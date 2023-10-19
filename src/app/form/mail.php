
<?php
if($_SERVER['REQUEST_METHOD'] != 'POST' ){
    header("Location: index.html" );
}

require '../../../phpmailer/PHPMailer.php';
require '../../../phpmailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;

$nombre = $_POST['nombre'];
$empresa = $_POST['empresa'];
$mail = $_POST['mail'];
$mensaje = $_POST['mensaje'];


if( empty(trim($nombre)) ) $nombre = 'anonimo';
if( empty(trim($empresa)) ) $empresa = '';

$body = <<<HTML
    <h1>Contacto desde la web</h1>
    <p>De: $nombre $empresa / $mail</p>
    <h2>Mensaje</h2>
    $mensaje
HTML;

$mailer = new PHPMailer();
$mailer->setFrom( $mail, "$nombre $empresa" );
$mailer->addAddress('info@diagnostico9dejulio.com.ar','9 de julio');
$mailer->Subject = "Mensaje web: $mensaje";
$mailer->msgHTML($body);
$mailer->AltBody = strip_tags($body);
$mailer->CharSet = 'UTF-8';

$rta = $mailer->send( );

//var_dump($rta);
header("Location: form.component.html" );