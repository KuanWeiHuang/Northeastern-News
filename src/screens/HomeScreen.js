import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import NewsDetail from '../components/NewsDetail';
import Banner from '../components/Banner';
import { withNavigation } from 'react-navigation';
import { Feather } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {

    return (
        <View style={{marginLeft:15 , marginRight: 15}}>
            {/* <Banner /> */}
            <Text style={styles.time}>Mar 19, 2020</Text>
            <ScrollView >
                <TouchableOpacity onPress={() => navigation.navigate('News')}>
                    <NewsDetail 
                        title = "UNSURE WHAT TO DO ABOUT COVID-19? TAKE THIS 60-MINUTE COURSE" 
                        imageSource = {require('../../assets/news3.jpg')}
                    />
                </TouchableOpacity>
                <Text style={styles.time}>Mar 13, 2020</Text>
                <TouchableOpacity onPress={() => navigation.navigate('News')}>
                    <NewsDetail 
                        title = "NORTHEASTERN WILL MOVE TO ONLINE TEACHING FOR STUDENTS AT LONDON, VANCOUVER, AND CHARLOTTE CAMPUSES" 
                        imageSource = {require('../../assets/news2.jpg')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('News')}>
                    <NewsDetail 
                        title = "COMPANIES CAN HELP EMPLOYEES WORKING REMOTELY DURING THE COVID-19 PANDEMIC" 
                        imageSource = {require('../../assets/news1.jpg')}
                    />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => {
            return(
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <Feather name="search" size={30} style={ {marginRight: 10} }/>
                </TouchableOpacity>
            );
        }
    };
};

const styles = StyleSheet.create({
    time:{
        fontSize: 18,
        color: '#373737',
        fontFamily: 'ArialRoundedMTBold',
        marginLeft: 20,
        marginBottom: 5,
        marginTop: 5
    }
});

export default withNavigation(HomeScreen);