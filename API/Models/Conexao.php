<?php

try {
    $pdo = new PDO("mysql:host=localhost;dbname=transporte","root","");
}catch (PDOException $ex){
    echo "Erro conexao ao banco de dados: ".$ex->getMessage();
}