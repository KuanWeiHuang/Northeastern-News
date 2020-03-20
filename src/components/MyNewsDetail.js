import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';
import {Feather,Entypo,MaterialIcons} from '@expo/vector-icons';
const MyNewsDetail = ({ imageSource, title}) => {
    return <View>
        <Text style={styles.titleStyle}>{title}</Text>
    
        <Image style={styles.imageStyle} source = {imageSource} />
        <Text style={styles.textStyle}>mynewsdetail</Text>
        
        <Entypo name="heart-outlined" style={styles.iconStyle1} size={25}/>
        <MaterialIcons name="bookmark-border" style={styles.iconStyle1} size={25}/>
        <Feather name="share" style={styles.iconStyle1} size={22}/>
    </View>
};


const styles = StyleSheet.create({
    
    titleStyle: {
        fontSize: 16,
        fontWeight:'bold',
        margin: 1,//5,
        color:'#373737'
        //fontFamily: 'Lucida Grande'
    },
    textStyle: {
        fontSize: 14,
        margin: 1,//5,
        //fontFamily: 'Arial Hebrew'
        color:'#373737'
    },
    imageStyle: {
        height: 172,
        width: 345,
        borderRadius: 10,

    },
    iconStyle1:{
        //fontSize: 35,
        alignSelf: 'flex-end',
        marginHorizontal: 15,
    },
});

export default MyNewsDetail;