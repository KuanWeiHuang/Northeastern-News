import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ImageDetail from '../components/ImageDetail';

const HomeScreen = () => {
    const [term, setTerm] = useState('');

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => console.log('Term was submitted')}
            />
            <Text>{term}</Text>
            <ImageDetail 
                title = "News 1" 
                imageSource = {require('../../assets/northeastern_university_logo.png')}
            />
            <ImageDetail 
                title = "News 2" 
                imageSource = {require('../../assets/northeastern_university_logo.png')}
            />
            <ImageDetail 
                title = "News 3" 
                imageSource = {require('../../assets/northeastern_university_logo.png')}
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default HomeScreen;
