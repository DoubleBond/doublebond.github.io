<?php
// DIC configuration

$container = $app->getContainer();

// view renderer
$container['renderer'] = function ($c) {
    $settings = $c->get('settings')['renderer'];
    return new Slim\Views\PhpRenderer($settings['template_path']);
};

// monolog
$container['logger'] = function ($c) {
    $settings = $c->get('settings')['logger'];
    $logger = new Monolog\Logger($settings['name']);
    $logger->pushProcessor(new Monolog\Processor\UidProcessor());
    $logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], $settings['level']));
    return $logger;
};

$container['mail'] = function ($c){
    $mail = new PHPMailer();
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = getenv('MAIL_HOST');  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = getenv('MAIL_USERNAME');                 // SMTP username
    $mail->Password = getenv('MAIL_PASSWORD');                           // SMTP password
    $mail->SMTPSecure = getenv('MAIL_SECURE');                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = getenv('MAIL_PORT');                                    // TCP port to connect to
    return $mail;
};