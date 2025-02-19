import { forwardRef } from "react";
import styled from "../styles/modules/components/ContentHotline.module.scss";
import CustomLink from "./CustomLink";

interface ContentHotlineProps {
  show?: boolean;
}

const ContentHotLine = forwardRef<HTMLDivElement, ContentHotlineProps>(({ show = false }, ref) => {
  return (
    // <div className={`${styled["content-hotline"]} ${show ? styled.show : ""}`}>
    <div ref={ref} className={`${styled["content-hotline"]} ${show ? styled.show : ""}`}>
      <ul className={styled["list-hotline"]}>
        <li className={styled["item-hotline"]}>
          <CustomLink
            className={`${styled.phone} ${styled["font-size"]}`}
            to={"/"}
            title={"1900545541"}
          />{" "}
          <p className={`${styled.note} ${styled["font-size"]}`}>
            Để đặt dịch vụ thuê xe (Từ 07:00 - 21:00)
          </p>
        </li>
        <li className={styled["item-hotline"]}>
          <CustomLink
            className={`${styled.phone} ${styled["font-size"]}`}
            to={"/"}
            title={"1900969681"}
          />{" "}
          <p className={`${styled.note} ${styled["font-size"]}`}>
            Để phản hồi về dịch vụ và xử lý sự cố
          </p>
        </li>
        <li className={styled["item-hotline"]}>
          <CustomLink
            className={`${styled.phone} ${styled["font-size"]}`}
            to={"/"}
            title={"1900888684"}
          />{" "}
          <p className={`${styled.note} ${styled["font-size"]}`}>Để đặt vé qua điện thoại (24/7)</p>
        </li>
      </ul>
    </div>
  );
});

export default ContentHotLine;
