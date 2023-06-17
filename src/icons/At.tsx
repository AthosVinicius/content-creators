import React from "react";

import { ISvg } from "@/interfaces/svg";

export default function At({ color = "#323232", width = 800, height = 800 }: ISvg) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="none" viewBox="0 0 24 24">
            <path stroke={color} strokeWidth="2" d="M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            <path stroke={color} strokeLinecap="round" strokeWidth="2" d="M17 19.485A9 9 0 1121 12c0 4-5 4-5 0"></path>
        </svg>
    );
}
