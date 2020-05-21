import {createStackNavigator} from 'react-navigation-stack'; 
import { createAppContainer } from "react-navigation"; 
import Weekly from '../components/weekly'; 
import WeeklyDetail from '../components/weeklyDetail'; 

const screens = { 
    Weekly: { screen: Weekly },
    WeeklyDetail: {screen:WeeklyDetail}
 } 

const weeklyStack = createStackNavigator(screens); 

export default createAppContainer(weeklyStack)