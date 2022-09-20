import React from 'react';
import { Box, Button, Text } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';

const FirstScreen = () => {
  const navigation: NativeStackNavigationProp<any, any> = useNavigation();

  const navigateToSecondScreen = () => {
    navigation.push('SecondScreen');
  };

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <Box px="4" mb="4" mt="10">
        <Text textAlign="center" fontSize={18}>
          Hello there from the first screen!
        </Text>
      </Box>
      <Box px="4">
        <Button onPress={navigateToSecondScreen}>Go to SecondScreen</Button>
      </Box>
    </SafeAreaView>
  );
};

export default FirstScreen;
