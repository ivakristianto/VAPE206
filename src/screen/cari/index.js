import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../../../components/SearchBar';
import Slider1 from '../../assets/images/SLIDER1.jpeg';
import Slider2 from '../../assets/images/SLIDER2.jpeg';
import Slider4 from '../../assets/images/SLIDER4.jpeg';
export default function Cari() {
  const [searchText, setSearchText] = useState('');
  const sliderImages = [Slider1, Slider2, Slider4];
  return (
    <ScrollView style={styles.container}>
      <SearchBar
        style={styles.searchBar}
        searchText={searchText}
        onSearchChange={(text) => setSearchText(text)}

      />
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
});
