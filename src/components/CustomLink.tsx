import React from "react";
import { Link } from "react-router";
import style from "../styles/modules/Link.module.scss";
import { CustomLinkProps } from "../types/props";

const CustomLink: React.FC<CustomLinkProps> = ({ to, href, title, children }) => {
  if (!children && !title) {
    return null;
  } else {
    if (to) {
      return (
        <Link className={style.link} to={to}>
          {children || title}
        </Link>
      );
    }
    if (href) {
      return (
        <a className={style.link} href={href} target="_blank" rel="noopener">
          {children || title}
        </a>
      );
    }
  }
};

export default CustomLink;
