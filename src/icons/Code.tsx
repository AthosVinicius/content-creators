import React from "react";

import { ISvg } from "@/interfaces/svg";

export default function Code({ color = "#323232", width = 800, height = 800 }: ISvg) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 -3 19 19">
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g fill={color} transform="translate(-180 -3283)">
                    <g transform="translate(56 160)">
                        <path d="M129.204 3126.419a.997.997 0 000-1.401l-.013-.013a.975.975 0 00-1.388 0l-3.515 3.548a.998.998 0 000 1.402l3.515 3.548a.975.975 0 001.388 0l.013-.013a.997.997 0 000-1.401l-2.114-2.134a.998.998 0 010-1.402l2.114-2.134zm13.508 2.134l-3.515-3.548a.975.975 0 00-1.388 0l-.013.013a.997.997 0 000 1.401l2.115 2.134a.998.998 0 010 1.402l-2.115 2.134a.997.997 0 000 1.401l.013.013a.975.975 0 001.388 0l3.515-3.548a.998.998 0 000-1.402zm-5.903-4.145l-5.062 10.83c-.164.341-.452.762-.823.762h-.02c-.721 0-1.192-.98-.873-1.641l5.033-10.728c.164-.34.772-.606.772-.606V3123c.982 0 1.292.747.973 1.408z"></path>
                    </g>
                </g>
            </g>
        </svg>
    );
}
