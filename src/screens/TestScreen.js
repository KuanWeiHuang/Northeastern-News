import React, {useState, useEffect} from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { Firebase, Auth } from '../firebase';


const TestScreen = () => {
    const [result, setResult] = useState(null);
    
    var db = firebase.firestore();

    const getResult = async () => {
        const response = db.collection("news");
        console.log(response);
    };

    useEffect(() => {
        getResult(); 
    }, []);

    // if (!result){
    //     return null;
    // }

    return (
        <View>
            <Text>Test Screen {result}</Text>
        </View>
    );
};

const style = StyleSheet.create({});

export default TestScreen;