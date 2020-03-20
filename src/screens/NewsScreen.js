import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import MyNewsDetail from '../components/MyNewsDetail';
import MyBanner from '../components/MyBanner';
import { withNavigation } from 'react-navigation';

const NewsScreen = () => {

    return (
        <View style={{marginLeft:5 , marginRight: 5}}>

            <MyBanner />

            <ScrollView>

                <MyNewsDetail
                        title = "Bloomberge has the money to try a risky social media strategy. Is it good for democracy?"
                        //title = "by Khalida Sarwari"
                        imageSource = {require('../../assets/northeastern_university_logo.png')}
                />
            </ScrollView>
        </View>
    );
};

const style = StyleSheet.create({});

export default NewsScreen;
