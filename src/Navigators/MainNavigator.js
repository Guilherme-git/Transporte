import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import TabNavigator from './TabNavigator';
import Perfil from '../Pages/Perfil';

const MainNavigator = createAppContainer(
    createStackNavigator({
        Transporte:{
            screen: TabNavigator
        },
        Perfil:{
            screen: Perfil
        }
    },{
        defaultNavigationOptions:{
            headerStyle:{
                backgroundColor: '#0B0A0D',
            },
            headerBackTitle: ' ',
            headerTintColor: '#04D361'
        }

    })
);

export default MainNavigator;