
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
import {useNavigation} from '@react-navigation/native';

import { ScrollView, StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { TextBold } from 'iconsax-react';

const Katalog = () => {
  const navigation = useNavigation();
  const handleNavigateToDetail = () => {
    navigation.navigate('Detail');
  };

    return (
      <ScrollView>
        
           <View style={styles.container}>
            <SearchBar/>
            <View>
        <Text style={header.Text}>Katalog Device</Text>
        </View>
                 <View style={itemList.container}>
                  
                  <TouchableOpacity  onPress={handleNavigateToDetail}>
                  <View style={itemList.content}>
                    <Image style={itemList.image} source={{
                      uri:
                        'https://d1d8o7q9jg8pjk.cloudfront.net/p/lg_6491ad7549575.jpeg',
                    }}
                  ></Image>
                    <View style={itemList.itemDetail}>
                        <Text style={itemList.productName}>Mayday Aio</Text>
                        <Text style={itemList.productName}>Rp. 385.000,00</Text>
                        
                        <View style={itemList.productRating}>
                          <Rank size="32" color="#FF8A65" variant="Bold"/>
                          <Text style={itemList.productRateName}>4,8</Text>
                        </View>
                        
                    </View>
                    
                  </View>
                  </TouchableOpacity>
                  <View style={itemList.content}>
                    <Image style={itemList.image} source={{
                      uri:
                        'https://bogorvape.id/storage/products/1692240835dotaio-v2-carbon-fiber-75w-by-dotmod.jpg',
                    }}
                  ></Image>
                    <View style={itemList.itemDetail}>
                        <Text style={itemList.productName}>dotmod Aio V2</Text>
                        <Text style={itemList.productName}>Rp. 3.300.000,00</Text>
                        
                        <View style={itemList.productRating}>
                          <Rank size="32" color="#FF8A65" variant="Bold"/>
                          <Text style={itemList.productRateName}>4,1</Text>
                        </View>
                        
                    </View>
                    
                  </View>
                  
                 
                 </View>
                 <View style={itemList.container}>
                  <View style={itemList.content}>
                    <Image style={itemList.image} source={{
                      uri:
                        'https://bogorvape.id/storage/products/1675738301pulse-aio-mini-with-rba-by-vandy-vape.jpg',
                    }}
                  ></Image>
                    <View style={itemList.itemDetail}>
                        <Text style={itemList.productName}>Pulse Aio</Text>
                        <Text style={itemList.productName}>Rp. 800.000,00s</Text>
                        
                        <View style={itemList.productRating}>
                          <Rank size="32" color="#FF8A65" variant="Bold"/>
                          <Text style={itemList.productRateName}>4,6</Text>
                        </View>
                        
                    </View>
                    
                  </View>

                  <View style={itemList.content}>
                    <Image style={itemList.image} source={{
                      uri:
                        'https://bogorvape.id/storage/products/1684298968sanaio-boro.jpg',
                    }}
                  ></Image>
                    <View style={itemList.itemDetail}>
                        <Text style={itemList.productName}>San Aio</Text>
                        <Text style={itemList.productName}>Rp. 900.000,00s</Text>
                        
                        <View style={itemList.productRating}>
                          <Rank size="32" color="#FF8A65" variant="Bold"/>
                          <Text style={itemList.productRateName}>4,4</Text>
                        </View>
                        
                    </View>
                    
                  </View>
                  
                 
                 </View>
                 <View style={itemList.container}>
                  <View style={itemList.content}>
                    <Image style={itemList.image} source={{
                      uri:
                        'https://bogorvape.id/storage/products/1693020079hotcig-r233-yb-rap-mod-only-by-hotcig-official.jpg',
                    }}
                  ></Image>
                    <View style={itemList.itemDetail}>
                        <Text style={itemList.productName}>R-233 Mod Device</Text>
                        <Text style={itemList.productName}>Rp. 700.000,00s</Text>
                        
                        <View style={itemList.productRating}>
                          <Rank size="32" color="#FF8A65" variant="Bold"/>
                          <Text style={itemList.productRateName}>4,2</Text>
                        </View>
                        
                    </View>
                    
                  </View>

                  <View style={itemList.content}>
                    <Image style={itemList.image} source={{
                      uri:
                        'https://bogorvape.id/storage/products/1688357329centaurus-m200-mod.jpg',
                    }}
                  ></Image>
                    <View style={itemList.itemDetail}>
                        <Text style={itemList.productName}>Centaurus M2000 Mod</Text>
                        <Text style={itemList.productName}>Rp. 580.000,00s</Text>
                        
                        <View style={itemList.productRating}>
                          <Rank size="32" color="#FF8A65" variant="Bold"/>
                          <Text style={itemList.productRateName}>4,5</Text>
                        </View>
                        
                    </View>
                    
                  </View>
                  
                 
                 </View>
                 <View style={itemList.container}>
                  <View style={itemList.content}>
                    <Image style={itemList.image} source={{
                      uri:
                        'https://bogorvape.id/storage/products/1688620359oxva-xlim-pro-pod-kit-1000mah-by-oxva.jpg',
                    }}
                  ></Image>
                    <View style={itemList.itemDetail}>
                        <Text style={itemList.productName}>Oxva Slim Pro</Text>
                        <Text style={itemList.productName}>Rp. 310.000,00s</Text>
                        
                        <View style={itemList.productRating}>
                          <Rank size="32" color="#FF8A65" variant="Bold"/>
                          <Text style={itemList.productRateName}>4,2</Text>
                        </View>
                        
                    </View>
                    
                  </View>

                  <View style={itemList.content}>
                    <Image style={itemList.image} source={{
                      uri:
                        'https://www.bogorvape.id/storage/products/1651609104caliburn-gk2.jpg',
                    }}
                  ></Image>
                    <View style={itemList.itemDetail}>
                        <Text style={itemList.productName}>Caliburn Gk2</Text>
                        <Text style={itemList.productName}>Rp. 320.000,00s</Text>
                        
                        <View style={itemList.productRating}>
                          <Rank size="32" color="#FF8A65" variant="Bold"/>
                          <Text style={itemList.productRateName}>4,5</Text>
                        </View>
                        
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
      backgroundColor: '#CCD005',
      borderRadius: 10,
      padding: 12,
    },
    image: {
      width: 150,
      height: 150,
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
      fontSize : 16,
    },
    productRating: {
      flexDirection: 'row',
    },
    productRateName:{
      marginTop: 8,
      marginLeft:4,
      fontSize : 16,
      fontWeight : 'bold',
    }
  })

export default Katalog

