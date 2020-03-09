import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
import NewsDetail from '../components/NewsDetail';
import Banner from '../components/Banner';
import { withNavigation } from 'react-navigation';

const HomeScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');

    return (
        <View style={{marginLeft:15 , marginRight: 15}}>

            <Banner />

            <Text>{term}</Text>
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('News')}>
                    <NewsDetail 
                        title = "News 1" 
                        imageSource = {require('../../assets/northeastern_university_logo.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('News')}>
                    <NewsDetail 
                        title = "News 2" 
                        imageSource = {require('../../assets/northeastern_university_logo.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('News')}>
                    <NewsDetail 
                        title = "News 3" 
                        imageSource = {require('../../assets/northeastern_university_logo.png')}
                    />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({});

export default withNavigation(HomeScreen);
