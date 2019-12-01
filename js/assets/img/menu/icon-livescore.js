import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {moderateScale} from '../../../services/pixelResizer';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const IconLiveScore = ({tintColor, ...props}) => {
    return (
        <Svg width={22} height={21} {...props}>
            <G fill={tintColor} fillRule="evenodd">
                <Path
                    d="M13.311 4H16a6 6 0 016 6v5a6 6 0 01-6 6H6a6 6 0 01-6-6v-5a6 6 0 016-6h3.276L6.82 1.69A.969.969 0 016.796.302 1.022 1.022 0 018.221.277l2.873 2.702 3.381-1.901a1.012 1.012 0 011.366.365.966.966 0 01-.357 1.336L13.31 4zm-6.54 1.53a5.25 5.25 0 00-5.249 5.319l.046 3.5a5.25 5.25 0 005.25 5.181h8.384a5.25 5.25 0 005.25-5.319l-.046-3.5a5.25 5.25 0 00-5.25-5.18H6.772z"/>
                <Path
                    d="M13.059 15H6.94C6.421 15 6 14.552 6 14s.421-1 .941-1h6.118c.52 0 .941.448.941 1s-.421 1-.941 1zM15.273 12H8.727C8.326 12 8 11.552 8 11s.326-1 .727-1h6.546c.401 0 .727.448.727 1s-.326 1-.727 1z"/>
            </G>
        </Svg>
    );
};

export default IconLiveScore;
