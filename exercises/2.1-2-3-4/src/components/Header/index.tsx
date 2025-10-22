interface HeaderProps {
  image: string;
  children: React.ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <div className="header">
      <img src={props.image} alt="headerimg" width={100}></img>
      <div className="header-content">{props.children}</div>
    </div>
  );
};

export default Header;
