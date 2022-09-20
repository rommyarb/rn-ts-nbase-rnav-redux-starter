import React from 'react';
import { Box } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';

const MainPage = () => {
  const navigation: NativeStackNavigationProp<any, any> = useNavigation();

  return (
    <SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Box>Hello there from the first screen!</Box>
    </SafeAreaView>
  );
};

export default MainPage;
