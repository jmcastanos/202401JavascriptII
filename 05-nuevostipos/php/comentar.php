<?php
//Agregar header CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

//Agregar header JSON
header('Content-Type: application/json');


//leer el body enviado por el Fetch en JS
$comentario = $_POST['comentario'];

echo json_encode(['status'=>'ok', 'comentario' => $comentario]);