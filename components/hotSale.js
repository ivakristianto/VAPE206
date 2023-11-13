import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const hotSale = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
      <View style={styles.product}>
        <Image style={styles.image} source={{uri: 'https://www.vapewholesaleglobal.com/cdn/shop/files/OXVA-ONEO-Pod-Kit.jpg?v=1691996573&width=800'}}></Image>
        <Image style={styles.image} source={{uri: 'https://foom.id/cdn/shop/products/rug-1675638227442-3_540x.jpg?v=1683278511'}}></Image>
        <Image style={styles.image} source={{uri: 'https://www.vaporizerbekasi.com/wp-content/uploads/2021/08/HOTCIG-R233.jpg'}}></Image>
        <Image style={styles.image} source={{uri: 'https://foom.id/cdn/shop/files/IcyWatermelon-Front_540x.png?v=1683704447'}}></Image>
        <Image style={styles.image} source={{uri: 'https://www.vapewholesaleglobal.com/cdn/shop/files/OXVA-XLIM-Pro-Pod-Kit_aec2ec72-e8b9-4feb-8dc7-9850570bdb53.jpg?v=1695631071&width=800'}}></Image>
        <Image style={styles.image} source={{uri: 'https://www.vapewholesaleglobal.com/cdn/shop/products/Uwell-Caliburn-AK3-new.jpg?v=1679900675&width=800'}}></Image>
      </View>
      </ScrollView>
      
    </View>
  )
}

export default hotSale

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    product: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    image: {
        width: 170,
        height: 200,
        marginLeft: 20, 
        marginVertical: 20,
        borderRadius: 20,
        resizeMode: 'contain'
    }
})