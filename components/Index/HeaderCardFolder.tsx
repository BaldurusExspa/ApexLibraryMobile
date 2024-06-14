import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HeaderCardFolder = () => {
    return (
        <View style={styles.header}>
            <View style={styles.headerWrapper}>
                <Text style={styles.headerText}>Имя пользователя</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#C02520',
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
    },

    headerWrapper: {
        // backgroundColor: '#963532',
        width: '100%',
        alignItems: 'flex-end',
    },

    headerText: {
        color: '#fff',
        fontSize: 18,
        paddingHorizontal: 20,
    },
})

export default HeaderCardFolder;