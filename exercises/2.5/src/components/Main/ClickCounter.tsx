import { useState } from "react";

interface ClickCounterProps {
  text: string;
  message1 : string,
  message2? : string,
  message3? : string
}

const ClickCounter = ({ text, message1, message2, message3 }: ClickCounterProps) => {
  const [count, setCount] = useState(0);
''
  const handleCounterClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div>
      {count >= 10 && message1 && <p>{message1}</p>}
      {count >= 20 && message2 && <p>{message2}</p>}
      {count >= 30 && <p>{message3}</p>}
      <button onClick={handleCounterClick}>{text}{count}</button>
    </div>
  );
};

export default ClickCounter;