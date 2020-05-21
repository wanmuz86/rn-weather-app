import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import WeeklyStack from './weeklyStack';
const BottomNavigator = createBottomTabNavigator(
    {
        Home: { screen: HomeStack },

        WeeklyStack: { screen: WeeklyStack }
    });

export default createAppContainer(BottomNavigator) 