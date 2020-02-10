<?php
    header("Access-Control-Allow-Origin: *");
    header(("Access-Control-Allow-Methods: *"));

    require_once __DIR__.'/../Models/Aluno.php';

    function ExcluirAluno(){
        if($_SERVER['REQUEST_METHOD'] == 'POST'){
            $aluno = new \Models\Aluno();
            $dados = json_decode(file_get_contents('php://input'), true);
            return $aluno->ExcluirAluno($dados['idAluno']);
        }
    }

    echo json_encode(ExcluirAluno());