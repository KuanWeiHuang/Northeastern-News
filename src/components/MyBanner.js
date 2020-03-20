import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MyBanner = () => {
    return (
        <View style={styles.banner}>    
                <Text style={styles.text}>Feb 28, 2020</Text>
            
            <TouchableOpacity style={styles.opacity}>
                <Text style={styles.text}>Political News</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    banner:{
        height: 44,
        backgroundColor: '#f0f0f0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
        marginRight: 100,
    },
    text: {
        fontSize: 16,
        margin: 11,
        color: '#373737',
        alignSelf: 'center'
    },
    opacity: {
        flex: 1,
    }

});

export default MyBanner;