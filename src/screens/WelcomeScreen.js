import React from 'react';
import { Text, View, ScrollView, StyleSheet, Button } from 'react-native';

const WelcomeScreen = ({navigation}) => {
    return (
        <View>
            <Text style={{fontSize :48 }}>Welcome!</Text>
            <Button
              title="Go to login"
              onPress={()=>navigation.navigate('Signin')}
            />
            <Button
              title="Enter as a tourist"
              onPress={()=>navigation.navigate('mainFlow')}
            />
        </View>
    );
};

const style = StyleSheet.create({});

export default WelcomeScreen;
