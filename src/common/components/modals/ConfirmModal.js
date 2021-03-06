import React, { useEffect, useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import Modal from 'react-native-modal';
import { ThemeContext } from 'react-navigation';
import Theme from "../../../theme";

const ConfirmModal = ({ showModal, title, yes, no, onYes, onClose }) => {
    const [visible, SetVisible] = useState(showModal)
    useEffect(() => {
        SetVisible(showModal)
    }, [showModal])

    return <Modal
        isVisible={visible}
        backdropOpacity={0.33}
        onSwipeComplete={() => onClose()}
        onBackdropPress={() => onClose()}  >
        <View style={[Theme.styles.col_center, styles.modalContent]}>
            <Text style={styles.modalTitle}>{title}</Text>
            <View style={[Theme.styles.row_center, { marginTop: 24, }]}>
                <TouchableOpacity onPress={() => onClose()} style={[Theme.styles.row_center, styles.nobtn]}>
                    <Text style={styles.noTxt}>{no}</Text>
                </TouchableOpacity>
                <View style={{width: 16}}/>
                <TouchableOpacity onPress={() => onYes()} style={[Theme.styles.row_center, styles.yesbtn]}>
                    <Text style={styles.yesTxt}>{yes}</Text>
                </TouchableOpacity>
            </View>
        </View>
    </Modal>
}

const styles = StyleSheet.create({
    modalContent: { width: '100%', paddingHorizontal: 22, paddingVertical: 16, backgroundColor: Theme.colors.white, borderRadius: 15, },
    modalTitle: { fontSize: 16, fontFamily: Theme.fonts.bold, color: Theme.colors.text, },
    yesTxt: { fontSize: 14, fontFamily: Theme.fonts.semiBold, color: Theme.colors.text },
    noTxt: { fontSize: 14, fontFamily: Theme.fonts.semiBold, color: Theme.colors.text },
    yesbtn: { flex:1, backgroundColor: Theme.colors.yellow1, borderRadius: 10, paddingVertical: 6, paddingHorizontal: 40 },
    nobtn: {flex:1, backgroundColor: Theme.colors.white, borderWidth: 1, borderColor: Theme.colors.text, borderRadius: 10, paddingVertical: 6, paddingHorizontal: 40 },
});

export default ConfirmModal;
