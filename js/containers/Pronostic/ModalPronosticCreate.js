import React, {useRef} from 'react';
import {Text, TouchableOpacity, View, TextInput, KeyboardAvoidingView, Platform} from 'react-native';
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
        description: 'kjfe zkfjkzj ekzjk ezjkf jzekj',
        descriptionFocused: false,
    });

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
                    {
                        /*
                        *   <KeyboardAvoidingView
                        keyboardVerticalOffset={40}
                        behavior={Platform.OS === "android" ? "height" : "padding"}
                        enabled={state.descriptionFocused}
                        *
                        * */}
                        <TouchableOpacity onPress={onClose}>
                            <View style={styles.modalHeader}>
                                <Text style={styles.modalTitle}>
                                    Analyse d'avant match
                                </Text>
                                <Icon name={'ios-arrow-down'} style={{fontSize: verticalScale(16)}}/>
                            </View>
                        </TouchableOpacity>
                        <View style={{
                            height: 100,
                            backgroundColor: 'white',
                            borderRadius: 8,
                            margin: 14,
                            marginTop: 0,
                            padding: 8,
                            paddingHorizontal: 16,
                        }}>
                            <TextInput
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
                                value={state.description}/>
                        </View>
                        <PronosticCreate
                            openPickerModal={() => setState({...state, modalPickerVisible: true})}
                        />
                    {/*  </KeyboardAvoidingView>*/ }
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
