import { NavigationProp } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Text } from 'native-base';
// import { useDispatch, useSelector } from 'react-redux';
// import { settingsSelector } from '../redux/store';

const Settings = ({ navigation }: { navigation: NavigationProp<any, any> }) => {
  // const settings = useSelector(settingsSelector);
  // const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        keyboardShouldPersistTaps="handled">
        <Text>Second Screen</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;
