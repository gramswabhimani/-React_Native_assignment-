import React, { useState } from 'react';
import { Button, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { CommonActions } from '@react-navigation/routers';

export const CharacterScreen = ({ navigation, route }) => {

    const [item, setitem] = useState()
    const characters = useSelector(state => state.BBReducer?.characters)

    React.useEffect(() => {
        if (route.params?.item) {
            console.log(`item`, route.params?.item)
            setitem(route.params?.item)
        }
    }, [route.params?.post]);

    return (
        <SafeAreaView style={{ flexGrow: 1, backgroundColor: 'black' }}>
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: 'space-evenly',
                }}>
                <ImageBackground source={{ uri: item?.img, }} resizeMode="cover" style={styles.img}>
                    <MaterialIcons name="arrow-back" size={30} color="white"
                        onPress={() => navigation.dispatch(CommonActions.goBack())} />
                    <View style={{ height: 200, width: 160, alignSelf: "center" }}>
                        <Image
                            style={{ height: "100%", width: "100%" }}
                            resizeMode="stretch"
                            source={{
                                uri: item?.img,
                            }} />
                        <View style={{ justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                            <Text style={{ color: 'white', fontSize: 25, fontFamily: 'RobotoBold' }}>{item?.name}</Text>
                            <Text style={{ color: 'white', fontSize: 12, fontFamily: 'RobotoThin' }}>{item?.nickname}</Text>
                        </View>
                    </View>
                    <MaterialIcons name="favorite" size={30} color="green" onPress={() => console.log(`object`)} />
                </ImageBackground>
                <View style={styles.textlayout}>
                    <View style={styles.textitemlayout}>
                        <Text style={styles.boldhead}>Portrayed</Text>
                        <Text style={styles.thintext}>{item?.portrayed}</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", flexDirection: "row", }}>
                        <Text style={{ color: 'white', fontFamily: 'RobotoThin', marginRight: 10 }}>{item?.birthday}</Text>
                        <Feather name="gift" size={12} color='white' />
                    </View>
                </View>
                <View style={styles.textlayout}>
                    <View style={styles.textitemlayout}>
                        <Text style={styles.boldhead}>Occupation</Text>
                        {item?.occupation.map((occup, index) => <Text key={index} style={styles.thintext}>{occup}</Text>)}
                    </View>
                </View>
                <View style={{ flexGrow: 1, marginHorizontal: 10 }}>
                    <View style={styles.textitemlayout}>
                        <Text style={styles.boldhead}>Appeared In</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 20 }}>
                        <FlatList
                            horizontal={true}
                            data={item?.appearance}
                            renderItem={
                                ({ item, index }) =>
                                    <View style={{
                                        height: 32, width: 100,
                                        backgroundColor: "#242424",
                                        borderWidth: 5, alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <Text style={{ ...styles.thintext }}>Season  {item}</Text>
                                    </View>
                            }
                            keyExtractor={item => item}
                        />
                    </View>
                </View>
                <View style={{ flex: 4, marginHorizontal: 10 }}>
                    <Text style={{ color: 'white', fontFamily: 'RobotoBold', fontSize: 25 }}>Other Characters</Text>
                    <FlatList
                        horizontal={true}
                        data={characters}
                        renderItem={
                            ({ item, index }) =>
                                <View style={{
                                    alignItems: 'center', justifyContent: 'center', marginRight: 10
                                }}>
                                    <Image
                                        style={{ height: 200, width: 150, }}
                                        source={{
                                            uri: item?.img,
                                        }} />
                                    <View style={styles.textitemlayout}>
                                        <Text style={styles.boldhead}>Portrayed</Text>
                                        <Text style={styles.thintext}>{item?.portrayed}</Text>
                                    </View>
                                </View>
                        }
                        keyExtractor={characters => characters?.char_id}
                    />
                </View>
            </ScrollView>
        </SafeAreaView >
    )
};


const styles = StyleSheet.create({
    textlayout: {
        flexGrow: 1, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10
    },
    textitemlayout: {
        justifyContent: "center", alignItems: "flex-start"
    },
    boldhead: {
        color: 'white', fontFamily: 'RobotoBold', color: '#18CA75'
    },
    thintext: {
        color: 'white', fontSize: 12, fontFamily: 'RobotoThin'
    },
    img: {
        flexGrow: 6, flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 5
    }

})