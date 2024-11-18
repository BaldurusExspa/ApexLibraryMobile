import React, { useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Auth from './frontend/layouts/Auth/Authorisation';
import Index from './frontend/layouts/Index/Index';

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
