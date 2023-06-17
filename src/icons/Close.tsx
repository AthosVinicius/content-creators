import React from "react";

import { ISvg } from "@/interfaces/svg";

export default function Close({ color = "#000", width = 800, height = 800 }: ISvg) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 24 24">
            <g>
                <path
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18 18l-6-6m0 0L6 6m6 6l6-6m-6 6l-6 6"
                ></path>
            </g>
        </svg>
    );
}
