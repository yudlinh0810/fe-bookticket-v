import React from "react";
import styled from "../styles/modules/DropDownList.module.scss";
import sortString from "../utils/sortString";

const DropDownList = ({
  list,
  onSelected,
}: {
  list: string[];
  onSelected: (selectLocation: string) => void;
}) => {
  const handleSelect = (event: React.MouseEvent<HTMLLIElement>) => {
    event.preventDefault();
    const valueSelect = event.currentTarget.textContent?.trim();
    console.log("selected", valueSelect);
    if (valueSelect && onSelected) {
      onSelected(valueSelect);
    }
  };

  //
  console.log("1");
  if (list.length > 0) {
    return (
      <ul className={styled["drop-list"]}>
        {sortString(list).map((item, index) => (
          <li className={styled["drop-item"]} key={index} onMouseDown={handleSelect}>
            <p className={styled.content}>{item}</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default DropDownList;
