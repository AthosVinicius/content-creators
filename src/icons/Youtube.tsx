import React from "react";

import { ISvg } from "@/interfaces/svg";

export default function Youtube({ color = "#000", width = 800, height = 800 }: ISvg) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 -3 20 20">
            <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g fill={color} transform="translate(-300 -7442)">
                    <g transform="translate(56 160)">
                        <path d="M251.988 7291.586v-5.612c1.993.938 3.536 1.843 5.36 2.82-1.505.834-3.367 1.77-5.36 2.792m11.103-8.403c-.344-.453-.93-.805-1.553-.922-1.833-.348-13.267-.349-15.099 0-.5.094-.945.32-1.328.673-1.611 1.495-1.106 9.518-.718 10.817.164.562.375.968.64 1.235.343.352.812.594 1.351.703 1.51.312 9.284.486 15.122.047a2.62 2.62 0 001.39-.712c1.49-1.49 1.388-9.962.195-11.841"></path>
                    </g>
                </g>
            </g>
        </svg>
    );
}
