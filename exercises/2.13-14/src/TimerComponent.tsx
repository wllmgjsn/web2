import { useEffect, useState } from "react"


const TimerComponent = () => {

    const [message, setMessage] = useState("");
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setMessage("Temps écoulé")
        }, 3000);
        
        return () => clearTimeout(timer);
    })

    return (
        <div>
            <p>{message}</p>
        </div>
    )
}

export default TimerComponent;