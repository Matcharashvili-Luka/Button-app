import React from 'react'

function CodeHover({
  //for btn style
  fontSize, hPadding, vPadding, borderRadius, bgColor,  btnBorder, outlineColor, enableOrDisable, fontColor,

  //for btn hover
  bgColorHover, fontSizeHover, hPaddingHover, vPaddingHover, borderRadiusHover, btnBorderHover, outlineColorHover, fontColorHover,
}) {
  return (
    <div>
        <p>{`.button:hover {`}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{`background-color: ${bgColorHover === '#fff' ? `${bgColor}` : `${bgColorHover}`};`}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{`border-radius: ${borderRadiusHover === 0 ? `${borderRadius}` : `${borderRadiusHover}`}px;`}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{`border: ${enableOrDisable === true ? ` none;` : `${btnBorderHover === 2 ? `${btnBorder}` : `${btnBorderHover}`}px solid ${outlineColorHover === `#fff` ? `${outlineColor}` : `${outlineColorHover}`};`}`}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{`padding: ${hPaddingHover === 0 ? `${hPadding}` : `${hPaddingHover}`}px ${vPaddingHover === 0 ? `${vPadding}` : `${vPaddingHover}`}px `}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{`cursor: pointer;`}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{`text-align: center;`}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{`text-decoration: none;`}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{`display: inline-block;`}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{`font-size: ${fontSizeHover === 16 ? `${fontSize}` : `${fontSizeHover}`}px;`}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{`font-weight: 600;`}</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;{`color: ${fontColorHover === '#000' ? `${fontColor}` : `${fontColorHover}`};`}</p>
        <p>{`}`}</p>
    </div>
  )
}

export default CodeHover