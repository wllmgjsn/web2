import { useState } from "react";

import "./App.css";
import ColorPickerBox from "./components/ColorPicker";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ColorPickerBox></ColorPickerBox>
    </div>
  );
}

export default App;
