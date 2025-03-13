import { useState } from "react";
import SearchTrip from "../components/SearchTrip";
import RadioGroup from "../components/RadioGroup";
// import Trip from "../components/Trip";

// interface Trip {
//   id: string;
//   departure: string;
//   destination: string;
//   day_departure: string;
//   price: number;
// }

const SearchTripPage: React.FC = () => {
  // const [listTrip, setListTrip] = useState<Trip[]>([]);
  const contentArrange = [
    { number: 4, content: "Giá tăng dần" },
    { number: 5, content: "Giá giảm dần" },
  ];
  const [selectArrange, setSelectArrange] = useState<number>(0);

  // const handleSearchTrip = (data: { departure: string; destination: string; day_departure: string }) => {
  //   console.log('data', data)
  // };

  const handleRadioChange = (number: number) => {
    setSelectArrange((prev) => {
      console.log("value-radio old:", prev);
      console.log("value-radio new:", number);
      return (prev = number);
    });
  };

  return (
    <div style={{ width: "100wh" }}>
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <SearchTrip />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="search-trip-container">
          <div className="search-trip-container-r">
            <div className="t">
              <RadioGroup
                contentArr={contentArrange}
                selectedValue={selectArrange}
                onChange={handleRadioChange}
              />
            </div>
            <div className="b">
              <div className="filter">Lọc</div>
            </div>
          </div>
          <div className="search-trip-container-l">
            {/* <h3>Kết quả: {listTrip.length}</h3>
            {listTrip.length > 0
              ? listTrip.map((_, index) => (
                  <div className="item-trip" key={index}>
                    <Trip />
                  </div>
                ))
              : "Hiện tại không có chuyến xe nào phù hợp với yêu cầu của bạn"} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchTripPage;
