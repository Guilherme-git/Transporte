<?php
    header("Access-Control-Allow-Origin: *");
    header(("Access-Control-Allow-Methods: *"));

    require_once __DIR__.'/../Models/Aluno.php';

    function EditarAluno(){
        if($_SERVER['REQUEST_METHOD'] == 'PUT'){
            $aluno = new \Models\Aluno();
            $dados = json_decode(file_get_contents('php://input'), true);
            return $aluno->EditarAluno($dados['nomeAluno'], $dados['telefoneAluno'], $dados['instituicaoAluno'], $dados['idAluno']);
        }
    }

    echo json_encode(EditarAluno());

