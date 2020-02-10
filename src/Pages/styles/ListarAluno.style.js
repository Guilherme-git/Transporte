import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        flex: 1
    },  
    pesquisar:{
        borderWidth: 1,
        borderColor: '#999',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 10,
        padding: 10,
        color: '#999'
    },
    areaPesquisar:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#04D361',
        height: 50,
        marginLeft: 20,
        marginRight: 20,
        borderRadius:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    textoPesquisar:{
        color: '#FFF',
    },
    areaAtualizar:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        height: 50,
        marginLeft: 20,
        marginRight: 20,
        borderRadius:10,
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    textoAtualizar:{
        color: '#FFF',
    },
    flatList:{
        borderWidth: 1,
        borderColor: '#999',
        margin: 20,
        borderRadius: 10,
        backgroundColor: '#ccc',
    },  
    areaLista:{
        margin: 10,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#999',
        padding: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,

        elevation: 13,
    },
    nomeAluno:{
        fontSize: 20,
        fontWeight: 'bold'
    },
    telefoneAluno:{
        color: '#666'
    },
    instituicaoAluno:{
        color: '#666'
    }
});

export default style;