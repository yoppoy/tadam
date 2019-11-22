import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import PropTypes from 'prop-types';
import {Index, Colors, Fonts, Images} from '../../styles';
import CardComponentSection from './CardComponentSection';
import Icon from 'react-native-vector-icons/Ionicons';
import TouchableView from '../Button/TouchableView';
import Collapsible from 'react-native-collapsible';
import CardComponentDash from './CardComponentDash';
import CardStyles from '../../styles/ApplicationStyles/CardStyles';

export default function CardDropdown({title, children, collapsed, style, ...props}) {
    const [isCollapsed, setCollapsed] = useState(collapsed);

    return (
        <View style={[styles.card, style]} {...props}>
            <TouchableView onPress={() => setCollapsed(!isCollapsed)}>
                <View>
                    <View style={styles.header}>
                        <Text>{title}</Text>
                        <Icon name={isCollapsed ? 'ios-arrow-down' : 'ios-arrow-up'}/>
                    </View>
                    <CardComponentDash style={{opacity: isCollapsed ? 0 : 1}}/>
                </View>
            </TouchableView>
            <Collapsible collapsed={isCollapsed} align="center">
                <CardComponentSection>
                    {children}
                </CardComponentSection>
            </Collapsible>
        </View>
    );
}

CardDropdown.defaultProps = {
    collapsed: true,
    style: {}
};

CardDropdown.propTypes = {
    collapsed: PropTypes.bool,
};

const styles = StyleSheet.create({
    card: {
        ...CardStyles.card,
        marginTop: 0,
    },
    header: {
        ...Index.rowSpaceBetween,
        padding: 16,
        alignItems: 'center',
    },
});
