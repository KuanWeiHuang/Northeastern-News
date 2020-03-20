import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const NewsDetailScreen = ({ imageSource, title }) => {
    return <View style={styles.container}>
        <Image style={styles.imageStyle} source = {imageSource} />
        <Text style={styles.titleStyle}>{title}</Text>
    </View>
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        height: 290,
        width: 340,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#f0f0f0',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: 'white',
        marginBottom: 15

    },
    titleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 5,
        fontFamily: 'Arial Hebrew'
    },
    imageStyle: {
        height: 170,
        width: 338,
        borderRadius: 10,

    }
});

export default NewsDetailScreen;
