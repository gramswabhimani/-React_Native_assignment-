import React, { useState } from 'react'
import { Button, FlatList, StyleSheet, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'
import { BBList } from '../components/BBList';
import { MaterialIcons } from '@expo/vector-icons';
import { showFavorite } from '../store/action';

const Home = ({ navigation }) => {

    const showFavr = useSelector(state => state.BBReducer?.showFavorite)
    const characters = useSelector(state => state.BBReducer?.characters)


    React.useLayoutEffect(() => {
        navigation.setOptions({
            title: 'The Breaking Bad',
            headerStyle: {
                backgroundColor: '#181a18',
            },
            headerTitleStyle: {
                color: 'white',
                fontWeight: 'bold',
            },
            headerRight: () => (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <MaterialIcons style={{ marginRight: 15 }} name="search" size={30} color="white" onPress={() => navigation.navigate('SearchScreen')} />
                    <MaterialIcons name="favorite" size={30} color="green" onPress={() => dispatch(showFavorite())} />
                </View>
            )
        })
    }, [navigation]);


    const [selectedId, setSelectedId] = useState(null);
    const dispatch = useDispatch()

    return (
        <View style={{ paddingHorizontal: 10, flex: 1, justifyContent: 'center', backgroundColor: 'black' }}>
            <FlatList
                numColumns={2}
                data={characters}
                renderItem={
                    ({ item, index }) => {

                        if (showFavr && !item?.favorite) {
                            return <></>
                        }

                        return (
                            <BBList item={item} index={index} navigation={navigation} />
                        )
                    }
                }
                keyExtractor={characters => characters?.char_id}
                extraData={selectedId}
            />
        </View >
    )
}


export const styles = StyleSheet.create({
    tinyLogo: {
        width: "90%",
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export default Home
