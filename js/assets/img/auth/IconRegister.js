import React from 'react';
import Svg, {G, Rect, Path} from 'react-native-svg';

const IconRegister = props => (
    <Svg width={80} height={80} {...props}>
        <G
            transform="translate(2 2)"
            stroke="#0DCA9D"
            strokeWidth={5}
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <Rect x={15.5} y={0.5} width={45} height={35} rx={1.5}/>
            <Path d="M15.5 5.5L38 18 60.5 5.5M60.5 8l15-7.5c0 27.5-15 25-15 25M15.5 8L.5.5c0 27.5 15 25 15 25M38 50.5v25M50.5 45.5v15M25.5 45.5v15"/>
        </G>
    </Svg>
);

export default IconRegister;
