import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity} from 'react-native';
import { ColorSwatch,Drop,Notepad,WeightMeter } from 'iconsax-react-native';

const Category = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={{alignItems: 'center', gap: 6}}>
          <View style={styles.iconContainer}>
              <ColorSwatch size="32" color="white"/>
              </View>
              <Text>Mod</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{alignItems: 'center', gap: 6}}>
          <View style={styles.iconContainer}>
              <Notepad size="32" color="white"/>
              </View>
              <Text>AIO</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{alignItems: 'center', gap: 6}}>
          <View style={styles.iconContainer}>
              <WeightMeter size="32" color="white"/>
              </View>
              <Text>Pod</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{alignItems: 'center', gap: 6}}>
          <View style={styles.iconContainer}>
              <Drop size="32" color="white"/>
              </View>
              <Text>Liquid</Text>
          </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 20,
    justifyContent: 'center',
  },
  iconContainer: {
    backgroundColor: '#2ccce4',
    borderRadius: 21,
    alignItems: 'center',
    width: 67,
    padding: 16,
  },
});

export default Category;
