import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import Slider from '../../../components/Slider';
import Category from '../../../components/Category';
import HotSale from '../../../components/hotSale';
import Slider1 from '../../assets/images/SLIDER1.jpeg';
import Slider2 from '../../assets/images/SLIDER2.jpeg';
import Slider4 from '../../assets/images/SLIDER4.jpeg';
import { HambergerMenu, Wind, HuobiToken, Profile } from 'iconsax-react-native';
export default function Home() {
  const [searchText, setSearchText] = useState('');
  const sliderImages = [Slider1, Slider2, Slider4];
  return (
    <ScrollView style={styles.container}>
      <SearchBar
        style={styles.searchBar}
        searchText={searchText}
        onSearchChange={(text) => setSearchText(text)}
      />
      
      <Slider style={styles.slider} images={sliderImages} />
      <Category/>
      <HotSale/>
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
});
