import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
import NewsDetailScreen from './NewsDetailScreen';
import { withNavigation } from 'react-navigation';

const HomeScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');

    return (
        <View style={{marginLeft:15 , marginRight: 15}}>

            <Text>{term}</Text>
            <ScrollView>
                <TouchableOpacity onPress={() => navigation.navigate('News')}>
                    <NewsDetailScreen
                        title = "News 1"
                        imageSource = {require('../../assets/northeastern_university_logo.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('News')}>
                    <NewsDetailScreen
                        title = "News 2"
                        imageSource = {require('../../assets/northeastern_university_logo.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('News')}>
                    <NewsDetailScreen
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
