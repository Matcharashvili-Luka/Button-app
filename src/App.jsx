import './App.css';
import Button from './Components/Button';
import ButtonStyleBar from './Components/ButtonStyleBar';
import React, { useState } from 'react';


function App() {
  const [bgColor, setBgColor] = useState('fff');
  const [fontSize, setFontSize] = useState(16);
  const [fontWeight, setFontWeight] = useState(400);
  const [hPadding, sethPadding] = useState(0);
  const [vPadding, setvPadding] = useState(0);
  const [borderRadius, setBorderRadius] = useState(0);
  const [btnText, setBtnText] = useState('Text');
  const [btnBorder, setBtnBorder] = useState(2);
  const [outlineColor, setOutlineColor] = useState('fff');
  const [enableOrDisable, setEnableOrDisable] = useState(true);

  return (
    <div className="App">
      <ButtonStyleBar 
        bgColor={bgColor}
        setBgColor={setBgColor}
        fontSize={fontSize}
        setFontSize={setFontSize}
        fontWeight={fontWeight}
        setFontWeigh={setFontWeight}
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
      />
      <Button 
        bgColor={bgColor}
        fontSize={fontSize}
        fontWeight={fontWeight}
        hPadding={hPadding}
        vPadding={vPadding}
        borderRadius={borderRadius}
        btnText={btnText}
        btnBorder={btnBorder}
        outlineColor={outlineColor}
        enableOrDisable={enableOrDisable}
      />

    </div>
  );
}

export default App;
