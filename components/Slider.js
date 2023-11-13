import React from 'react';
import { ScrollView, Image, StyleSheet } from 'react-native';

const Slider = ({ images }) => {
  return (
    <ScrollView horizontal style={styles.container}>
      {images.map((image, index) => (
        <Image key={index} style={styles.sliderImage} source={image} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 16,
    marginTop: 20,
  },
  sliderImage: {
    width: 250,
    height: 150,
    marginRight: 16,
    borderRadius: 10,
  },
});

export default Slider;
