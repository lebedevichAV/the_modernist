import React, { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineMenuFold } from "react-icons/ai";
import { FaRegWindowClose } from "react-icons/fa";

function Nav({ nav_list }) {
  const [isActive, setIsActive] = useState(false);
  function openNav() {
    setIsActive(true);
  }
  function closeNav() {
    setIsActive(false);
  }
  return (
    <nav className="nav">
      <IconContext.Provider
        value={{ className: "nav__menu-icon nav__menu-icon_disabled" }}
      >
        <AiOutlineMenuFold onClick={openNav} />
      </IconContext.Provider>
      <div
        className={
          isActive ? "nav__content" : "nav__content nav__content_disabled"
        }
      >
        <ul className="nav__list">
          <li className="nav__item">
            <IconContext.Provider
              value={{
                className: isActive
                  ? "nav__close-icon"
                  : "nav__close-icon nav__close-icon_disabled",
              }}
            >
              <FaRegWindowClose onClick={closeNav} />
            </IconContext.Provider>
          </li>
          {nav_list.map((item, index) => (
            <li className="nav__item" key={index}>
              <a className="nav__link" href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
