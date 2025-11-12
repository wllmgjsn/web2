import { useState } from "react"
import './ColorPicker.css'


interface ColorPickerProps{

}

const ColorPickerBox = () => {
    
    const [color, changeColor] = useState('red');
    
    const handleColorChange = () => {
        if(color === 'red'){changeColor('gree')}
    }


    return(
        <div className="colorBox">
            <button onClick={handleColorChange}>

            </button>
        </div>
    )
}

export default ColorPickerBox;