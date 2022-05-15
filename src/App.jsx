import './App.css';
import React, { useState } from 'react';
import Button from './Components/Button';
import ButtonStyleBar from './Components/ButtonStyleBar';
import Code from './Components/Code';


function App() {
  
  // for button style
  const [bgColor, setBgColor] = useState('#fff');
  const [fontSize, setFontSize] = useState(16);
  const [fontWeight, setFontWeight] = useState(400);
  const [fontColor, setFontColor] = useState('#000')
  const [hPadding, sethPadding] = useState(0);
  const [vPadding, setvPadding] = useState(0);
  const [btnBorder, setBtnBorder] = useState(2);
  const [outlineColor, setOutlineColor] = useState('#fff');
  const [borderRadius, setBorderRadius] = useState(0);
  const [btnText, setBtnText] = useState('Text');
  const [transition, setTransition] = useState(0);
  const [enableOrDisable, setEnableOrDisable] = useState(true);

  // for button hover
  const [bgColorHover, setBgColorHover] = useState('#fff');
  const [fontSizeHover, setFontSizeHover] = useState(16);
  const [fontColorHover, setFontColorHover] = useState('#000')
  const [hPaddingHover, sethPaddingHover] = useState(0);
  const [vPaddingHover, setvPaddingHover] = useState(0);
  const [btnBorderHover, setBtnBorderHover] = useState(2);
  const [outlineColorHover, setOutlineColorHover] = useState('#fff');
  const [borderRadiusHover, setBorderRadiusHover] = useState(0);

  return (
    <div className="App">
      <ButtonStyleBar 
        //for btn style
        bgColor={bgColor}
        setBgColor={setBgColor}
        fontSize={fontSize}
        setFontSize={setFontSize}
        hPadding={hPadding}
        sethPadding={sethPadding}
        vPadding={vPadding}
        setvPadding={setvPadding}
        borderRadius={borderRadius}
        setBorderRadius={setBorderRadius}
        btnText={btnText}
        setBtnText={setBtnText}
        btnBorder={btnBorder}
        setBtnBorder={setBtnBorder}
        outlineColor={outlineColor}
        setOutlineColor={setOutlineColor}
        enableOrDisable={enableOrDisable}
        setEnableOrDisable={setEnableOrDisable}
        fontColor={fontColor}
        setFontColor={setFontColor}
        transition={transition}
        setTransition={setTransition}

        //for btn hover
        bgColorHover={bgColorHover}
        setBgColorHover={setBgColorHover}
        fontSizeHover={fontSizeHover}
        setFontSizeHover={setFontSizeHover}
        hPaddingHover={hPaddingHover}
        sethPaddingHover={sethPaddingHover}
        vPaddingHover={vPaddingHover}
        setvPaddingHover={setvPaddingHover}
        borderRadiusHover={borderRadiusHover}
        setBorderRadiusHover={setBorderRadiusHover}
        btnBorderHover={btnBorderHover}
        setBtnBorderHover={setBtnBorderHover}
        outlineColorHover={outlineColorHover}
        setOutlineColorHover={setOutlineColorHover}
        fontColorHover={fontColorHover}
        setFontColorHover={setFontColorHover}
      />
      <Button 
        //for btn style
        bgColor={bgColor}
        fontSize={fontSize}
        hPadding={hPadding}
        vPadding={vPadding}
        borderRadius={borderRadius}
        btnText={btnText}
        btnBorder={btnBorder}
        outlineColor={outlineColor}
        fontColor={fontColor}
        enableOrDisable={enableOrDisable}
      />
      <Code 
        bgColor={bgColor}
        fontSize={fontSize}
        fontWeight={fontWeight}
        hPadding={hPadding}
        vPadding={vPadding}
        borderRadius={borderRadius}
        btnBorder={btnBorder}
        outlineColor={outlineColor}
        fontColor={fontColor}
        transition={transition}
        enableOrDisable={enableOrDisable}
      />
    </div>
  );
}

export default App;
