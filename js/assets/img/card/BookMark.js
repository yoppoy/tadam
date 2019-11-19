import React from 'react'
import Svg, { Path } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: title */

const BookMark = props => (
    <Svg width={10} height={14} {...props}>
        <Path
            d="M0 0h10v14l-4.667-3.333L0 14z"
            fill="#D8D8D8"
            fillRule="evenodd"
            opacity={0.559}
        />
    </Svg>
)

export default BookMark
