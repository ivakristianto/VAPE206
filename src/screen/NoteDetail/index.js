import { StyleSheet, Text, View,Animated,TouchableOpacity,ActivityIndicator,Modal } from 'react-native'
import React, {useState, useRef, useEffect} from 'react';
import {ArrowLeft, Like1, Receipt21, Message, Share, More} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const NoteDetail = ({route}) => {
  const {noteId} = route.params;
  const [iconStates, setIconStates] = useState({
    liked: {variant: 'Linear', color: 'gray'},
    bookmarked: {variant: 'Linear', color: 'gray'},
  });
  const [selectedNote, setSelectedNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const actionSheetRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false);
  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };

  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };

  useEffect(() => {
    const subscriber = firestore()
      .collection('note')
      .doc(noteId)
      .onSnapshot(documentSnapshot => {
        const noteData = documentSnapshot.data();
        if (noteData) {
          console.log('Note data: ', noteData);
          setSelectedNote(noteData);
        } else {
          console.log(`Note with ID ${noteId} not found.`);
        }
      });
    setLoading(false);
    return () => subscriber();
  }, [noteId]);

  const navigateEdit = () => {
    closeActionSheet()
    navigation.navigate('Editnote', {noteId})
  }
  const handleDelete = async () => {
    setLoading(true);
    try {
      await firestore()
        .collection('note')
        .doc(noteId)
        .delete()
        .then(() => {
          console.log('note deleted!');
        });
      if (selectedNote?.image) {
        const imageRef = storage().refFromURL(selectedNote?.image);
        await imageRef.delete();
      }
      console.log('note deleted!');
      closeActionSheet();
      setSelectedNote(null);
      setLoading(false)
      navigation.navigate('Note');
    } catch (error) {
      console.error(error);
    }
  };

  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 52);
  const headerY = diffClampY.interpolate({
    inputRange: [0, 52],
    outputRange: [0, -52],
  });
  const bottomBarY = diffClampY.interpolate({
    inputRange: [0, 52],
    outputRange: [0, 52],
  });

  const toggleIcon = iconName => {
    setIconStates(prevStates => ({
      ...prevStates,
      [iconName]: {
        variant: prevStates[iconName].variant === 'Linear' ? 'Bold' : 'Linear',
        color:
          prevStates[iconName].variant === 'Linear'
            ? 'blue'
            : 'gray',
      },
    }));
  };
  return (
<View style={styles.container}>
      <Animated.View
        style={[styles.header, {transform: [{translateY: headerY}]}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color='gray' variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <More
              color='gray'
              variant="Linear"
              style={{transform: [{rotate: '90deg'}]}}
            />
          </TouchableOpacity>
        </View>
      </Animated.View>
      {loading ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <ActivityIndicator size={'large'} color='blue' />
        </View>
      ) : (
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            {useNativeDriver: true},
          )}
          contentContainerStyle={{
            paddingHorizontal: 24,
            paddingTop: 62,
            paddingBottom: 54,
          }}>
          <Text style={styles.title}>{selectedNote?.judul}</Text>
          <Text style={styles.description}>{selectedNote?.deskripsi}</Text>
        </Animated.ScrollView>
      )}
      <Modal
      animationType='fade'
      transparent={true}
      visible={modalVisible}
      style={{}}
      onRequestClose={() =>{
        setModalVisible(!modalVisible);
      }}>
        <View style={{backgroundColor: 'white',position:'absolute', padding: 20,top: 50, paddingHorizontal: 40,borderRadius: 10,left: 210,paddingVertical: 20}}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={navigateEdit}
          >
          <Text
            style={{
              
              color: 'black',
              fontSize: 18,
            }}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={handleDelete}>
          <Text
            style={{
              color: 'black',
              fontSize: 18,
            }}>
            Delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={() => setModalVisible(!modalVisible)}>
          <Text
            style={{
              color: 'red',
              fontSize: 18,
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
}

export default NoteDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: 'white',
  },
  bottomBar: {
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: 'white',
    paddingVertical: 14,
    paddingHorizontal: 60,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 250,
    width: 'auto',
    borderRadius: 10,
  },
  info: {
    color: 'gray',
    fontSize: 12,
  },
  date: {
    color: 'gray',
    fontSize: 15,
  },
  title: {
    fontSize: 24,
    color: 'black',
    marginTop: 10,
  },
  description: {
    color: 'gray',
    fontSize: 18,
    lineHeight: 20,
    marginTop: 15,
  },
})