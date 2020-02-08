import React, {useEffect, useRef} from 'react';
import {
    Text,
    TouchableOpacity,
    View,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    InteractionManager,
} from 'react-native';
import BottomModal from '../../components/BottomModal';
import {Colors, Fonts, Index} from '../../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {verticalScale} from 'react-native-size-matters';
import PronosticCreate from './PronosticCreate';
import Modal from 'react-native-modal';
import PronosticPicker from './PronosticPicker';
import useKeyboard from '../../services/hooks/useKeyboard';

export default function ModalPronosticCreate({visible, onClose, ...props}) {
    const loaded = useRef(false);
    const textInputRef = useRef();
    const [state, setState] = React.useState({
        description: '',
        descriptionFocused: false,
        modalPickerVisible: false,
    });
    const [,keyboardDimiss] = useKeyboard();
    const toggleText = () => {
        if (state.descriptionFocused) {
            setState({...state, descriptionFocused: false});
            keyboardDimiss();
        } else {
            setState({...state, descriptionFocused: true});
            textInputRef.current.focus();
        }
    };

    useEffect(
        React.useCallback(() => {
            const task = InteractionManager.runAfterInteractions(() => {
                loaded.current = true;
            });
            return () => task.cancel();
        }, []),
    );
    return (
        <React.Fragment>
            <BottomModal
                visible={visible}
                swipeDirection={!state.modalPickerVisible ? [] : []}
                onSwipeComplete={onClose}
                onBackdropPress={onClose}
                onRequestClose={onClose}
                animationInTiming={300}
                style={{backgroundColor: Colors.grey, padding: 0}}
                backdropColor={'rgba(0,0,0,0.4)'}
            >
                <React.Fragment>
                    <TouchableOpacity
                        onPress={toggleText}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalTitle}>
                                Analyse d'avant match
                            </Text>
                            <Icon name={'ios-arrow-down'} style={{fontSize: verticalScale(16)}}/>
                        </View>
                    </TouchableOpacity>
                    {state.descriptionFocused && (
                        <View style={styles.inputContainer}>
                            <TextInput
                                ref={ref => {
                                    textInputRef.current = ref;
                                }}
                                multiline={true}
                                numberOfLines={4}
                                onFocus={() => setState({...state, descriptionFocused: true})}
                                onEndEditing={() => setState({...state, descriptionFocused: false})}
                                style={{
                                    fontFamily: Fonts.type.Avenir,
                                    fontSize: 13,
                                    lineHeight: 21,
                                    textAlignVertical: 'top',
                                }}
                                onChangeText={(text) => setState({...state, description: text})}
                                value={state.description.toString()}
                            />
                        </View>
                    )}
                    {!state.descriptionFocused && (
                        <PronosticCreate
                            openPickerModal={() => setState({...state, modalPickerVisible: true})}
                            onClose={onClose}
                        />
                    )}
                    {loaded.current && (
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
                    )}
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
    inputContainer: {
        height: 200,
        backgroundColor: 'white',
        borderRadius: 8,
        margin: 14,
        marginTop: 0,
        padding: 8,
        paddingHorizontal: 16,
    },
};
