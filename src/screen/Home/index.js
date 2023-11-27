import React, { useState } from 'react';
import { View, StyleSheet, ScrollView,Text,TouchableWithoutFeedback} from 'react-native';
import SearchBar from '../../../components/SearchBar';
import Slider from '../../../components/Slider';
import Category from '../../../components/Category';
import HotSale from '../../../components/hotSale';
import Slider1 from '../../assets/images/SLIDER1.jpeg';
import Slider2 from '../../assets/images/SLIDER2.jpeg';
import Slider4 from '../../assets/images/SLIDER4.jpeg';
import { useNavigation } from "@react-navigation/native";
import { SearchNormal1 } from 'iconsax-react-native';
import { HambergerMenu, Wind, HuobiToken, Profile } from 'iconsax-react-native';
export default function Home() {
  const navigation = useNavigation();
  const sliderImages = [Slider1, Slider2, Slider4];
  return (
    <ScrollView style={styles.container}>
      <View>
      <TouchableWithoutFeedback
    onPress={() => navigation.navigate("cari")}
    >
      <View style={styles.bar}>
        <SearchNormal1
          size={18}
          color={'black'}
          variant="Linear"
        />
        <Text style={styles.placeholder}>Search</Text>
        </View>
        </TouchableWithoutFeedback>
        <Slider style={styles.slider} images={sliderImages} />
        <Category/>
        <HotSale/>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
  },
  searchBar: {
    backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  slider: {
    marginTop: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    width:100,
    padding: 10,
  },  
  hotSale: {
    backgroundColor: 'black',
  },
  bar: {
    flexDirection: 'row',
    marginVertical: 10,
    marginBottom: -5,
    padding: 20,
    gap: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    flex: 1,
  },
  placeholder: {
    fontSize: 14,
    color: 'gray',
    lineHeight: 18,
  },
});
