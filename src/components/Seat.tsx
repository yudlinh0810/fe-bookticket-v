import React from "react";
import styles from "./Seat.module.scss";

interface SeatType {
  id: number;
  seat_number: string;
  customer_id: number;
  status: string;
}
interface SeatProps {
  firstRow: SeatType[];
  remainingSeat: SeatType[];
}

const Seat: React.FC<SeatProps> = ({ firstRow, remainingSeat }) => {
  const seat_available_img = "https://futabus.vn/images/icons/seat_active.svg";
  const seat_booked_img = "https://futabus.vn/images/icons/seat_disabled.svg";
  const seat_pending_img = "https://futabus.vn/images/icons/seat_selecting.svg";

  return (
    <div>
      <div className={styles["first-row"]}>
        <div>
          <span style={{ textAlign: "center" }}>Ghế</span>
          <div>
            <div>
              <div className={styles["upper-floor"]}>
                {Array.isArray(firstRow) && firstRow.length > 0
                  ? firstRow.map((seat, index) => (
                      <div key={index} className={styles["seat-container"]}>
                        <img
                          src={
                            seat.status === "booked"
                              ? seat_booked_img
                              : seat.status === "pending"
                              ? seat_pending_img
                              : seat_available_img
                          }
                          alt="logo-seat"
                          className={styles["seat-image"]}
                        />
                        <span className={styles["seat-number"]}>{seat.seat_number}</span>
                      </div>
                    ))
                  : ""}
              </div>
              <div className={styles["downstairs"]}>
                {Array.isArray(remainingSeat) && remainingSeat.length > 0
                  ? remainingSeat.map((seat, index) => (
                      <div key={index} className={styles["seat-container"]}>
                        <img
                          src={
                            seat.status === "booked"
                              ? seat_booked_img
                              : seat.status === "pending"
                              ? seat_pending_img
                              : seat_available_img
                          }
                          alt="logo-seat"
                          className={styles["seat-image"]}
                        />
                        <span className={styles["seat-number"]}>{seat.seat_number}</span>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seat;
