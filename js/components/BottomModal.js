import React, {useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

export default function BottomModal({style, modalStyle, children, ...props}) {
    const [state, setState] = useState({visible: false});

    return (
        <View>
            <Button title="Show modal" onPress={() => setState({visible: true})}/>
            <Modal
                swipeDirection={['down']}
                backdropTransitionOutTiming={0}
                animationInTiming={100}
                onSwipeComplete={() => setState({visible: false})}
                onBackdropPress={() => setState({visible: false})}
                isVisible={state.visible}
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
    backdropColor: 'rgba(0,0,0,0.54)'
};
