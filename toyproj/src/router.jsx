import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Splash from './pages/Splash';
import Home from './pages/Home';
import Search from './pages/Search';
import BottomTab from './components/BottomTab';
import CardInfoPage from './components/CardInfoPage';

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const renderTabbar = props => <BottomTab {...props} />;

const HomePage = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="홈페이지" component={Home} />
      <HomeStack.Screen name="카드정보" component={CardInfoPage} />
    </HomeStack.Navigator>
  );
};

const MainTab = () => {
  return (
    <Tab.Navigator tabBar={renderTabbar} screenOptions={{headerShown: false}}>
      <Tab.Screen name="홈" component={HomePage} />
      <Tab.Screen name="검색" component={Search} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="MainTab" component={MainTab} />
    </Stack.Navigator>
  );
};

export default Router;
