import React from "react";
import styles from "./style.module.css";
import { ImMail3 } from "react-icons/im";
import { IoMdTimer } from "react-icons/io";
import { BiTask } from "react-icons/bi";
import { FaEye } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { TiVideo } from "react-icons/ti";
import { IoStatsChart } from "react-icons/io5";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
export default function SideNav() {
  const BtnsArr = [
    {
      icon: <IoMdTimer className={styles.logos} />,
      LinkTo: "http://localhost:5173/",
    },
    {
      icon: <BiTask className={styles.logos} />,
      LinkTo: "http://localhost:5173/",
    },
    {
      icon: <FaEye className={styles.logos} />,
      LinkTo: "http://localhost:5173/",
    },
    {
      icon: <IoPeople className={styles.logos} />,
      LinkTo: "mailbox",
    },
    {
      icon: <IoStatsChart className={styles.logos} />,
      LinkTo: "http://localhost:5173/",
    },
    {
      icon: <TiVideo className={styles.logos} />,
      LinkTo: "http://localhost:5173/",
    },
  ];

  return (
    <>
      <div className={styles.hiro}>
        <ImMail3 className={styles.logo} />

        <div className={styles.navcontent}>
          {BtnsArr.map((val, i) => {
            return (
              <NavLink
                key={i}
                className={({ isActive }) =>
                  isActive ? styles.active : styles.navbtns
                }
                to={val.LinkTo}
              >
                <div>{val.icon}</div>
              </NavLink>
            );
          })}
        </div>

        <div className={styles.useravater}>sagi</div>
      </div>
      <Outlet />
    </>
  );
}
