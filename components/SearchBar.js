import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { SearchNormal1 } from 'iconsax-react-native';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Cari produk..."
      />
      <SearchNormal1 size="20" color="#000"/>
    </View>
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
