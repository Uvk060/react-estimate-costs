import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";
import React, { useState } from "react";

const CostItem = (props) => {
  const [title, setTitle] = useState(props.description);
  const [price, setPrice] = useState(props.amount);
  const [sale, setSale] = useState(false);

  const changeDescriptionHandler = () => {
    setTitle(title + " - SALE!");
    setPrice(price - 10);
    setSale(true);
  };

  return (
    <Card className="cost-item">
      <CostDate date={props.date} />
      <div className="cost-item__description">
        <h2>{title}</h2>
        <div className="cost-item__price">${price || 0}</div>
      </div>
      {!sale && <button onClick={changeDescriptionHandler}>set sale</button>}
    </Card>
  );
};
export default CostItem;
