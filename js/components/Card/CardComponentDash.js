import Dash from 'react-native-dash';
import React from 'react';

export default function CardComponentDash({style = {}, ...props}) {
    return (
        <Dash
            dashColor={'#cbcbcb'} dashThickness={0.4}
            style={{height: 1, ...style}}
            dashGap={4} dashLength={4}{...props}/>
    );
}
