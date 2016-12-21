<?php
// Routes

$app->group('/api', function (){

    $this->post('/contact', function ($request, $response, $args){

        $param = $request->getParsedBody();

        $this->mail->setFrom('hello@laurendylam.com', $param['name']);
        $this->mail->addAddress('lamlaurendy@gmail.com', 'Laurendy Lam');
        $this->mail->addReplyTo($param['email'], $param['name']);
        $this->mail->isHTML(false);

        $this->mail->Subject = $param['subject'];
        $this->mail->Body    = htmlspecialchars($param['body']);

        $status = null;
        $message = null;

        if(! $this->mail->send()) {
            $status = 'error';
            $message = 'Message could not be sent. Mailer Error: ' . $this->mail->ErrorInfo;
        } else {
            $status = 'success';
            $message = 'Message sent.';
        }

        return $response->withJson(compact('status', 'message'));
    });

});

$app->get('/[{page:.*}]', function ($request, $response, $args) {
    // Sample log message
    $this->logger->info("IP ".$_SERVER['REMOTE_ADDR']." route");

    // Get built js file
    $files = scandir(__DIR__ . '/../public/build');

    $build = null;
    foreach ($files as $file){
        if(substr($file, -2) === 'js'){
            $build = $file;
        }
    }

    // Render index view
    return $this->renderer->render($response, 'index.phtml', compact('build'));
});
