import React from 'react'
import topbar from "topbar";
const TopLoaderBar = () => {
    topbar.config({
        autoRun      : true,
        barThickness : 4,
        barColors    : {
            '0'      : 'red',
            '.25'    : 'red',
            '.50'    : 'red',
            '.75'    : 'red',
            '1.0'    : 'red'
        },
        shadowBlur   : 10,
        shadowColor  : 'rgba(0,   0,   0,   .6)'
      })
};

export default TopLoaderBar