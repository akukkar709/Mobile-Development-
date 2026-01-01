import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

const setting = () => {

   const [username, SetUsername] = useState('')


  return (
    <View style={styles.container}> 
    <Text>Check the Settings in the app</Text>

   
    <TextInput
     placeholder="Enter your Github username"
    />
  
    </View>
  )
}

export default setting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  }
})