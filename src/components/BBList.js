import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { setfavchar } from '../store/action';
import { useDispatch, useSelector } from 'react-redux';

export const BBList = ({ item, index, navigation }) => {
    const dispatch = useDispatch()

    return (
        <View style={{ width: "50%", flexDirection: 'column', padding: 5 }} key={item.char_id}>
            {/* <Button onPress={() => console.log(index)} title="hello" /> */}
            <TouchableOpacity onPress={() => navigation.navigate('characterScreen', {
                item: item
            })}
            >
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: item?.img,
                    }} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5, marginHorizontal: 10, marginBottom: 25 }}>
                <View>
                    <Text style={{ color: 'white', fontFamily: 'RobotoBold' }}>{item.name}</Text>
                    <Text style={{ color: 'white', fontSize: 12, fontFamily: 'RobotoLight' }}>{item?.nickname}</Text>
                </View>
                <MaterialIcons
                    name={item?.favorite ? 'favorite' : "favorite-border"}
                    size={30}
                    color="green"
                    onPress={() => dispatch(setfavchar(index))} />
            </View>
        </View>
    );

};



export const styles = StyleSheet.create({
    tinyLogo: {
        width: "90%",
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
});