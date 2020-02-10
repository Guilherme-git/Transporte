<?php
    header("Access-Control-Allow-Origin: *");
    header(("Access-Control-Allow-Methods: *"));

    require_once __DIR__.'/../Models/Aluno.php';

     function PesquisarAluno(){
         if ($_SERVER['REQUEST_METHOD'] == "POST") {
             $aluno = new \Models\Aluno();
             $dados = json_decode(file_get_contents('php://input'), true);
             return $aluno->PesquisarAluno($dados['nomeAluno']);
         }
    }

    echo json_encode(PesquisarAluno());