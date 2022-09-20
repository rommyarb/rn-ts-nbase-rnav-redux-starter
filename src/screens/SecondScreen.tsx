import React from 'react';
import { Box, Button, HStack, IconButton, Text, StatusBar } from 'native-base';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const SecondScreen = () => {
  const navigation: NativeStackNavigationProp<any, any> = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <StatusBar />
      <Box safeAreaTop bg="blue.500" />
      <HStack p="1" alignItems="center" space="3">
        <Button roundedLeft={10} roundedRight={0} onPress={goBack}>
          👈 Back
        </Button>
        <Text fontWeight="bold" fontSize={18}>
          SECOND SCREEN
        </Text>
      </HStack>
      <Box px="4" py="10">
        <Text textAlign="center">Yes, this is the second screen</Text>
      </Box>
    </>
  );
};

export default SecondScreen;
