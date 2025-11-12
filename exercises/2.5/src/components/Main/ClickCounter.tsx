import { useState } from "react";

interface ClickCounterProps {
  text: string;
  message: string;
}

const ClickCounter = ({ text, message }: ClickCounterProps) => {
  const [count, setCount] = useState(0);
  const [isHoveringCounter, setHover] = useState(false);

  const handleCounterClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div className="counter">
      {count >= 10 && <p>{message}</p>}
      <button
        onClick={handleCounterClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
        {!isHoveringCounter && text}
        {isHoveringCounter && `count is ${count}`}
      </button>
    </div>
  );
};

export default ClickCounter;
