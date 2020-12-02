import React, { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import assets from "assets";
import { useDeviceType } from "helpers/customHooks";
import { menuItems } from "constants/_common";
import styles from "./Header.scss";

const Header: React.FC = () => {
  const deviceType = useDeviceType();
  const location = useLocation();
  const history = useHistory();
  const [isMenuToggle, setIsMenuToggle] = useState(false);
  const [pathnameList, setPathnameList] = useState([""]);

  useEffect(() => {
    const newPathnameList = location.pathname.split("/");
    newPathnameList.shift();
    setPathnameList(newPathnameList);
  }, [location.pathname]);

  const handleMenuToggle = () => setIsMenuToggle(!isMenuToggle);

  const handleOnClickMenu = (
    e: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    setIsMenuToggle(false);
    const key = e.currentTarget.id;
    history.push(`/${key}`);
  };

  return (
    <div className={styles.wrapper}>
      {isMenuToggle && deviceType === "sp" && (
        <div className={styles.spContainer}>
          <div className={styles.spClose} onClick={handleMenuToggle}>
            <span />
            <span />
          </div>
          <div className={styles.spMenuBG} onClick={handleMenuToggle} />
          <div className={styles.spMenuList}>
            {menuItems.map((item) => (
              <div
                id={item.key}
                key={item.key}
                onClick={handleOnClickMenu}
                className={
                  item.key === pathnameList[0]
                    ? styles.selectedMenu
                    : styles.defaultMenu
                }
              >
                {item.value}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className={styles.container}>
        <a href={"/"} target={"_self"}>
          <img
            src={assets.headerLogo}
            alt={"Header Logo"}
            className={styles.headerLogo}
          />
        </a>
        {deviceType === "sp" ? (
          <div className={styles.spMenu} onClick={handleMenuToggle}>
            <div className={styles.burgerMenu}>
              <span />
              <span />
              <span />
            </div>
          </div>
        ) : (
          <div className={styles.menu}>
            {menuItems.map((item) => (
              <span
                id={item.key}
                key={item.key}
                onClick={handleOnClickMenu}
                className={
                  item.key === pathnameList[0]
                    ? styles.selectedMenu
                    : styles.defaultMenu
                }
              >
                {item.value}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
