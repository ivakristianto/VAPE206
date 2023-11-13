
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
import { ScrollView, StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Detail = () => {
    return (
      <ScrollView>
        
           <View style={styles.container}>
            <SearchBar/>
                 <View style={itemList.container}>
                  <View style={itemList.content}>
                    <Image style={itemList.image} source={{
                      uri:
                        'https://d1d8o7q9jg8pjk.cloudfront.net/p/lg_6491ad7549575.jpeg',
                    }}
                  ></Image>
                    <View style={itemList.itemDetail}>
                      <View style={{flexDirection:'row', gap:20}}>
                      <Text style={itemList.productName}>Mayday Aio</Text>
                      <Bookmark size="40" color="yellow" variant='Bold '/>
                      <ShoppingCart size="40" color="green" variant='Bold'/>
                      </View>
                        <Text style={itemList.productprice}>Rp. 385.000,00</Text>
                        
                        <View style={itemList.productRating}>
                          <Rank size="32" color="#FF8A65" variant="Bold"/>
                          <Text style={itemList.productRateName}>4,8</Text>
                        </View>
                        <Text style={itemList.productdesc}>
                            Size : 824728mm.
                        </Text>
                        <Text style={itemList.productdesc}>
                        Battery : Single 18650 cell (not included)
                        </Text>
                        <Text style={itemList.productdesc}>
                        Power : 1-80W
                        </Text>
                        <Text style={itemList.productdesc}>
                            Charging : Type-C.
                        </Text>
                    </View>
                  </View>
                 </View>
           </View>
      </ScrollView>
     
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#F5FCFF',
    },
  })

  const header = StyleSheet.create({
    Text: {
      fontSize : 30,
      fontWeight : 'bold',
    },
  })


  const itemList = StyleSheet.create({
    container: {
      flexDirection: 'row',
      marginVertical: 20,
      gap: 20,
    },
    content: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 12,
    },
    image: {
      width: 350,
      height: 350,
      marginHorizontal: 1,
      borderRadius: 5,
      resizeMode: 'contain',
    },
    itemDetail: {
      marginVertical: 20,
      flexDirection: 'column'
    },
    productName: {
      fontWeight: 'bold',
      fontSize : 30,
      marginRight:90,
    },
    productprice : {
      fontSize : 22,
      fontWeight : 'bold',
    },
    productRating: {
      flexDirection: 'row',
    },
    productdesc: {
      fontSize : 18,
    },
    productRateName:{
      marginTop: 8,
      marginLeft:4,
      fontSize : 16,
      fontWeight : 'bold',
      color : "#FF8A65",
    }
  })

export default Detail

