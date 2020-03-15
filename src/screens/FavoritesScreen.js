import React, {useContext} from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import { Context } from '../context/Favorites';

const FavoritesScreen = () => {
    const { state, addFavorites, deleteFavorites } = useContext(Context);
    return(
        <View>
            <FlatList 
                data = {state}
                keyExtractor = {(News) => News.id}
                renderItem = {({ item }) => {
                    return <Text>{item.id}</Text>;
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({});

export default FavoritesScreen;