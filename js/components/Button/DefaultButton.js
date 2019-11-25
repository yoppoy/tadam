import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StyleSheet,
    Text,
} from 'react-native';
import TouchableView from './TouchableView';
import {Index, Fonts} from '../../styles';

const DefaultButton = props => {
    const rippleColor = props.rippleColor
        ? props.rippleColor
        : 'rgba(255, 255, 255, 1)';

    return (
        <TouchableView onPress={props.onPress} style={props.touchStyle} rippleColor={rippleColor}>
            <View style={[styles.main, props.style]}>
                {props.icon && props.icon}
                {props.text ? (
                    <Text style={[styles.text, props.textStyle]}>{props.text}</Text>
                ) : (
                    props.children
                )}
            </View>
        </TouchableView>
    );
};
DefaultButton.defaultProps = {
    style: {},
    textStyle: {},
    touchStyle: {},
};
DefaultButton.propTypes = {
    onPress: PropTypes.func.isRequired,
    text: PropTypes.string,
    rippleColor: PropTypes.string,
    style: PropTypes.object,
    textStyle: PropTypes.object,
    icon: PropTypes.object,
};

const styles = StyleSheet.create({
    ...Index,
    main: {
        flexDirection: 'row',
        padding: 15,
        margin: 5,
        marginBottom: 0,
        backgroundColor: 'black',
        alignItems: 'center',
        borderRadius: 4,
    },
    text: {
        ...Fonts.button,
        fontSize: 16,
        color: 'white',
    },
});

export default DefaultButton;
