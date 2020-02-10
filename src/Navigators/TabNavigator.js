import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import ListarAluno from '../Pages/ListarAluno';
import CadastrarAluno from '../Pages/CadastrarAluno'

const TabNavigator = createMaterialTopTabNavigator({
    Alunos:{
        screen: ListarAluno
    },
    Cadastrar:{
        screen: CadastrarAluno
    }
},{
    tabBarOptions:{
        activeTintColor: '#04D361',
        style:{
            backgroundColor: '#0B0A0D'
        }
        
    },
    defaultNavigationOptions:{
       
    }
});

export default TabNavigator;