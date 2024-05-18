import React from "react";
import styles from "./style.module.css";
import { useState, useEffect } from "react";
// import {ReactComponent as SvgIcon } from '../../assets/Frame.svg'
import Frame2 from "../../assets/Frame2.svg";
import { HiInboxArrowDown } from "react-icons/hi2";
import { GrSend } from "react-icons/gr";
import { TiStarFullOutline } from "react-icons/ti";
import { BsFillPencilFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router-dom";
export default function Inbox() {
  const [active, setactive] = useState(false);
  const btnsArr = [
    {
      title: "Inbox",
      icon: <HiInboxArrowDown />,
      cnt: 1,
      urlLink: "emaillist",
    },
    {
      title: "Sent Emails",
      icon: <GrSend />,
      cnt: 2,
      urlLink: "/",
    },
    {
      title: "Favorites",
      icon: <TiStarFullOutline />,
      cnt: 3,
      urlLink: "/",
    },
    {
      title: "Drafts",
      icon: <BsFillPencilFill />,
      cnt: 4,
      urlLink: "/",
    },
    {
      title: "Deleted",
      icon: <MdDelete />,
      cnt: 5,
      urlLink: "/",
    },
  ];

  const ChangeActive = () => {
    setactive(!active);
  };

  return (
    <>
      {btnsArr.map((val, i) => {
        return (
          <NavLink
            to={val.urlLink}
            key={i}
            // className={({ isActive }) =>
            //   isActive ? `${styles.activeinbox}${""}` : styles.inbox
            // }
            className={({ isActive }) =>
              isActive ? styles.active : styles.inbox
            }
          >
            <div className={styles.content}>
              <div className={styles.left}>
                <div className={styles.icon}>{val.icon}</div>
                <div className={styles.title}>{val.title}</div>
              </div>

              <div className={styles.hirobox}>
                {val.cnt && (
                  // <div
                  //   className={`${styles.box} ${
                  //     active ? styles.box_active : ""
                  //   }`}
                  // >
                  <div className={styles.box}>{val.cnt}</div>
                )}
              </div>
            </div>
          </NavLink>
        );
      })}
    </>
  );
}
