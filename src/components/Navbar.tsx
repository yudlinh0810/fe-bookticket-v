import { forwardRef, useEffect, useState } from "react";
import { NavbarProps } from "../types/props";

const Navbar = forwardRef<HTMLDivElement, NavbarProps>(({ status }, ref) => {
  const [statusNavbar, setStatusNavbar] = useState<boolean>(status);

  useEffect(() => {
    setStatusNavbar(status);
  }, [status]);

  if (statusNavbar) {
    return (
      <div ref={ref} className="">
        <nav className="navbar"></nav>
      </div>
    );
  } else {
    return null;
  }
});

export default Navbar;
