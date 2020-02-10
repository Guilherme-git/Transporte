<?php
    header("Access-Control-Allow-Origin: *");
    header(("Access-Control-Allow-Methods: *"));

    require_once __DIR__.'/../Models/Aluno.php';

     function ListarTodosAlunos(){
        if($_SERVER['REQUEST_METHOD'] == 'GET'){
            $aluno = new \Models\Aluno();
            return $aluno->SelecionarTodosAlunos();
        }
    }

    echo json_encode(ListarTodosAlunos());