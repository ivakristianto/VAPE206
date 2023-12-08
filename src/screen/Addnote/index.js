// Import React dan komponen-komponen React Native
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
// Komponen utama aplikasi
const Addnote = () => {
  const [loading, setLoading] = useState(false);
        const [noteData, setnoteData] = useState({
            judul: "",
            deskripsi: "",
        });
        const handleUpload = async () => {
            setLoading(true);
            try {
              await axios.post('https://6571b058d61ba6fcc01347bf.mockapi.io/vape206/note', {
                  judul: noteData.judul,
                  deskripsi: noteData.deskripsi,
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
        const handleChange = (key, value) => {
            setnoteData({
            ...noteData,
            [key]: value,
            });
        };
        const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Judul Note:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan judul catatan"
        value={noteData.judul}
        onChangeText={(text) => handleChange("judul", text)}
        placeholderTextColor={'gray'}
        multiline
      />

      <Text style={styles.label}>Isi Note:</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        placeholder="Masukkan deskripsi catatan"
        value={noteData.deskripsi}
        onChangeText={(text) => handleChange("deskripsi", text)}
        placeholderTextColor={'gray'}
        multiline
      />

      <Button onPress={handleUpload} title="simpan"/>
    </View>
  );
};

// Styles untuk komponen-komponen di atas
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  multilineInput:{
    height:300,
  },
});

export default Addnote;
