interface HeaderProps {
  image?: string;
  children?: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <div className="header">
      {props.image && <img src={props.image} alt="headerimg" width="100"></img>}
      {props.children && <div className="header-content">{props.children}</div>}
    </div>
  );
};

export default Header;
