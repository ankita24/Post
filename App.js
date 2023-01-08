import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Post from './components/Post';
import Photos from './components/Photos';
import Profile from './components/Profile';
import PostId from './components/PostId';

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();
Ionicons.loadFont().then();

const App = () => {
  const hideSplashScreen = async () => {
    await SplashScreen.hide();
  };
  useEffect(() => {
    hideSplashScreen();
  }, []);

  const Tabs = () => (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Post') {
            iconName = focused
              ? 'information-circle'
              : 'information-circle-outline';
          } else if (route.name === 'Photos') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'nutrition' : 'nutrition-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Post" component={Post} />
      <Tab.Screen name="Photos" component={Photos} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="postId" component={PostId} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
