import React from "react";

type Props = {
  color: string;
  width?: string;
  height?: string;
};

const TrashIcon = ({ color, height, width }: Props) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 512.000000 512.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g
        transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
        fill={color}
        stroke="none"
      >
        <path
          d="M2121 5104 c-83 -22 -165 -71 -224 -133 -99 -104 -137 -210 -137
-383 l0 -107 -487 -3 -488 -3 -67 -32 c-93 -44 -151 -100 -196 -191 l-37 -76
0 -357 c0 -345 1 -358 21 -385 40 -54 70 -68 150 -72 l74 -4 0 -37 c1 -147
142 -2926 150 -2961 40 -165 196 -313 368 -349 75 -15 2549 -15 2624 0 172 36
328 184 368 349 8 35 149 2814 150 2961 l0 37 74 4 c80 4 110 18 150 72 20 27
21 40 21 385 l0 357 -37 76 c-45 91 -103 147 -196 191 l-67 32 -487 3 -488 3
0 107 c0 173 -38 279 -137 383 -61 64 -141 111 -228 134 -84 21 -793 21 -874
-1z m845 -330 c60 -44 69 -67 72 -185 l4 -109 -481 0 -481 0 0 94 c0 102 9
137 43 175 46 50 56 51 449 48 353 -2 368 -3 394 -23z m1329 -639 c25 -24 25
-24 25 -240 l0 -215 -1760 0 -1760 0 0 215 c0 216 0 216 25 240 l24 25 1711 0
1711 0 24 -25z m-225 -792 c1 -83 -132 -2823 -139 -2870 -11 -73 -32 -106 -87
-133 -40 -20 -57 -20 -1284 -20 -1227 0 -1244 0 -1284 20 -55 27 -76 60 -87
133 -7 47 -140 2787 -139 2870 0 16 79 17 1510 17 1431 0 1510 -1 1510 -17z"
        />
        <path
          d="M1695 3026 c-41 -18 -83 -69 -90 -109 -3 -18 -4 -514 -3 -1104 3
-1064 3 -1072 24 -1099 39 -53 71 -69 134 -69 63 0 95 16 134 69 21 27 21 32
21 1126 0 1094 0 1099 -21 1126 -11 15 -32 37 -46 47 -33 25 -113 32 -153 13z"
        />
        <path
          d="M2495 3026 c-41 -18 -83 -69 -90 -109 -3 -18 -4 -514 -3 -1104 3
-1064 3 -1072 24 -1099 39 -53 71 -69 134 -69 63 0 95 16 134 69 21 27 21 32
21 1126 0 1094 0 1099 -21 1126 -11 15 -32 37 -46 47 -33 25 -113 32 -153 13z"
        />
        <path
          d="M3295 3026 c-41 -18 -83 -69 -90 -109 -3 -18 -4 -514 -3 -1104 3
-1064 3 -1072 24 -1099 39 -53 71 -69 134 -69 63 0 95 16 134 69 21 27 21 32
21 1126 0 1094 0 1099 -21 1126 -11 15 -32 37 -46 47 -33 25 -113 32 -153 13z"
        />
      </g>
    </svg>
  );
};

export default TrashIcon;
