import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Banner = () => {
    return (
        <View style={styles.banner}>
            <TouchableOpacity style={styles.opacity}>
                <Text style={styles.text}>News</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opacity}>
                <Text style={styles.text}>Events</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opacity}>
                <Text style={styles.text}>Career</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.opacity}>
                <Text style={styles.text}>Health</Text>
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
        marginRight: 10,
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

export default Banner;