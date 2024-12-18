import React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import HeaderCardFolder from './HeaderCardFolder';
import Card from './Card';
import Footer from './Footer';

const CardFolder = () => {
    return (

        <View style={styles.container}>

            <HeaderCardFolder />

            <View style={styles.scrollContainer}>
                <ScrollView style={styles.scroll}>
                  <View style={{ height: 100, }} />
                  <View style={{ height: 50, backgroundColor: '#3B4359', justifyContent: 'center', alignItems: 'center',}}>
                    <Text style={{ color: '#FFF', }}>Персонажи</Text>
                  </View>
                  <View style={styles.body}>
                      <Card />

                      <Card />

                      <Card />

                      <Card />

                      <Footer />
                  </View>
                </ScrollView>
            </View>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: '#2B3141',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },

      scroll: {
        width: '100%',
        height: '100%',
      },

      scrollContainer: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
      },

      body: {
        marginTop: 20,
        gap: 20,
      },
})

export default CardFolder;