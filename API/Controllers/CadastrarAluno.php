<?php
    session_start();
    header("Access-Control-Allow-Origin: *");
    header(("Access-Control-Allow-Methods: *"));

    require_once __DIR__.'/../Models/Aluno.php';


    function CadastrarAlunoController(){
        if ($_SERVER['REQUEST_METHOD'] == "POST") {
            $aluno = new \Models\Aluno();
            $dados = json_decode(file_get_contents('php://input'), true);
            return $aluno->CadastrarAlunoModel($dados['nomeAluno'], $dados['telefoneAluno'], $dados['instituicaoAluno']);
        }
    }

    echo json_encode(CadastrarAlunoController());