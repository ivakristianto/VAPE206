import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { fontType, colors } from '../theme';
import {useNavigation} from '@react-navigation/native';
const Cat = ({item}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate('NoteDetail', {noteId: item.id})}>
            <View style={{flexDirection: 'row', gap:15, padding: 30, backgroundColor: 'white', marginHorizontal: 10, borderRadius: 20, marginVertical: 10}}>
                <View>
                    <Text style={{fontSize: 18, color: 'black'}}>{item?.judul}</Text>
                    <Text style={{fontSize: 18,color: 'black'}}>{item.deskripsi}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Cat
const styles = StyleSheet.create({
    image: {
        resizeMode: 'contain',
        width: 120,
        height: 150
    },
    text:{
        fontSize:18
}
})
