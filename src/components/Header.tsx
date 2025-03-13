import { faBars, faBus, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import "../styles/components/Header.scss";
import ContentHotLine from "./ContentHotLine";
import CustomLink from "./CustomLink";
import Logo from "./Logo";
import LoginRegister from "./LoginRegister";
import usePositionTag from "../utils/usePositionTag";

const Header = () => {
  const [isHotlineVisible, setIsHotlineVisible] = useState<boolean>(false);
  const contentHotlineRef = useRef<HTMLDivElement | null>(null);
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const hotlineTriggerRef = useRef<HTMLLIElement | null>(null);
  const hotlineAnchorRef = useRef<HTMLDivElement>(null);
  usePositionTag(hotlineAnchorRef, "--anchor-hotline-top", "--anchor-hotline-left");
  // const [showNavBars, setShowNavBars] = useState<boolean>(false);

  const handleClickHotline = (event: React.MouseEvent) => {
    event.stopPropagation(); // Ngăn chặn sự kiện lan truyền
    setIsHotlineVisible((prev) => {
      return !prev;
    });
  };

  const handleClickOutSide = (event: MouseEvent) => {
    if (contentHotlineRef.current && !contentHotlineRef.current.contains(event.target as Node)) {
      setIsHotlineVisible(() => {
        return false;
      });
    }
  };

  const handleClickShowLogin = () => {
    setShowLogin((prev) => !prev);
  };

  const handleChangeStatus = (status: boolean) => {
    setShowLogin(status);
  };

  // const handleShowNavBars = () => {
  //   if (onChangeStatusNavbar) {
  //     setShowNavBars((prev) => {
  //       onChangeStatusNavbar(!prev);
  //       return !prev;
  //     });
  //   }
  // };

  // useEffect(() => {
  //   setShowNavBars(statusNavbar);
  // }, [statusNavbar]);

  useEffect(() => {
    if (isHotlineVisible) {
      document.addEventListener("click", handleClickOutSide);
    } else {
      document.removeEventListener("click", handleClickOutSide);
    }

    return () => document.removeEventListener("click", handleClickOutSide);
  }, [isHotlineVisible]);

  // console.log("status navbar", showNavBars);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <FontAwesomeIcon
            className="ic-nav-bars"
            icon={faBars}
            // onClick={handleShowNavBars}
          />
          <CustomLink to="/">
            <Logo icon={faBus} />
          </CustomLink>
          <CustomLink to="/" className="commit">
            Cam kết hoàn 150% nếu nhà xe không cung cấp dịch vụ vận chuyển (*)
          </CustomLink>
        </div>
        <div className="header-right">
          <ul className="list-feature d-flex">
            <li className="item-feature">
              <div className="feature">
                <CustomLink to={"/"} className="content">
                  Đơn hàng của tôi
                </CustomLink>
              </div>
            </li>
            <li className="item-feature">
              <div className="feature">
                <CustomLink to={"/"} className="content">
                  Mở bán vé trên Sylph
                </CustomLink>
              </div>
            </li>
            <li
              className="item-feature content-hotline"
              ref={hotlineTriggerRef}
              onClick={handleClickHotline}
            >
              <div className="feature hotline" ref={hotlineAnchorRef}>
                <FontAwesomeIcon className="ic-hotline" icon={faPhone} />
                <p>Hotline 24/7</p>
              </div>
            </li>
            <li>
              <button className="btn-login" onClick={handleClickShowLogin}>
                Đăng Nhập
              </button>
            </li>
          </ul>
        </div>
        <ContentHotLine ref={contentHotlineRef} show={isHotlineVisible} />
      </div>
      {/* Login & Register */}
      <LoginRegister show={showLogin} onChangeStatus={handleChangeStatus} />
    </header>
  );
};

export default Header;
