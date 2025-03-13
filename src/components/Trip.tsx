import { formatDate } from "../utils/formatDate";
import "./Trip.scss";

interface TripProps {
  data?: {
    id: string;
    departure_location: string;
    destination_location: string;
    date_departure: string;
    trip_name: string;
    price: number;
    car_name: string;
    available_seat: number;
    hours_departure: string;
  };
  url?: string;
}

const Trip: React.FC<TripProps> = ({ data, url }) => {
  const handleSelectTrip = () => {
    console.log("url", url);
    console.log("data", data);
  };

  return (
    <div className="ticket-container">
      <div className="bus-info-t">
        <div className="bus-image">
          <img
            src="https://static.vexere.com/production/images/1660789771506.jpeg?w=250&h=250"
            alt="bus-image"
          />
        </div>
        <div className="bus-info">
          <div className="n-p-info">
            <p className="trip-name-info">Trip name</p>
            <h3>999.999đ</h3>
          </div>
          <div className="cn-sc-info">
            <p>Car Name</p>
            <p>Còn 10 chỗ trống</p>
          </div>
          <div className="detail-info">
            <span></span>
            <p className="detail">Thông tin chuyến đi</p>
          </div>
          <div className="btn">
            <span></span>
            <button onClick={handleSelectTrip}>Chọn chuyến</button>
          </div>
        </div>
      </div>
      <div className="bus-info-bt">
        <p>
          <small>*</small>Vé thuộc chuyến {formatDate("22/8/2023")}
          Đà Nẵng - Quãng Nam
        </p>
      </div>
    </div>
  );
};

export default Trip;
