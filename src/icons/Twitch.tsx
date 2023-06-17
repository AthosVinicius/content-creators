import React from "react";

import { ISvg } from "@/interfaces/svg";

export default function Twitch({ color = "#323232", width = 800, height = 800 }: ISvg) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="-0.5 0 20 20">
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g fill={color} transform="translate(-141 -7399)">
                    <g transform="translate(56 160)">
                        <path d="M97 7249h2v-5h-2v5zm-5 0h2v-5h-2v5zm10 1.307V7241H88v12h4v2.953l2.56-2.953h4.78l2.66-2.693zM98.907 7256h-3.914l-2.606 3H90v-3h-5v-13.52l1.3-3.48H104v12.173L98.907 7256z"></path>
                    </g>
                </g>
            </g>
        </svg>
    );
}
