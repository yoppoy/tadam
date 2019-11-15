import React from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, Text, Button} from 'react-native';
import {ApplicationStyles} from '../../styles';
import AuthActions from '../../redux/auth-reducer';
import CalendarPicker from '../../components/CalendarPicker';
import BottomModal from '../../components/BottomModal';

const HomeScreen = props => {
    return (
        <View style={styles.centerAlign}>
            <Text>Logged in</Text>
            <Button title='Disconnect' onPress={props.onDisconnected} />
            <BottomModal/>
        </View>
    );
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        onDisconnected: () => dispatch(AuthActions.onDisconnected()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(HomeScreen);

const styles = StyleSheet.create({
    ...ApplicationStyles,
});
