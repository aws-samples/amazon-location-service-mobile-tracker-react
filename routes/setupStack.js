import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Header from '../components/header';
import Setup from '../screens/setup';

const screens = {
    Setup: {
        screen: Setup,
        navigationOptions: () => {
            return {
                headerTitle: () => <Header title={'Tracker Setup'} />
            }
        }
    }
}

const SetupStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#444',
        headerStyle: { backgroundColor: '#eee' }
    }
});

export default SetupStack;