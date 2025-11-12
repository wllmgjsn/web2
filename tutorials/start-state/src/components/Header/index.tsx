import { useState } from "react";
import "./Header.css";

interface HeaderProps {
    title: string;
    version: number;
  }
  
  const Header = (props: HeaderProps) => {
    const [menuPrinted, setMenuPrinted] = useState(false);
    const { title, version } = props;

    const handleClick = () => {
      console.log(`value of menuPrinted before click : ${menuPrinted}`);
      setMenuPrinted(!menuPrinted);
    }

    return (
      // Ici on attache un event handler au header
      <header onClick={handleClick}> 
        <h1 className="animate__animated animate__bounce">
          {menuPrinted ? `${title}... and rarely do we hate it!` : title}
        </h1>
        <h4>Version: {version}</h4>
      </header>
    );
  };

  export default Header;