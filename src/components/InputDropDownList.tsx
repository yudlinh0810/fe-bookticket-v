import { memo, useRef, useState } from "react";
import styled from "../styles/modules/InputDropDownList.module.scss";
import { removeDiacritics } from "../utils/removeDiacritics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import DropDownList from "./DropDownList";
import triangle from "../styles/modules/Triangle.module.scss";
import Input from "./Input";
import { InputDropDownProps } from "../types/props";

const InputDropDownList: React.FC<InputDropDownProps> = ({
  list,
  contentPlaceholder = "",
  searchTitle = "",
  defaultValue = "",
  onSelected, //  Thêm prop để truyền giá trị ra ngoài
  onChangeValue,
}) => {
  const [value, setValue] = useState<string>(defaultValue);
  const [valueList, setValueList] = useState<string[]>(list);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropDownListRef = useRef<HTMLDivElement>(null);
  const [isDropDownVisible, setIsDropDownVisible] = useState<boolean>(false);

  const handleOnChange = (value: string) => {
    if (onChangeValue) {
      onChangeValue(value);
    }
    const queryFilter = removeDiacritics(value.toLocaleLowerCase());
    setValue(value);
    if (!value) {
      setValueList(list);
    } else {
      const valueFiltered = list.filter((item) => {
        return removeDiacritics(item.toLowerCase()).includes(queryFilter);
      });
      setValueList(valueFiltered);
    }
  };
  //

  const handleSelected = (value: string) => {
    setValue(value);
    if (onSelected) {
      //  If component father function transmission
      onSelected(value);
      setIsDropDownVisible(false);
    }
  };
  //

  const handleClick = () => {
    inputRef.current?.select();
    setIsDropDownVisible(true);
  };
  //

  const handleOnMouseOut = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDropDownVisible) {
      if (
        !containerRef.current?.contains(event.relatedTarget as Node) &&
        !dropDownListRef.current?.contains(event.relatedTarget as Node)
      ) {
        setIsDropDownVisible(false);
        inputRef.current?.blur();
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={styled["input-drop-list"]}
      onMouseOut={handleOnMouseOut}
      onClick={handleClick}
    >
      <div className="d-flex">
        <div className={styled["ic-search"]}>
          <FontAwesomeIcon
            className={styled.ic}
            icon={faLocationDot}
            style={{ color: "#e01010" }}
          />
        </div>
        <div className={styled["search-locations"]}>
          <div className={styled.title}>
            <label>{searchTitle}</label>
          </div>
          <Input
            ref={inputRef}
            type="text"
            valueIn={value}
            defaultValue={value}
            onChange={handleOnChange}
            placeholder={contentPlaceholder}
          />
        </div>
      </div>
      {isDropDownVisible && (
        <span className={triangle["triangle-bottom"] + styled["triangle-bottom"]}></span>
      )}
      {isDropDownVisible && (
        <div ref={dropDownListRef} className={styled["drop-down-list"]}>
          <DropDownList list={valueList} onSelect={handleSelected} />
        </div>
      )}
    </div>
  );
};

export default memo(InputDropDownList);
