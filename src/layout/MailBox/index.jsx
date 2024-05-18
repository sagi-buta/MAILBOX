import React from "react";
import styles from "./style.module.css";
import { IoArrowUndo } from "react-icons/io5";

import Inbox from "../../components/Inbox";
import Frame from "../../assets/Frame.svg";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import NewMessageBtn from "../../components/NewMessageBtn";

export default function MailBox() {
  const btnsArr = [{}];

  return (
    <>
      <div className={styles.hiro}>
        <div className={styles.header}>
          <div>
            <IoArrowUndo />
          </div>
          <h1> MailBox</h1>
        </div>
        <div className={styles.mailbar}>
          <NewMessageBtn />
          <Inbox />
          {}
          {/* <Inbox title={"Inbox"} icon={Frame} /> */}
          {/* {<NavLink to={"emaillist"}>
             <Inbox title={"Inbox"} icon={Frame} cnt={7} />
          </NavLink>} */}
        </div>
        <div className={styles.labelsbar}></div>
      </div>
      <Outlet />
    </>
  );
}
