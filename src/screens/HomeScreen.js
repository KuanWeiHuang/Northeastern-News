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
                <TouchableOpacity onPress={() => navigation.navigate('News1')}>
                    <NewsDetail 
                        title = "‘This Is Like Armageddon’: Bay Area Chefs Respond to the Region-Wide Lockdown" 
                        imageSource = {require('../../assets/News1_HeadPic.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('News2')}>
                    <NewsDetail 
                        title = "COMPANIES CAN HELP EMPLOYEES WORKING REMOTELY DURING THE COVID-19 PANDEMIC" 
                        imageSource = {require('../../assets/News2_Barbara_Larson.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('News3')}>
                    <NewsDetail 
                        title = "NORTHEASTERN WILL MOVE TO ONLINE TEACHING FOR STUDENTS AT LONDON, VANCOUVER, AND CHARLOTTE CAMPUSES" 
                        imageSource = {require('../../assets/News3_london_1400.jpg')}
                    />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({});

export default withNavigation(HomeScreen);
