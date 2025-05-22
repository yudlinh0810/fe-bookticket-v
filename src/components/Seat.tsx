import seatActive from "../assets/images/seat_active.svg";
import seatSelecting from "../assets/images/seat_selecting.svg";
import seatDisable from "../assets/images/seat_disabled.svg";
import seatBooed from "../assets/images/seat_booked.svg";
import styles from "../styles/seat.module.scss";
import React from "react";

export type SeatType = {
  id?: number;
  position: string;
  status: "available" | "selecting" | "unavailable" | "booked";
  tripId?: number;
  floor?: "top" | "bottom";
};
interface SeatProps {
  seatValue: SeatType;
  onSelected: (item: SeatType) => void;
}

const Seat: React.FC<SeatProps> = React.memo(({ seatValue, onSelected }) => {
  const { position, status } = seatValue;

  const handleToggleStatus = () => {
    let newStatus;
    if (status === "available") {
      newStatus = "selecting";
    } else {
      newStatus = "available";
    }
    const updateSeat: SeatType = {
      ...seatValue,
      status: newStatus as "available" | "selecting",
    };
    onSelected(updateSeat);
  };
  if (status === "unavailable" || status === "booked") {
    return (
      <div className={styles.seat}>
        <span className={styles["seat__position"]}>{position}</span>
        <img src={status !== "booked" ? seatDisable : seatBooed} alt={`img${status}`} />
      </div>
    );
  } else {
    return (
      <div className={styles.seat} onClick={handleToggleStatus}>
        <span className={styles["seat__position"]}>{position}</span>
        <img
          src={`${status === "available" ? seatActive : seatSelecting}`}
          className={styles["seat__img"]}
          alt={`img${status}`}
        />
      </div>
    );
  }
});

export default Seat;
