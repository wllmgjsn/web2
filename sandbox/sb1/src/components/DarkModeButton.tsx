import { useState } from "react"

const DarkModeButton = () => {
    
    const [mode, setMode] = useState(false)

    const handleModeChange = () => {
        setMode(!mode);
    }

    return (
        <>
        {mode ? 
        <button onClick={handleModeChange}>Light mode</button> :
        <button onClick={handleModeChange}>Dark mode</button>
        }
        </>
    )
}