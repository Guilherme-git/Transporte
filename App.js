import React from 'react';
import { StatusBar} from 'react-native';

import MainNavigator from './src/Navigators/MainNavigator';

const App = () => {
    return(
        <>
            <MainNavigator />
            <StatusBar  barStyle="light-content" backgroundColor="#0B0A0D"/>
        </>
    );
}

export default App;