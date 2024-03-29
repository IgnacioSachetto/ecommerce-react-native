import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import TabBarIcon from '../components/TabBarIcon';
import colors from '../utils/globals/colors';
import CartStack from './CartStack';
import OrdersStack from './OrdersStack';
import ShopStack from './ShopStack';

const Tab = createBottomTabNavigator();

const MainNavigator = () => {
  return (
        <NavigationContainer>
           <Tab.Navigator
                initialRouteName='ShopStack'
                screenOptions={{
                    headerShown:false,
                    tabBarShowLabel:false,
                    tabBarStyle: styles.tabBar
                }}
           >
                <Tab.Screen 
                    name='ShopStack'
                    component={ShopStack}
                    options={{
                        tabBarIcon: ({focused}) =>
                        <TabBarIcon title="Products" nameIcon="home" focused={focused}/>
                    }}
                />
                <Tab.Screen 
                    name='CartStack' 
                    component={CartStack}
                    options={{
                        tabBarIcon: ({focused}) => 
                        <TabBarIcon title="Cart" nameIcon="shopping-cart" focused={focused}/>
                    }}
                />
                <Tab.Screen 
                    name='OrdersStack' 
                    component={OrdersStack}
                    options={{
                        tabBarIcon: ({focused}) =>
                        <TabBarIcon title="Orders" nameIcon="list" focused={focused}/>
                    }}
                />
           </Tab.Navigator>
        </NavigationContainer>
  )
}

export default MainNavigator;

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: colors.yellowPage,
        height: 80,
        position: "absolute",
        left: 20,
        right: 20,
        bottom: 25,
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingTop: 5,
        borderWidth: 1,
        borderColor: 'black'
    },
});
