import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const item = () => {
  return (
    <View>
      <Text>Vapor</Text>
    </View>
  )
}

export default item

const styles = StyleSheet.create({
    container : {
        width: 150,
        height: 200,
        borderRadius: 10,
        borderWidth: 10,
        borderColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10 
    }
})