import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

export default function BottomModal({style, modalStyle, children, visible, ...props}) {

    return (
        <View>
            <Modal
                swipeDirection={['down']}
                backdropTransitionOutTiming={0}
                animationInTiming={100}
                isVisible={visible}
                style={{...styles.modal, ...modalStyle}}
                {...props}>
                <View style={{...styles.view, ...style}}>{children}</View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    modal: {
        margin: 0,
        padding: 0,
        justifyContent: 'flex-end',
    },
    view: {
        padding: 24,
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        backgroundColor: '#202433',
    },
});

BottomModal.defaultProps = {
    style: {},
    modalStyle: {},
    visible: false,
    backdropColor: 'rgba(0,0,0,0.54)',
};
