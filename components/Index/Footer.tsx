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
        paddingTop: 40,
        backgroundColor: '#2B3141',
        width: '100%',
        height: 200,
        borderTopWidth: 1,
        borderTopColor: '#3B4359',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    footerText: {
        color: '#fff',
    },
});

export default Footer;