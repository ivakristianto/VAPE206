import React, {useRef,useEffect} from 'react';
import { View, TextInput, StyleSheet,TouchableWithoutFeedback,Animated } from 'react-native';
import { SearchNormal1,Add } from 'iconsax-react-native';
import { useNavigation } from "@react-navigation/native";

const SearchBar = () => {
  const animation = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 400,
      useNativeDriver: false,
    }).start();
  }, []);
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback
    onPress={() => navigation.navigate("cari")}
    >
    <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Cari produk..."
          borderWidth={0}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          autoFocus={true}
        />
        <SearchNormal1 size="20" color="#000"/>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 30,
    paddingHorizontal: 16,
    marginHorizontal: 14,
    marginTop: 20,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  icon: {
    color: '#333',
  },
});

export default SearchBar;
