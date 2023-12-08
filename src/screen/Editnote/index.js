import { useNavigation } from "@react-navigation/native";
import React, { useState,useEffect, } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback,
    ActivityIndicator
} from "react-native";
import axios from 'axios';
import { Category, DirectboxSend, Image, Notification, SearchNormal1 } from 'iconsax-react-native'
const Editnote = ({route}) => {
    const {noteId} = route.params;
    const [noteData, setnoteData] = useState({
        judul: '',
        deskripsi:'',
      });
      const handleChange = (key, value) => {
        setnoteData({
          ...noteData,
          [key]: value,
        });
      };
      const navigation = useNavigation();
      const [loading, setLoading] = useState(true);
      useEffect(() => {
        getNoteById();
      }, [noteId]);
    
      const getNoteById = async () => {
        try {
          const response = await axios.get(
            `https://6571b058d61ba6fcc01347bf.mockapi.io/vape206/note/${noteId}`
          );
          setnoteData({
            judul: response.data.judul,
            deskripsi: response.data.deskripsi,
          });
        } catch (error) {
          console.error('Error fetching note by ID:', error.message);
        }
      };
      
      const handleUpdate = async () => {
        setLoading(true);
        try {
          await axios
            .put(`https://6571b058d61ba6fcc01347bf.mockapi.io/vape206/note/${noteId}`, {
              judul: noteData.judul,
              deskripsi: noteData.deskripsi
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          setLoading(false);
          navigation.navigate('Note');
        } catch (e) {
          console.log(e);
        }
      };
      
    return (
        <View style={{flex: 1,}}>
            <ScrollView>
            <View style={textInput.board}>
                    <TextInput
                    placeholder="Judul"
                    value={noteData.judul}
                    onChangeText={(text) => handleChange("judul", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
                <View style={textInput.board}>
                    <TextInput
                    placeholder="deskripsi"
                    value={noteData.deskripsi}
                    onChangeText={(text) => handleChange("deskripsi", text)}
                    placeholderTextColor={'gray'}
                    multiline
                    style={textInput.title}
                    />
                </View>
            </ScrollView>
            <TouchableOpacity onPress={handleUpdate} style={styles.buttonUpload}>
                <DirectboxSend variant="Bold" color="white" size={'30'}/>
            </TouchableOpacity>
            {loading && (
            <View style={styles.loadingOverlay}>
            <ActivityIndicator size="large" color="blue" />
            </View>
            )}
        </View>
    )
}
export default Editnote
const styles = StyleSheet.create({
    image: {
      height: 250,
      width: 'auto',
      borderRadius: 10,
    },
    buttonUpload:{
        backgroundColor: '#3693F4',
        padding: 15, 
        flexDirection: 'row',
        alignItems: 'center', 
        gap: 12, 
        marginHorizontal: 120, 
        borderRadius: 14, 
        position: 'absolute', 
        top: 200,
        left:192
    }
})
const textInput = StyleSheet.create({
    title:{
        fontSize: 14,
    },
    board: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
    },
    boardDescription: {
        padding: 10,
        marginVertical: 10,
        marginTop: -5,
        marginHorizontal:20,
}
})
