import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Header from '../components/header';
import Main from '../screens/main';

const screens = {
    Home: {
        screen: Main,
        navigationOptions: () => {
            return {
                headerTitle: () => <Header title={'Tracker'} />
            }
        }
    }
}

const MainStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee' }
    }
});

export default MainStack;