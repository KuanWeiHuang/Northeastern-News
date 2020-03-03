import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = ({ imageSource, title }) => {
    return <View>
        <Text style={styles.titleStyle}>{title}</Text>
        <Image style={styles.imageStyle} source = {imageSource} />
    </View>
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        alignSelf: 'center',
        margin: 10
    },
    imageStyle: {
        height: 150,
        width: 420
    }
});

export default ImageDetail;