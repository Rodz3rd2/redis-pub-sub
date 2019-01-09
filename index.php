<?php

require __DIR__ . "/vendor/autoload.php";

Predis\Autoloader::register();

$redis = new Predis\Client(array(
    "scheme" => "tcp",
    "host" => "127.0.0.1",
    "port" => 6379
));

$redis->publish("the_channel", "this is a test");