import React from "react";
import styles from "./style.module.css";
import { useOutletContext } from "react-router-dom";
import { TiStarFullOutline } from "react-icons/ti";
import { MdDelete } from "react-icons/md";
import { FaPrint } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import { FaBold } from "react-icons/fa6";
import { PiTextItalicBold } from "react-icons/pi";
import { FaUnderline } from "react-icons/fa";
import { GrTextAlignLeft } from "react-icons/gr";
import { IoIosColorFill } from "react-icons/io";
import { GrTextAlignCenter } from "react-icons/gr";
import { GrTextAlignRight } from "react-icons/gr";
import { FaItalic } from "react-icons/fa6";
import { AiTwotoneFile } from "react-icons/ai";
import { BiImage } from "react-icons/bi";
import { LuSend } from "react-icons/lu";

export default function Email() {
  const emailclicked = useOutletContext();
  console.log("Email", emailclicked);
  return (
    <div className={styles.hiro}>
      <div className={styles.header}>
        <p>permission offers</p>
        <div className={styles.btnsbar}>
          <TiStarFullOutline />
          <FaPrint />
          <MdDelete />
          <FiMoreVertical />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.date}>{String(new Date().toDateString())}</p>
        <h1>Meeting with new investors</h1>
        <ul className={styles.chethistory}>
          {/* {chetArr.map(... <li></li>)} */}
          <li>{emailclicked.unreadMessages}</li>
          <li>{emailclicked.messageContent}</li>
        </ul>

        <form className={styles.form}>
          <div className={styles.main}>
            <textarea
              className={styles.textarea}
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <div className={styles.textbtnsbar}>
              <button>
                <FaBold />
              </button>
              <button>
                {/* <PiTextItalicBold /> */}
                <FaItalic />
              </button>
              <button>
                <FaUnderline />
              </button>
              <button className={styles.fillbtn}>
                <IoIosColorFill />
              </button>
              <button>
                <GrTextAlignLeft />
              </button>
              <button>
                <GrTextAlignCenter />
              </button>
              <button>
                <GrTextAlignRight />
              </button>
            </div>
          </div>

          <div className={styles.endbtnsbar}>
            <div className={styles.left}>
              <AiTwotoneFile />
              <BiImage />
            </div>
            <div className={styles.right}>
              <MdDelete />
              <button className={styles.send}>
                <LuSend />
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
