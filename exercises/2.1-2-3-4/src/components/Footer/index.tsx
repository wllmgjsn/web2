interface FooterProps {
  image: string;
  children: React.ReactNode;
}

const Footer = (props: FooterProps) => {
  return (
    <div className="footer">
      <img src={props.image} alt="footerimg"></img>
      <div className="footer-content">{props.children}</div>
    </div>
  );
};

export default Footer;
