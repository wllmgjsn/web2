import { useState } from "react";

interface ClickCounterProps {
  text: string;
}

const ClickCounter = (props: ClickCounterProps) => {
  const [count, setCount] = useState(0);
  const { text } = props;

  const handleCounterClick = () => {
    setCount((count) => count + 1);
  };

  return <button onClick={handleCounterClick}>{text}{count}</button>;
};

export default ClickCounter;