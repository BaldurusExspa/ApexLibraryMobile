import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Card = () => {
    return (
        <View>
            <TouchableOpacity style={styles.cardBody}>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    cardBody: {
        backgroundColor: '#3B4359',
        width: '90%',
        height: 500,
        marginLeft: 20,
        borderRadius: 20,
    },
});

export default Card;