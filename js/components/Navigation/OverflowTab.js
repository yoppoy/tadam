import * as React from 'react';
import {View, Platform, StyleSheet} from 'react-native';
import {scale, moderateScale} from '../../services/pixelResizer';
import {Colors} from '../../styles';

const OverflowTab = ({icon}) => {
    return (
        <View pointerEvents="box-none" style={styles.circleContainer}>
            <View style={styles.circle}>
                {icon}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    circleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    circle: {
        top: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: moderateScale(70, 70),
        height: moderateScale(70, 70),
        borderRadius: moderateScale(70, 70),
        borderColor: 'white',
        borderWidth: 10,
        marginBottom: Platform.OS === 'android' ? -6 : -3,
        backgroundColor: Colors.green,
    },
});

export default OverflowTab;
