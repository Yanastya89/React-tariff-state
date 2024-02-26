import React from "react";
import Card from "../Card/Card";
import data from "../../assets/data/tariff.json";
import style from "./cardList.module.scss";

function CardList() {
  return (
    <div className={style.wrapper}>
      {data.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
}

export default CardList;
