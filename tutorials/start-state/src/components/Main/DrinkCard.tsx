interface DrinkCardProps {
  title: string;
  image: string;
  children: React.ReactNode;
}

const DrinkCard = (props: DrinkCardProps) => {
  const { title, image, children } = props;
  return (
    <div className="drink-card">
      <img src={image} alt={title} className="drink-image" width="50"/>
      <h2>{title}</h2>
      <div className="drink-details">{children}</div>
    </div>
  );
};

export default DrinkCard;
