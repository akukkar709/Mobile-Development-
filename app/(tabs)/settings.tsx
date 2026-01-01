import {Button , StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'

const setting = () => {

   const [username, SetUsername] = useState("");
    const [randomreponame, SetRandomRepo] = useState("");

    const fetchRepos  = () => {
      console.log(username);
      fetch(`https://api.github.com/users/${username}/repos`)

      .then(response=> response.json())
      
    };

  return (
    <View style={styles.container}> 
    <Text>Check the Settings in the app</Text>

   
    <TextInput
    style={styles.input}
    value={username}
    onChangeText={SetUsername}
     placeholder="Enter your Github username"
    />

    <Button  
    title="Fetch Repos"
    onPress={fetchRepos}
      >
    </Button>
     {/* <Text>Random Repositary  : </Text> */}
    </View>
  )
}

export default setting

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
  },

  input:{
    width: '51%',
    height: 50,
    borderColor: 'black',
    borderWidth: 3,
    marginBottom: 30,
    padding: 3, 
    borderRadius: 30,
    marginTop: 20,
  }
});