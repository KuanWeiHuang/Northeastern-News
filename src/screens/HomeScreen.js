import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import SearchBar from '../components/SearchBar';
import NewsDetail from '../components/NewsDetail';
import { withNavigation } from 'react-navigation';

const HomeScreen = ({ navigation }) => {
    const [term, setTerm] = useState('');

    return (
        <>
            <SearchBar 
                term={term} 
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => console.log('Term was submitted')}
            />
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
        </>
    );
};

const styles = StyleSheet.create({});

export default withNavigation(HomeScreen);
