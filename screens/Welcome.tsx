import React from 'react';
import { Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { Button } from 'react-native-elements';

const WelcomeScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  return (
    <View className="flex-1 pt-5 pb-5 bg-white items-center justify-center">
      <Text>Bienvenido!</Text>

      <View className="flex-1">
        <Button title="Login" className="mt-3" onPress={() => navigation.navigate('Login')} />
        <Button title="Registro" type="outline" className="mt-3" onPress={() => navigation.navigate('Registro')} />
      </View>
    </View>
  );
}



export default WelcomeScreen;
