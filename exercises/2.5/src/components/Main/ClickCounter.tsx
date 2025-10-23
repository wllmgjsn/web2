import { useState } from "react";

interface ClickCounterProps {
  text: string;
  message : string
}

const ClickCounter = (props: ClickCounterProps) => {
  const [count, setCount] = useState(0);
  const { text, message } = props;

  const handleCounterClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      <button onClick={handleCounterClick}>{text}{count}</button>
      {count >= 10 && <p>{message}</p>}
    </div>
  );
};

export default ClickCounter;