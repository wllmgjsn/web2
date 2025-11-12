import { ReactElement } from "react";
import DrinkCard from "./DrinkCard";

interface DrinkMenuProps {
  title: string;
  children: ReactElement<typeof DrinkCard> | ReactElement<typeof DrinkCard>[];
}

const DrinkMenu = (props: DrinkMenuProps) => {
  const { title, children } = props;
  return (
    <div className="drink-menu">
      <h4>{title}</h4>
      <div className="drink-items">{children}</div>
    </div>
  );
};

export default DrinkMenu;
