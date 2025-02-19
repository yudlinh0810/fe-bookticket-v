import React from "react";
import styles from "../styles/modules/Logo.module.scss";
import LogoImage from "@/assets/icons/icon_vxr.jpg";
import { LogoProps } from "../types/props";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Logo: React.FC<LogoProps> = ({ image, icon }) => {
  if (image) {
    return <img className={styles.logo} src={LogoImage} />;
  }
  if (icon) {
    return <FontAwesomeIcon className={styles.logo} icon={icon} style={{ color: "#ffffff" }} />;
  }
};

export default Logo;
