import React from 'react'
import Svg, { Path } from 'react-native-svg'
/* SVGR has dropped some elements not supported by react-native-svg: title */

const IconCalendar = props => (
    <Svg width={18} height={20} {...props}>
        <Path
            d="M15.667 7.5V5a.833.833 0 00-.834-.833h-1.666V5A.833.833 0 0111.5 5v-.833h-5V5a.833.833 0 01-1.667 0v-.833H3.167A.833.833 0 002.333 5v2.5h13.334zm0 1.667H2.333v7.5c0 .46.373.833.834.833h11.666c.46 0 .834-.373.834-.833v-7.5zM6.5 2.5h5v-.833a.833.833 0 011.667 0V2.5h1.666a2.5 2.5 0 012.5 2.5v11.667a2.5 2.5 0 01-2.5 2.5H3.167a2.5 2.5 0 01-2.5-2.5V5a2.5 2.5 0 012.5-2.5h1.666v-.833a.833.833 0 111.667 0V2.5z"
            fill="#4E586E"
            fillRule="evenodd"
        />
    </Svg>
)

export default IconCalendar
