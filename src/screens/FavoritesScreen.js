import React from 'react';
import { Text, View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

const AccountScreen = ({navigation}) => {
    return (
        <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Signin')}>
             <Text> Favorite Screen</Text>
            </TouchableOpacity>
        </View>
    );
};

const style = StyleSheet.create({});

export default AccountScreen;