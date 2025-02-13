import React from "react";
import styled from "../styles/modules/DropDownList.module.scss";
import sortString from "../utils/sortString";

const DropDownList = ({
  list,
  onSelect,
}: {
  list: string[];
  onSelect: (selectLocation: string) => void;
}) => {
  const handleSelect = (event: React.MouseEvent<HTMLLIElement>) => {
    const valueSelect = event.currentTarget.textContent;
    if (valueSelect) {
      if (onSelect) {
        onSelect(valueSelect);
      }
    }
  };

  //

  if (list.length > 0) {
    return (
      <ul className={styled["drop-list"]}>
        {sortString(list).map((item, index) => (
          <li className={styled["drop-item"]} key={index} onClick={handleSelect}>
            <p className={styled.content}>{item}</p>
          </li>
        ))}
      </ul>
    );
  }
};

export default DropDownList;
