import React,{useState,useEffect}  from 'react';
import {Text, FlatList, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import api from '../service/api';
import style from './styles/ListarAluno.style';

const ListarAluno = (props) => {
    const [alunos, setAlunos] = useState([]);
    const [nomeAluno, setNomeAluno] = useState('');

    async function Lista(){
        const resposta = await api.get('/Transporte/Controllers/ListarAlunos.php');
        setAlunos(resposta.data);
        
    }
    
    async function Pesquisar(){
        if(nomeAluno == ''){
            Alert.alert(
                'Atenção',
                'Preencha o campo para pesquisar',
                [ { text: 'Ok' } ],
                {cancelable: false},
              );
        }else{
            const resposta = await api.post('/Transporte/Controllers/PesquisarAluno.php',{
                nomeAluno
            });
            setAlunos(resposta.data);
            setNomeAluno('');
        }
       
    }

    function RenderItem(item, index){
        function AbrirPerfil(index){
            let nome = [...alunos];
            let telefone = [...alunos];
            let instituicao = [...alunos];
            let id = [...alunos]

            props.navigation.navigate('Perfil',{
                nomePerfil: nome[index].nome_aluno,
                telefonePerfil: telefone[index].telefone_aluno,
                instituicaoPerfil: instituicao[index].instituicao_aluno,
                idPerfil: id[index].id_aluno,
            });
           
        }
        return(
            <TouchableOpacity style={style.areaLista} onPress={() => AbrirPerfil(index)}>
                <Text style={style.nomeAluno}>{item.nome_aluno}</Text>
                <Text style={style.telefoneAluno}>Telefone - {item.telefone_aluno}</Text>
                <Text style={style.instituicaoAluno}>Instituição - {item.instituicao_aluno}</Text>
            </TouchableOpacity>
        );
    }


    return(
        <View style={style.container}>
            <TextInput 
                placeholder="Digite o nome do aluno(a)" 
                style={style.pesquisar} 
                value={nomeAluno} 
                onChangeText={text => setNomeAluno(text)}
            />
            <TouchableOpacity style={style.areaPesquisar} onPress={Pesquisar}>
                <Text style={style.textoPesquisar}>Pesquisar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.areaAtualizar} onPress={Lista}>
                <Text style={style.textoAtualizar}>Atualizar</Text>
            </TouchableOpacity>
            
            <FlatList 
                style={style.flatList}
                data={alunos}
                renderItem={ ({item, index}) => RenderItem(item, index)}
                keyExtractor={(item)=>item.id_aluno}
            />
        </View>
    );
}

export default ListarAluno;
