interface DrinkCardProps {
  title: string;
  image: string;
  children: React.ReactNode; // Peut-être tout type de d'élément React
}

const DrinkCard = (props: DrinkCardProps) => {
  return (
    <div className="drink-card">
      <img src={props.image} alt={props.title} className="drink-image" width="50"/>
      <h2>{props.title}</h2>
      <div className="drink-details">{props.children}</div>
      {
      // Les éléments de props.children sont affichés
      }
    </div>
  );
};

export default DrinkCard;
