import { useState } from "react";
import InputDropDownList from "../components/InputDropDownList";

const HomePage = () => {
  const arr = [
    "Đà Nẵng",
    "Quãng Nam",
    "Quãng Ngãi",
    "Huế",
    "Quãng Bình",
    "Hà Nội",
    "Hồ Chí Minh",
    "Vũng Tàu",
    "Hải Phòng",
    "Cà Mau",
  ];
  const [value, setValue] = useState<string>("");
  const handleSelectLocation = (value: string) => {
    setValue(value);
  };
  const handleChangeValue = (value: string) => {
    setValue(value);
  };
  const handleSearch = () => {
    console.log("2", value);
  };
  return (
    <div className="d-flex justify-content-center">
      <InputDropDownList
        list={arr}
        contentPlaceholder={"Điểm đi"}
        searchTitle={"Nơi xuất phát"}
        defaultValue={"Đà Nẵng"}
        onSelected={handleSelectLocation}
        onChangeValue={handleChangeValue}
      />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default HomePage;
