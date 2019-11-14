import React from 'react';
import Svg, {Defs, Path, G, Use, Rect} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const IconMenu = ({tintColor, ...props}) => (
    <Svg width={17} height={14} {...props}>
        <Defs>
            <Path
                d="M1 0h15a1 1 0 010 2H1a1 1 0 110-2zm0 12h15a1 1 0 010 2H1a1 1 0 010-2z"
                id="prefix__a"
            />
        </Defs>
        <G fill={tintColor} fillRule="evenodd">
            <Use
                fill={tintColor}
                xlinkHref="#prefix__a"
                transform="matrix(1 0 0 -1 0 14)"
            />
            <Rect fill={tintColor} x={5} y={6} width={12} height={2} rx={1}/>
        </G>
    </Svg>
);

export default IconMenu;
