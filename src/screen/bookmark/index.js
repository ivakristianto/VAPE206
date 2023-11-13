
import SearchBar from '../../../components/SearchBar';
import Slider from '../../../components/Slider';
import Category from '../../../components/Category';
import HotSale from '../../../components/hotSale';
import Item from '../../../components/item';
import Slider1 from '../../assets/images/SLIDER1.jpeg';
import Slider2 from '../../assets/images/SLIDER2.jpeg';
import Slider4 from '../../assets/images/SLIDER4.jpeg';
// import { Text } from 'iconsax-react';
import { Rank } from 'iconsax-react-native';
import { ShoppingCart } from 'iconsax-react-native';
import { Bookmark } from 'iconsax-react-native';
import { ScrollView, StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Book, TextBold } from 'iconsax-react';
const Bokkmark = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', padding: 20, backgroundColor: 'white', gap: 6}}>
          <View style={styles.content}>
                      <Image style={styles.image} source={{
                        uri:
                          'https://d1d8o7q9jg8pjk.cloudfront.net/p/lg_6491ad7549575.jpeg',
                      }}
                    ></Image>
          </View>
          <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>Mayday AIO</Text>
              <Text style={{fontSize: 18,}}>Rp. 500.000 -,</Text>
          </View>
          <TouchableOpacity>
            <View style={{marginLeft: 110}}>
                <ShoppingCart size="32" color="#2ccce4"/>
            </View>
          </TouchableOpacity>
          
          </View>
        <View style={{flexDirection: 'row', padding: 20, backgroundColor: 'white', gap: 6}}>
          <View style={styles.content}>
                      <Image style={styles.image} source={{
                        uri:
                        'https://bogorvape.id/storage/products/1692240835dotaio-v2-carbon-fiber-75w-by-dotmod.jpg',
                      }}
                    ></Image>
          </View>
          <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>DotAIO V2</Text>
              <Text style={{fontSize: 18,}}>Rp. 1.250.000 -,</Text>
          </View>
          <TouchableOpacity>
            <View style={{marginLeft: 115}}>
                <ShoppingCart size="32" color="#2ccce4"/>
            </View>
          </TouchableOpacity>
          
          </View>
        <View style={{flexDirection: 'row', padding: 20, backgroundColor: 'white', gap: 6}}>
          <View style={styles.content}>
                      <Image style={styles.image} source={{
                        uri:
                        'https://bogorvape.id/storage/products/1684298968sanaio-boro.jpg',
                      }}
                    ></Image>
          </View>
          <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>SAN AIO</Text>
              <Text style={{fontSize: 18,}}>Rp. 850.000 -,</Text>
          </View>
          <TouchableOpacity>
            <View style={{marginLeft: 130}}>
                <ShoppingCart size="32" color="#2ccce4"/>
            </View>
          </TouchableOpacity>
          
          </View>
        <View style={{flexDirection: 'row', padding: 20, backgroundColor: 'white', gap: 6}}>
          <View style={styles.content}>
                      <Image style={styles.image} source={{
                        uri:
                          'https://d1d8o7q9jg8pjk.cloudfront.net/p/md_647ff8e71f973.jpeg',
                      }}
                    ></Image>
          </View>
          <View style={{flexDirection: 'column'}}>
              <Text style={{fontSize: 24, fontWeight: 'bold'}}>Wakacaw Lavapink</Text>
              <Text style={{fontSize: 18,}}>Rp. 130.000 -,</Text>
          </View>
          <TouchableOpacity>
            <View style={{marginLeft: 35}}>
                <ShoppingCart size="32" color="#2ccce4"/>
            </View>
          </TouchableOpacity>
          </View>
      </View>
    </ScrollView>
  )
}

export default Bokkmark

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    marginHorizontal: 1,
    marginVertical: 1,
    borderRadius: 5,
    resizeMode: 'contain',
    marginRight: 10,
  },
  container: {
    flexDirection: 'column',
    gap: 20,
  },
  content: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  name_product: {
    fontSize: 18,
  },
})

