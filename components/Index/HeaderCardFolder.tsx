import React, { useState} from 'react';
import { StyleSheet, Text, View, Button, Pressable, TouchableOpacity } from 'react-native';
import Modal from "react-native-modal";



const HeaderCardFolder = () => {
        const [isModalVisible, setModalVisible] = useState(false);
      
        const toggleModal = () => {
          setModalVisible(!isModalVisible);
        };

    return (
        <View style={styles.header}>
            <View style={styles.headerWrapper}>
                <TouchableOpacity onPress={toggleModal} style={styles.headerButton}>
                    <Text style={styles.headerText}>Имя пользователя</Text>
                </TouchableOpacity>
            </View>

            <Modal isVisible={isModalVisible}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                <View style={styles.modalCard}>
                    <View style={{ width: '100%', }}>
                        <TouchableOpacity onPress={toggleModal} style={styles.modalCloseButton}>
                            <Text style={{ color: '#fff', fontSize: 16, }}>Закрыть</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 50, justifyContent: 'space-between', gap: 50,}}>
                        <Text style={styles.modalText}>Имя пользователя:</Text>
                        <Text style={styles.modalText}>User-1</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 50, justifyContent: 'space-between', gap: 50,}}>
                        <Text style={styles.modalText}>Дата регестрации:</Text>
                        <Text style={styles.modalText}>2024-15-06</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', width: '90%',}}>
                        <TouchableOpacity style={styles.modalButtonExit}>
                            <Text style={styles.modalText}>Выйти из аккаунта</Text>
                        </TouchableOpacity>
                    </View>
                </View>      
              </View>
            </Modal>

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
        paddingTop: 35,
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

    modalCard: {
        backgroundColor: '#3B4359',
        width: '95%',
        height: '95%',
        borderRadius: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
    },

    modalCloseButton: {
        width: 120,
        height: 30,
        backgroundColor: '#C02520',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    modalButtonExit: {
        backgroundColor: '#C02520',
        width: '90%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },

    modalText: {
        color: '#fff',
        fontSize: 16,
    },

    headerButton: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default HeaderCardFolder;