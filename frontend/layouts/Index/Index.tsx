import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardFolder from '../../components/Index/CardFolder';

const Index = () => {
    return (
        <View style={styles.container}>

            <CardFolder />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2B3141',
        alignItems: 'center',
        justifyContent: 'center',
      },
})

export default Index;