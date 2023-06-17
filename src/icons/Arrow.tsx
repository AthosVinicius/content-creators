import React from "react";

import { ISvg } from "@/interfaces/svg";

export default function Arrow({ color = "#000", width = 800, height = 800 }: ISvg) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="-4.5 0 20 20">
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g fill={color} transform="translate(-345 -6679)">
                    <g transform="translate(56 160)">
                        <path d="M299.634 6519.292a1.063 1.063 0 00-1.464 0l-8.563 8.264a1.95 1.95 0 000 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 00.01-1.425l-7.893-7.617a.975.975 0 010-1.414l7.83-7.557a.974.974 0 000-1.413"></path>
                    </g>
                </g>
            </g>
        </svg>
    );
}
