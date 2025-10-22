interface FooterProps {
  image?: string;
  children?: React.ReactNode;
}

const Footer = (props: FooterProps) => {
  return (
    <div className="footer">
      {props.image && <img src={props.image} alt="footerimg"></img>}
      {props.children && <div className="footer-content">{props.children}</div>}
    </div>
  );
};

export default Footer;
