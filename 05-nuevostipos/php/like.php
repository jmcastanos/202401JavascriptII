<?php
//Agregar header CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

//Agregar header JSON
header('Content-Type: application/json');

$id = $_GET['id'];

//simular error con el 3
if($id==3){
    throw new Exception('Error de servidor');
}

echo json_encode(['id' => $id, 'likes' => 10, 'status' => 'ok']);