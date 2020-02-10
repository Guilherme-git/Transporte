import React,{useState} from 'react';
import {Text, TextInput,TouchableOpacity, ScrollView, Alert} from 'react-native';
import api from '../service/api';
import style from './styles/CadastrarAluno.style';

const CadastrarAluno = () => {
    const [nomeAluno, setNomeAluno] = useState('');
    const [telefoneAluno, setTelefoneAluno] = useState('');
    const [instituicaoAluno, setInstituicaoAluno] = useState('');

    async function Cadastrar(){
        if (nomeAluno == '', telefoneAluno == '', instituicaoAluno == ''){
            Alert.alert(
                'Atenção',
                'Preencha todos os campos para cadastrar',
                [ { text: 'Ok' } ],
                {cancelable: false},
              );
        }
        else{
            const cadastrar = await api.post('/Transporte/Controllers/CadastrarAluno.php',{
                nomeAluno,
                telefoneAluno,
                instituicaoAluno
            });
            if(cadastrar.data.Message == 'Este aluno ja esta cadastrado'){
                Alert.alert(
                    'Erro',
                    'Este aluno já esta cadastrado',
                        [ { text: 'Ok' } ],
                        {cancelable: false},
                );
            }
            else{
                Alert.alert(
                    'Sucesso',
                    'Cadastro realizado com sucesso',
                        [ { text: 'Ok' } ],
                        {cancelable: false},
                );
            }
            setNomeAluno('');
            setTelefoneAluno('');
            setInstituicaoAluno('');
        }
    }

    return(
        <ScrollView style={style.container}>
          
            <Text style={style.titulo}>Cadastrar Aluno</Text>

            <TextInput 
                style={style.inputNomeAluno} 
                placeholder="Informe o nome do aluno(a)" 
                value={nomeAluno}
                onChangeText={text => setNomeAluno(text)}
            />
            <TextInput 
                style={style.inputTelefoneAluno} 
                keyboardType="numeric" 
                placeholder="Informe o telefone do aluno(a)" 
                value={telefoneAluno} 
                onChangeText={text => setTelefoneAluno(text)}
            />
            <TextInput
                style={style.inputInstituicaoAluno} 
                placeholder="Informe a instituição do aluno(a)" 
                value={instituicaoAluno} 
                onChangeText={text => setInstituicaoAluno(text)} 
            />
            <TouchableOpacity style={style.AreaCadastrar} onPress={Cadastrar}>
                <Text style={style.TextCadastrar}>Cadastrar</Text>
            </TouchableOpacity>
                  
        </ScrollView>
    );
}

export default CadastrarAluno;
