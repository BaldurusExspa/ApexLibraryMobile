import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderCardFolder from './HeaderCardFolder';
import BodyCardFolder from './BodyCardFolder';

const CardFolder = () => {
    return (

        <View style={styles.container}>

            <HeaderCardFolder />

            <BodyCardFolder />

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
})

export default CardFolder;