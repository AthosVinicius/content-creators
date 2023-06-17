import React from "react";

import { ISvg } from "@/interfaces/svg";

export default function Save({ color = "#000", width = 800, height = 800 }: ISvg) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 -0.5 21 21">
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g fill={color} transform="translate(-419 -640)">
                    <g transform="translate(56 160)">
                        <path d="M370.219 484c0-.552.47-1 1.05-1 .58 0 1.05.448 1.05 1s-.47 1-1.05 1c-.58 0-1.05-.448-1.05-1zm11.681 13c0 .552-.47 1-1.05 1h-1.05v-4c0-1.105-.94-2-2.1-2h-8.4c-1.16 0-2.1.895-2.1 2v4h-1.05c-.58 0-1.05-.448-1.05-1v-9.956c0-.133.056-.26.153-.353l1.947-1.854V486c0 1.105.94 2 2.1 2h8.4c1.16 0 2.1-.895 2.1-2v-4h1.05c.58 0 1.05.448 1.05 1v14zm-4.2 1h-8.4v-3c0-.552.47-1 1.05-1h6.3c.58 0 1.05.448 1.05 1v3zm-8.4-15.163l.879-.837h7.521v3c0 .552-.47 1-1.05 1h-6.3c-.58 0-1.05-.448-1.05-1v-2.163zM381.9 480h-12.165c-.279 0-.545.105-.743.293l-5.684 5.414a.976.976 0 00-.308.707V498c0 1.105.94 2 2.1 2h16.8c1.16 0 2.1-.895 2.1-2v-16c0-1.105-.94-2-2.1-2z"></path>
                    </g>
                </g>
            </g>
        </svg>
    );
}
