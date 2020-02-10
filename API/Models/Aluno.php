<?php


namespace Models;
require_once __DIR__."/Conexao.php";

class Aluno
{
    private $idAluno;
    private $nomeAluno;
    private $telefoneAluno;
    private $instituicaoAluno;

    public function CadastrarAlunoModel($nomeAluno, $telefoneAluno, $instituicaoAluno){
        global $pdo;
        $this->setNomeAluno($nomeAluno);
        $this->setTelefoneAluno($telefoneAluno);
        $this->setInstituicaoAluno($instituicaoAluno);

        $select = $pdo->prepare("SELECT * FROM aluno WHERE nome_aluno=? AND telefone_aluno=? AND instituicao_aluno=?");
        $select->execute(array($this->getNomeAluno(), $this->getTelefoneAluno(), $this->getInstituicaoAluno()));
        $total = count($select->fetchAll());

        if($total == 0){
            $salvar = $pdo->prepare("INSERT INTO aluno (nome_aluno, telefone_aluno, instituicao_aluno) VALUES (?,?,?)");
            $salvar->execute(array($this->getNomeAluno(), $this->getTelefoneAluno(), $this->getInstituicaoAluno()));

            $select = $pdo->prepare("SELECT id_aluno FROM aluno WHERE nome_aluno=? AND telefone_aluno=? AND instituicao_aluno=?");
            $select->execute(array($this->getNomeAluno(), $this->getTelefoneAluno(), $this->getInstituicaoAluno()));
            $total = count($select->fetchAll());

            if($total > 0){
                $resposta = ['Message' => 'Cadastro realizado com sucesso'];
                return $resposta;
            }
        }else{
            $resposta = ['Message' => 'Este aluno ja esta cadastrado'];
            return $resposta;
        }
    }

    public function SelecionarTodosAlunos(){
        global $pdo;

        $select = $pdo->prepare("SELECT * FROM aluno");
        $select->execute();
        $total = $select->fetchAll();

        return $total;
    }
    
    public function PesquisarAluno($nomeAluno){
        global $pdo;

        $this->setNomeAluno(($nomeAluno));

        $select = $pdo->prepare("SELECT * FROM aluno WHERE nome_aluno LIKE '%".$this->getNomeAluno()."%'");
        $select->execute();
        $total = $select->fetchAll();

        return $total;
    }


    public function EditarAluno($nomeAluno, $telefoneAluno, $instituicaoAluno, $idAluno){
        global $pdo;

        $this->setIdAluno($idAluno);
        $this->setNomeAluno($nomeAluno);
        $this->setTelefoneAluno($telefoneAluno);
        $this->setInstituicaoAluno($instituicaoAluno);

        $editar = $pdo->prepare("UPDATE aluno SET nome_aluno=?, telefone_aluno=?, instituicao_aluno=? WHERE id_aluno=?");
        $editar->execute(array($this->getNomeAluno(), $this->getTelefoneAluno(), $this->getInstituicaoAluno(), $this->getIdAluno()));

        $resposta = ['Message' => 'Aluno editado com sucesso'];
        return $resposta;
    }

    public function ExcluirAluno($idAluno){
        global $pdo;

        $this->setIdAluno($idAluno);

        $deletar = $pdo->prepare("DELETE FROM aluno WHERE id_aluno=?");
        $deletar->execute(array($this->getIdAluno()));

        $select = $pdo->prepare("SELECT * FROM aluno  WHERE id_aluno=?");
        $select->execute(array($this->getIdAluno()));
        $total = $select->fetchAll();

        return $total;
    }








    /**
     * @return mixed
     */
    public function getIdAluno()
    {
        return $this->idAluno;
    }

    /**
     * @param mixed $idAluno
     * @return Aluno
     */
    public function setIdAluno($idAluno)
    {
        $this->idAluno = $idAluno;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getNomeAluno()
    {
        return $this->nomeAluno;
    }

    /**
     * @param mixed $nomeAluno
     * @return Aluno
     */
    public function setNomeAluno($nomeAluno)
    {
        $this->nomeAluno = $nomeAluno;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getTelefoneAluno()
    {
        return $this->telefoneAluno;
    }

    /**
     * @param mixed $telefoneAluno
     * @return Aluno
     */
    public function setTelefoneAluno($telefoneAluno)
    {
        $this->telefoneAluno = $telefoneAluno;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getInstituicaoAluno()
    {
        return $this->instituicaoAluno;
    }

    /**
     * @param mixed $instituicaoAluno
     * @return Aluno
     */
    public function setInstituicaoAluno($instituicaoAluno)
    {
        $this->instituicaoAluno = $instituicaoAluno;
        return $this;
    }



}