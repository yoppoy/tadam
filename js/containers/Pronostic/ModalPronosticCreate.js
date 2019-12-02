import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import BottomModal from '../../components/BottomModal';
import {Colors, Fonts, Index} from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {verticalScale} from 'react-native-size-matters';
import PronosticCreate from './PronosticCreate';
import Modal from 'react-native-modal';
import PronosticPicker from './PronosticPicker';

export default function ModalPronosticCreate({visible, onClose, ...props}) {
    const [state, setState] = React.useState({
        modalPickerVisible: false,
    });

    return (
        <React.Fragment>
            <BottomModal
                visible={visible}
                swipeDirection={!state.modalPickerVisible ? ['down'] : []}
                onSwipeComplete={onClose}
                onBackdropPress={onClose}
                onRequestClose={onClose}
                animationInTiming={300}
                style={{backgroundColor: Colors.grey, padding: 0}}
                backdropColor={'rgba(0,0,0,0.4)'}
            >
                <React.Fragment>
                    <TouchableOpacity onPress={onClose}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>
                                Analyse d'avant match
                            </Text>
                            <Icon name={'ios-arrow-down'} style={{fontSize: verticalScale(16)}}/>
                        </View>
                    </TouchableOpacity>
                    <PronosticCreate
                        openPickerModal={() => setState({...state, modalPickerVisible: true})}
                    />
                    <Modal
                        backdropTransitionOutTiming={0}
                        animationInTiming={100}
                        onRequestClose={() => setState({...state, modalPickerVisible: false})}
                        style={{margin: 0}}
                        useNativeDriver={true}
                        isVisible={state.modalPickerVisible}>
                        <PronosticPicker
                            onSelected={selected => {
                                setState({...state, modalPickerVisible: false});
                                console.log(selected);
                            }}
                            onClose={() => setState({...state, modalPickerVisible: false})}/>
                    </Modal>
                </React.Fragment>
            </BottomModal>
        </React.Fragment>
    );
}

const styles = {
    modalHeader: {
        ...Index.row,
        paddingHorizontal: 24,
        paddingVertical: verticalScale(16, 16),
    },
    modalTitle: {
        flex: 1,
        fontFamily: Fonts.type.AvenirDB,
        fontSize: 14,
        color: Colors.oxfordBlue,
    },
};
