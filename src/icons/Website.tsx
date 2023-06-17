import React from "react";

import { ISvg } from "@/interfaces/svg";

export default function Website({ color = "#000", width = 800, height = 800 }: ISvg) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            fill="none"
            stroke={color}
            strokeWidth="3"
            viewBox="0 0 64 64"
        >
            <path d="M39.93 55.72a24.86 24.86 0 1116.93-23.57 37.24 37.24 0 01-.73 6M37.86 51.1A47 47 0 0132 56.7"></path>
            <path d="M32 7a34.14 34.14 0 0111.57 23 34.07 34.07 0 01.09 4.85M32 7a34.09 34.09 0 00-11.69 25.46c0 16.2 7.28 21 11.66 24.24"></path>
            <path d="M10.37 19.9L53.75 19.9"></path>
            <path d="M32 6.99L32 56.7"></path>
            <path d="M11.05 45.48L37.04 45.48"></path>
            <path d="M7.14 32.46L56.86 31.85"></path>
            <path d="M53.57 57L58 52.56l-8-8 4.55-2.91a.38.38 0 00-.12-.7l-15.29-3.58a.39.39 0 00-.46.46L42 53.41a.39.39 0 00.71.13L45.57 49z"></path>
        </svg>
    );
}
