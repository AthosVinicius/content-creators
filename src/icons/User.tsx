import React from "react";

import { ISvg } from "@/interfaces/svg";

export default function User({ color = "#000", width = 800, height = 800 }: ISvg) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
            <g>
                <g fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                </g>
            </g>
        </svg>
    );
}
