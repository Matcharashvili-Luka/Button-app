import React from 'react';
import '../Styles/Code.css';
import CodeHover from './CodeHover';

function Code({
    //for btn style
    fontSize, hPadding, vPadding, borderRadius, bgColor,  btnBorder, outlineColor, enableOrDisable, fontColor, transition,

    //for btn hover
    bgColorHover, fontSizeHover, hPaddingHover, vPaddingHover, borderRadiusHover, btnBorderHover, outlineColorHover, fontColorHover,
}) 
{
  return (
    <div className='codeContainer'>
        <div className='codeContainerHeader'>
            <p>Code</p>
        </div>
        <div className='cssCode'>
            <div className='codeHeader'>
                <p>CSS</p>
            </div>
            <div className='actualCode'>
                <p>{`.button {`}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{`background-color: ${bgColor};`}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{`border-radius: ${borderRadius}px;`}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{`border: ${enableOrDisable === true ? ` none;` : `${btnBorder}px solid ${outlineColor};`}`}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{`padding: ${hPadding}px ${vPadding}px;`}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{`cursor: pointer;`}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{`text-align: center;`}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{`text-decoration: none;`}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{`display: inline-block;`}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{`font-size: ${fontSize}px;`}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{`font-weight: 600;`}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{`color: ${fontColor};`}</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;{`transition: ${transition}s;`}</p>
                <p>{`}`}</p>
                <CodeHover 
                    bgColor={bgColor}
                    fontSize={fontSize}
                    hPadding={hPadding}
                    vPadding={vPadding}
                    borderRadius={borderRadius}
                    btnBorder={btnBorder}
                    outlineColor={outlineColor}
                    fontColor={fontColor}
                    transition={transition}
                    
                    bgColorHover={bgColorHover}
                    fontSizeHover={fontSizeHover}
                    hPaddingHover={hPaddingHover}
                    vPaddingHover={vPaddingHover}
                    borderRadiusHover={borderRadiusHover}
                    btnBorderHover={btnBorderHover}
                    outlineColorHover={outlineColorHover}
                    fontColorHover={fontColorHover}
                    enableOrDisable={enableOrDisable}
                />
            </div>
        </div>
    </div>
  )
}

export default Code