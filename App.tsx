import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import Auth from './layouts/Auth/Authorisation';
import Index from './layouts/Index/Index';

export default function App() {
  return (
    <View style={styles.container}>

      <Index />

      {/* <Auth /> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2B3141',
    justifyContent: 'flex-start',
  },
});
