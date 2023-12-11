// NoteScreen.js
import { ScrollView, StyleSheet, Text, View,Image, TouchableOpacity,Animated,ActivityIndicator} from 'react-native'
import { useNavigation,useFocusEffect } from "@react-navigation/native";
import React, { useState,useRef,useCallback,useEffect } from 'react';
import { Add, Scroll } from 'iconsax-react-native';
import Cat from '../../../components/Cat';
import firestore from '@react-native-firebase/firestore';
const Note = ( ) => {
    const navigation = useNavigation();
    const handleNavigateToNoteDetail = () => {
        navigation.navigate('notedetail');
    };
    const scrollY = useRef(new Animated.Value(0)).current;
    const diffClampY = Animated.diffClamp(scrollY, 0, 142);
    const recentY = diffClampY.interpolate({
      inputRange: [0, 142],
      outputRange: [0, -142],
      extrapolate: 'clamp',
    });
    const [loading, setLoading] = useState(true);
    const [noteData, setNoteData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
  useEffect(( ) => {
    const subscriber = firestore()
      .collection('note')
      .onSnapshot(querySnapshot => {
        const note = [];
        querySnapshot.forEach(documentSnapshot => {
          note.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setNoteData(note);
        setLoading(false);
      });
    return () => subscriber();
  }, []);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      firestore()
        .collection('note')
        .onSnapshot(querySnapshot => {
          const note = [];
          querySnapshot.forEach(documentSnapshot => {
            note.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setNoteData(note);
        });
      setRefreshing(false);
    }, 1500);
},[]);
  return (
    <View>
        <ScrollView>
        <View style={styles.container}>
         {loading ? (
                <ActivityIndicator size={'large'} color={'black'}/>
              ) : (
                noteData.map((item, index) => <Cat item={item} key={index}/>)
              )}
    </View>
    </ScrollView>
    <TouchableOpacity 
      style={styles.noteIconContainer}
      onPress={() => navigation.navigate("Addnote")}
      >
        <Add size="50" color='white' />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
  noteIconContainer: {
    alignItems: 'flex-end',
    marginTop: 600,
    left:300,
    position: 'absolute',
    padding:6,
    backgroundColor:"#2ccce4",
  },
});

export default Note;
