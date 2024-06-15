import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, TouchableOpacity } from 'react-native';

export default function Auth() {
    return (
      <View style={styles.container}>
  
        <View style={styles.authContainer}>
          <Text style={text.h1}>Авторизация</Text>
          <View style={styles.form}>
            <View>
              <Text style={text.p}>Логин</Text>
              <TextInput placeholder='' style={styles.inputForm}/>
            </View>
            <View>
              <Text style={text.p}>Пароль</Text>
              <TextInput placeholder='' style={styles.inputForm}/>
            </View>
            <TouchableOpacity style={styles.button} id='authButton'>
              <Text style={text.pButton}>Войти</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.authTriangle}></View>
  
        <View  style={styles.containerBack}>
          <View style={styles.authContainerBack}></View>
          <View style={styles.authTriangleBack}></View>
        </View>
  
        <View style={styles.containerBack1}>
          <View style={styles.authContainerBack1}></View>
          <View style={styles.authTriangleBack1}></View>
        </View>
  
      </View>
    );
  }

const text = StyleSheet.create({
    h1: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 24,
    },
  
    p: {
      textAlign: 'left',
      color: '#fff',
      fontSize: 16,
    },
  
    pButton: {
      textAlign: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 16,
    },
  });
  
  const styles = StyleSheet.create({
    form: {
      gap: 35,
      padding: 30,
      paddingTop: 40,
      width: 300,
      height: 'auto',
      justifyContent: 'flex-start',
      alignContent: 'center',
    },
  
    inputForm: {
      color: '#fff',
      backgroundColor: '963532',
      padding: 7,
      marginTop: 15,
      width: 250,
      height: 40,
      borderWidth: 2,
      borderColor: '#2B3141',
    },
  
    button: {
      backgroundColor: '#2B3141',
      width: 250,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    container: {
      flex: 1,
      backgroundColor: '#2B3141',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    authContainer: {
      zIndex: 499,
      backgroundColor: '#C02520',
      width: 300,
      height: 400,
      alignItems: 'center',
      padding: 20,
    },
  
    authTriangle: {
      zIndex: 499,
      width: 0,
      height: 0,
      borderLeftWidth: 150,
      borderLeftColor: '#00000000',
      borderRightWidth: 150,
      borderRightColor: '#00000000',
      borderTopWidth: 150,
      borderTopColor: '#C02520',
    },
  
    containerBack: {
      position: 'absolute',
      zIndex: 490,
      paddingTop: 35,
    },
  
    authContainerBack: {
      backgroundColor: '#963532',
      width: 320,
      height: 400,
    },
  
    authTriangleBack: {
      width: 0,
      height: 0,
      borderLeftWidth: 160,
      borderLeftColor: 'transparent',
      borderRightWidth: 160,
      borderRightColor: 'transparent',
      borderTopWidth: 175,
      borderTopColor: '#963532',  
    },
  
    containerBack1: {
      position: 'absolute',
      zIndex: 485,
      paddingTop: 67,
    },
  
    authContainerBack1: {
      backgroundColor: '#3D3333',
      width: 340,
      height: 410,
    },
  
    authTriangleBack1: {
      width: 0,
      height: 0,
      borderLeftWidth: 170,
      borderLeftColor: 'transparent',
      borderRightWidth: 170,
      borderRightColor: 'transparent',
      borderTopWidth: 190,
      borderTopColor: '#3D3333',
    },
  
  
  
  });