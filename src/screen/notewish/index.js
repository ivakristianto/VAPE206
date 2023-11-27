// Import React dan komponen-komponen React Native
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Komponen utama aplikasi
const NoteWish = () => {
  // State untuk menyimpan nilai input judul dan deskripsi
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Judul:</Text>
      <TextInput
        style={styles.input}
        placeholder="Masukkan judul catatan"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Text style={styles.label}>Deskripsi:</Text>
      <TextInput
        style={[styles.input, styles.multilineInput]}
        placeholder="Masukkan deskripsi catatan"
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      <Button title="simpan"/>
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

export default NoteWish;
