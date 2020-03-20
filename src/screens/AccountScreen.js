import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

const AccountScreen = ({navigation}) => {
    return (
        <View>
            <Text>Account Screen</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
             <Text> Sign in to your account</Text>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({});

export default AccountScreen;
