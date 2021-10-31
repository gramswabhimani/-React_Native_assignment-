import axios from 'axios';
import React, { useState } from 'react';
import { ActivityIndicator, FlatList, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BBList } from '../components/BBList';

export const Search = (props) => {
    const [value, setvalue] = useState()
    const [character, setCharacter] = useState()
    const [loading, setloading] = useState(false)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                value={value}
                onChangeText={async (value) => {
                    setvalue(value);
                    setloading(true)
                    const char = await axios.get(`https://www.breakingbadapi.com/api/characters?name=${value}`);
                    setCharacter(char?.data)
                    setloading(false)
                    console.log(`charachters`, char)
                }}
                placeholder="Search"
                placeholderTextColor="white"
                style={{ height: 40, backgroundColor: '#242424', paddingHorizontal: 20, color: 'white' }}
            />
            {loading ? <ActivityIndicator size="large" color="#00ff00" /> : <FlatList
                numColumns={2}
                data={character}
                renderItem={
                    ({ item, index }) => {
                        return (
                            <BBList item={item} index={index} />
                        )
                    }
                }
                keyExtractor={character => character?.char_id}
            />}
        </SafeAreaView>
    )
};
