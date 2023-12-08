// NoteScreen.js
import axios from 'axios';
import { ScrollView, StyleSheet, Text, View,Image, TouchableOpacity,Animated,ActivityIndicator} from 'react-native'
import { useNavigation,useFocusEffect } from "@react-navigation/native";
import React, { useState,useRef,useCallback } from 'react';
import { Add, Scroll } from 'iconsax-react-native';
import Cat from '../../../components/Cat';

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
    const getDataNote = async () => {
      try {
        const response = await axios.get(
          'https://6571b058d61ba6fcc01347bf.mockapi.io/vape206/note',
        );
        setNoteData(response.data);
        setLoading(false)
      } catch (error) {
          console.error(error);
      }
    };
    const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
        getDataNote()
        setRefreshing(false);
      }, 1500);
    }, []);
  
    useFocusEffect(
      useCallback(() => {
        getDataNote();
  },[])
);
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
        <Add size="50" color="#2ccce4" />
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
    marginTop: 20,
  },
});

export default Note;
