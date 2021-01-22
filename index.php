<?php
// This is my controller
// turn on error reporting
ini_set('display_error', TRUE);
error_reporting(E_ALL);

// require the autoload file
require_once('vendor/autoload.php');

// create an instance of the base class
// :: base f3 = new base  -- :: instance is a static method of base
$f3 = Base::instance();
$f3->set('DEBUG', 3);

// Define a default route - makes urls clean and intuitive
$f3->route('GET /' , function(){
    echo "Hello world";
    // fat free - taking the view page and rendering it in the browser
    $view = new Template();
    // same as dot notation view.render view->render
    echo $view->render('/views/home.html');
});

// Run fat free ! You must not forget this.
$f3->run();