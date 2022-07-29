import { useState } from "react";
import "./CostFilter.css";

const CostFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
  };
  return (
    <div className="cost-filter">
      <div className="cost-filter__control">
        <label> Filter by YEAR </label>
        <select onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
export default CostFilter;
