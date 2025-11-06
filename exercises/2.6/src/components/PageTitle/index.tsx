interface PageTitleProps {
  title: string;
}

const PageTitleComponent = ({ title }: PageTitleProps) => {
  return <h1>{title}</h1>;
};

export default PageTitleComponent;