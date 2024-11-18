import React from 'react';
import { StyleSheet, View, Text, } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>
                &copy;Зеленский Максим
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: '#2B3141',
        width: '100%',
        height: 100,
        borderTopWidth: 1,
        borderTopColor: '#3B4359',
        justifyContent: 'center',
        alignItems: 'center',
    },

    footerText: {
        color: '#fff',
    },
});

export default Footer;