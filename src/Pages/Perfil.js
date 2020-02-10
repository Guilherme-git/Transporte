import React,{useState} from 'react';
import {Text, View, ScrollView, TextInput, TouchableOpacity, Alert} from 'react-native';
import api from '../service/api';
import style from './styles/Perfil.style';

const Perfil = (props) => {
    const [idAluno, setIdAluno] = useState(props.navigation.state.params.idPerfil);
    const [nomeAluno, setNomeAluno] = useState(props.navigation.state.params.nomePerfil);
    const [telefoneAluno, setTelefoneAluno] = useState(props.navigation.state.params.telefonePerfil);
    const [instituicaoAluno, setInstituicaoAluno] = useState(props.navigation.state.params.instituicaoPerfil);

    async function Edtiar(){
        const resposta = await api.put('/Transporte/Controllers/EditarAluno.php',{
            nomeAluno,
            telefoneAluno,
            instituicaoAluno,
            idAluno
        });
        Alert.alert(
            'Sucesso',
            resposta.data.Message,
            [ { text: 'Ok', onPress: () => props.navigation.navigate('Transporte') } ],
            {cancelable: false},
        );     
    }

   async function Excluir(){
        
        const resposta = await api.post('/Transporte/Controllers/ExcluirAluno.php',{
            idAluno
        })
        if(resposta.data == ''){
            Alert.alert(
                'Sucesso',
                'Aluno removido',
                [ { text: 'Ok', onPress: () => props.navigation.navigate('Transporte') } ],
                {cancelable: false},
            );    
        }
        
    }
    return(
        <View style={style.container}>
            <View style={style.cabecalho}>
                <Text style={style.nomeAluno}>{props.navigation.state.params.nomePerfil}</Text>
                <Text style={style.telefoneAluno}>Telefone - {props.navigation.state.params.telefonePerfil}</Text>
                <Text style={style.instituicaoAluno}>Instituição - {props.navigation.state.params.instituicaoPerfil}</Text>
                <TouchableOpacity style={style.areaRemover} onPress={Excluir}>
                    <Text style={style.textoRemover}>Remover aluno</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                <Text style={style.titulo}>Editar perfil</Text>

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
                <TouchableOpacity style={style.AreaEditar} onPress={Edtiar}>
                    <Text style={style.TextEditar}>Editar</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

export default Perfil;
