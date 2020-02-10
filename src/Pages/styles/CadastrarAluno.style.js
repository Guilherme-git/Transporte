import React from 'react';
import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container:{
        flex:1,
    },
    titulo:{
        textAlign: 'center',
        marginTop: 25,
        fontSize: 18
    },
    inputNomeAluno:{
        borderWidth:1,
        borderColor: '#CCC',
        borderRadius: 10,
        marginTop: 15,
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
        color: '#999',
    },
    inputTelefoneAluno:{
        borderWidth:1,
        borderColor: '#CCC',
        borderRadius: 10,
        marginTop: 5,
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 5,
        color: '#999',
    },
    inputInstituicaoAluno:{
        borderWidth:1,
        borderColor: '#CCC',
        borderRadius: 10,
        marginTop: 5,
        padding: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        color: '#999',
    },
    AreaCadastrar:{
        backgroundColor: '#04D361',
        borderRadius:10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 20
    },
    TextCadastrar:{
        color: '#FFF'
    }
});

export default style;