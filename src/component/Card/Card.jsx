import style from "./card.module.scss";
import { useState } from "react";

function Card(props) {
  const { tariff, price, speed, speedlimit, titleColor, priceColor } = props;
  const priceParts = price.split(" ");

  const [selected, setSelected] = useState(false);

  function handleEditState() {
    setSelected(!selected);
  }

  return (
    <div
      onClick={handleEditState}
      className={
        selected ? `${style.selected} ${style.wrapper}` : `${style.wrapper}`
      }
    >
      <h3 className={`${style[titleColor]} ${style.title}`}>{tariff}</h3>
      <p className={`${style[priceColor]} ${style.priceContainer}`}>
        {priceParts.map((part, index) => (
          <span
            key={index}
            className={`${style.cardPrice} ${style[`pricePart${index + 1}`]}`}
          >
            {part}
          </span>
        ))}
      </p>
      <p className={style.speed}>{speed}</p>
      <p className={style.speedLimit}>{speedlimit}</p>
    </div>
  );
}

export default Card;
