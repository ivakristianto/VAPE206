import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator
} from "react-native";
import firestore from '@react-native-firebase/firestore';
import { DirectboxSend } from 'iconsax-react-native';

const Editnote = ({ route }) => {
  const { noteId } = route.params;
  const [noteData, setNoteData] = useState({
    judul: '',
    deskripsi: '',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscriber = firestore()
      .collection('note')
      .doc(noteId)
      .onSnapshot(documentSnapshot => {
        const noteData = documentSnapshot.data();
        if (noteData) {
          console.log('note data: ', noteData);
          setNoteData({
            judul: noteData.judul,
            deskripsi: noteData.deskripsi,
          });
        } else {
          console.log(`note with ID ${noteId} not found.`);
        }
        setLoading(false);
      });

    return () => subscriber();
  }, [noteId]);

  const handleUpdate = async () => {
    setLoading(true);

    try {
      await firestore().collection('note').doc(noteId).update({
        judul: noteData.judul,
        deskripsi: noteData.deskripsi,
      });

      setLoading(false);
      console.log('Note Updated!');
      navigation.navigate('NoteDetail', { noteId });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={textInput.board}>
          <TextInput
            placeholder="Judul"
            value={noteData.judul}
            onChangeText={(text) => setNoteData({ ...noteData, judul: text })}
            placeholderTextColor={'gray'}
            multiline
            style={textInput.title}
          />
        </View>
        <View style={textInput.board}>
          <TextInput
            placeholder="Deskripsi"
            value={noteData.deskripsi}
            onChangeText={(text) => setNoteData({ ...noteData, deskripsi: text })}
            placeholderTextColor={'gray'}
            multiline
            style={textInput.title}
          />
        </View>
      </ScrollView>
      <TouchableOpacity onPress={handleUpdate} style={styles.buttonUpload}>
        <DirectboxSend variant="Bold" color="white" size={'30'} />
      </TouchableOpacity>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      )}
    </View>
  );
};

export default Editnote;

const styles = StyleSheet.create({
  buttonUpload: {
    backgroundColor: '#3693F4',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginHorizontal: 120,
    borderRadius: 14,
    position: 'absolute',
    top: 200,
    left: 160,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const textInput = StyleSheet.create({
  title: {
    fontSize: 14,
    color: 'black',
  },
  board: {
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    color: 'black',
  },
});
