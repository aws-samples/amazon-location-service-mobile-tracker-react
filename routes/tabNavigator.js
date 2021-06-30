import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import MainStack from './mainStack';
import SetupStack from './setupStack';

const TabNavigator = createBottomTabNavigator ({
    Home: {
        screen: MainStack
    },
    Setup: {
        screen: SetupStack
    }
})

export default createAppContainer(TabNavigator);