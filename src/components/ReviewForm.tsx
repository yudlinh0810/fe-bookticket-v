import { useState } from "react";
import StarRating from "./StartRating";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);

  return (
    <div>
      <h3>Đánh giá của bạn:</h3>
      <StarRating value={rating} onChange={setRating} />
      <p>Đã chọn: {rating} sao</p>
    </div>
  );
};

export default ReviewForm;
