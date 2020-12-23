<?php
$_POST = json_decode(file_get_contents("php://input"), true);//получение json данных так как нативный js не умеет работать с json
echo var_dump($_POST);//возвразает строку и показывает нам на клиенте
