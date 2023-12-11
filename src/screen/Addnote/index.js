// Import React dan komponen-komponen React Native
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';

// Komponen utama aplikasi
const Addnote = () => {
  const [loading, setLoading] = useState(false);
  const [noteData, setNoteData] = useState({
    judul: "",
    deskripsi: "",
  });

  const handleUpload = async () => {
    setLoading(true);

    try {
      await firestore().collection('note').add({
        judul: noteData.judul,
        deskripsi: noteData.deskripsi,
      });

      setLoading(false);
      console.log('Note ditambahkan!');
      navigation.navigate('Note');
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleChange = (key, value) => {
    setNoteData({
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

      <Button onPress={handleUpload} title="Simpan" />
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
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    color: 'black',
  },
  multilineInput: {
    height: 300,
  },
});

export default Addnote;
