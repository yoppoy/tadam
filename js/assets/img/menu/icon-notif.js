import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const IconNotif = ({tintColor, ...props}) => (
    <Svg width={18} height={20} {...props}>
        <G fill="none" fillRule="evenodd">
            <Path
                d="M9 1a5.333 5.333 0 00-5.333 5.333c0 6.223-2.667 8-2.667 8h16s-2.667-1.777-2.667-8A5.333 5.333 0 009 1z"
                stroke={tintColor}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
            />
            <Path
                d="M9.822 17.343l-.063.094a.878.878 0 01-1.453.097l-.065-.097a.9.9 0 10-1.557.903 2.678 2.678 0 004.632 0 .9.9 0 00-1.494-.997z"
                fill={tintColor}
            />
        </G>
    </Svg>
);

export default IconNotif;
