import {StyleSheet} from 'react-native';


const style = StyleSheet.create({
    container:{
        flex:1,
    },
    cabecalho:{
        backgroundColor: '#ccc',
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
    },
    titulo:{
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20
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
    AreaEditar:{
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
    TextEditar:{
        color: '#FFF'
    },
    textoRemover:{
        color: 'red',
        fontWeight: 'bold'
    }
});

export default style;