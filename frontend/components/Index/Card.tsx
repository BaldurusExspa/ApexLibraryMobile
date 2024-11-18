import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Card = () => {
    return (
        <View>
            <TouchableOpacity style={styles.cardBody}>
                <View style={styles.imageView}>
                    <Image source={require('./media/6GQ4lFvJR7LCFtdvlFbiBg.png')} style={styles.image}/>
                </View>
                <View style={styles.textView}>
                    <Text>Бангалор</Text>
                </View>
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
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },

    imageView: {
        width: '100%',
        height: 400,
    },

    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    textView: {
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignContent: 'center',
    },
});

export default Card;