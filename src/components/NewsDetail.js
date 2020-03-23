import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';

const NewsDetail = ({ imageSource, title }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.imageStyle} source = {imageSource} />
            <Text style={styles.titleStyle}>{title}</Text>
            <View style={styles.icon}>
                <TouchableOpacity>
                    <Feather name="heart" size={25} style={ {marginRight: 10} }/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="bookmark" size={25} style={ {marginRight: 10} }/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="share" size={25} style={ {marginRight: 10} }/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        flex: 1
    },
    container: {
        alignItems: 'flex-start',
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
        fontSize: 16,
        fontWeight: 'bold',
        color: '#373737',
        marginTop: 12,
        marginLeft:10,
        fontFamily: 'Arial Hebrew',
        flex: 2
    },
    imageStyle: {
        height: 170,
        width: 338,
        borderRadius: 10,
        flex: 4

    }
});

export default NewsDetail;