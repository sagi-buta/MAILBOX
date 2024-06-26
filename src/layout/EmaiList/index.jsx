import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import Search from "../../components/Search";
import Email from "../Email";
import { NavLink, Outlet, useParams } from "react-router-dom";

export default function EmailList() {
  const maillist = [
    {
      fullName: "John Doe",
      messageContent:
        "Hello, how are you doing today? I hope everything is going well for you.",
      profilePicture: <text>JD</text>,
      receivedTime: "2024-03-25T09:00:00",
      unreadMessages: 3,
      isFavorite: true,
      _id: "1",
    },
    {
      fullName: "Jane Smith",
      messageContent:
        "Hi there! Just wanted to say hello and check in with you.",
      profilePicture: <text>JS</text>,
      receivedTime: "2024-03-27T09:15:00",
      unreadMessages: 0,
      isFavorite: false,
      _id: "11",
    },
    {
      fullName: "John Doe",
      messageContent:
        "Hello, how are you doing today? I hope everything is going well for you.",
      profilePicture: <text>JD</text>,
      receivedTime: "2024-03-25T09:00:00",
      unreadMessages: 3,
      isFavorite: true,
      _id: "111",
    },
    {
      fullName: "Jane Smith",
      messageContent:
        "Hi there! Just wanted to say hello and check in with you.",
      profilePicture: <text>JS</text>,
      receivedTime: "2024-03-27T09:15:00",
      unreadMessages: 0,
      isFavorite: false,
      _id: "1111",
    },
    {
      fullName: "John Doe",
      messageContent:
        "Hello, how are you doing today? I hope everything is going well for you.",
      profilePicture: <text>JD</text>,
      receivedTime: "2024-03-25T09:00:00",
      unreadMessages: 3,
      isFavorite: true,
      _id: "11111",
    },
    {
      fullName: "Jane Smith",
      messageContent:
        "Hi there! Just wanted to say hello and check in with you.",
      profilePicture: <text>JS</text>,
      receivedTime: "2024-03-27T09:15:00",
      unreadMessages: 0,
      isFavorite: false,
      _id: "111111",
    },
    {
      fullName: "John Doe",
      messageContent:
        "Hello, how are you doing today? I hope everything is going well for you.",
      profilePicture: <text>JD</text>,
      receivedTime: "2024-03-25T09:00:00",
      unreadMessages: 3,
      isFavorite: true,
      _id: "7",
    },
    {
      fullName: "Jane Smith",
      messageContent:
        "Hi there! Just wanted to say hello and check in with you.",
      profilePicture: <text>JS</text>,
      receivedTime: "2024-03-27T09:15:00",
      unreadMessages: 0,
      isFavorite: false,
      _id: "8",
    },
    {
      fullName: "Michael Johnson",
      messageContent: "Good morning! How's your day going so far?",
      profilePicture: <text>MJ</text>,
      receivedTime: "2024-03-26T09:30:00",
      unreadMessages: 1,
      isFavorite: true,
      _id: "9",
    },

    {
      fullName: "Sarah Taylor",
      messageContent: "How's it going with your new project?",
      profilePicture: <text>ST</text>,
      receivedTime: "2024-03-31T10:15:00",
      unreadMessages: 0,
      isFavorite: true,
      _id: "10",
    },
    {
      fullName: "Amanda Davis",
      messageContent: "Hey! Long time no talk. Let's catch up soon!",
      profilePicture: <text>AD</text>,
      receivedTime: "2024-03-31T10:45:00",
      unreadMessages: 0,
      isFavorite: false,
      _id: "1011",
    },
    {
      fullName: "Matthew Rodriguez",
      messageContent: "Good evening. How was your day?",
      profilePicture: <text>MR</text>,
      receivedTime: "2024-12-31T11:00:00",
      unreadMessages: 3,
      isFavorite: true,
      _id: "12",
    },
    {
      fullName: "Jessica Garcia",
      messageContent: "Hi! Just wanted to say hi and see how you're doing.",
      profilePicture: <text>JG</text>,
      receivedTime: "2024-03-30T11:15:00",
      unreadMessages: 1,
      isFavorite: false,
      _id: "13",
    },
  ];
  const _id = useParams();
  const [newlist, setnewlist] = useState([]);
  const [emailclicked, setemailclicked] = useState({});

  const SortMessage = () => {
    let sortedlist = maillist.sort((a, b) => {
      return new Date(b.receivedTime) - new Date(a.receivedTime);
    });
    console.log("old", maillist, "new", sortedlist, "state", newlist);
    setnewlist(sortedlist);
  };

  useEffect(SortMessage, []);

  const openMail = (val) => {
    setemailclicked(val);
  };

  return (
    <>
      <div className={styles.body}>
        <div className={styles.search}>
          <Search />
        </div>

        <div className={styles.cardlist}>
          {newlist.map((val, i) => {
            return (
              <NavLink
                key={i}
                className={({ isActive }) =>
                  isActive ? styles.activeCard : styles.card
                }
                to={val._id}
                onClick={() => openMail(val)}
              >
                <div className={styles.leftcard}>
                  <div className={styles.avatar}>{val.profilePicture}</div>
                  {/* {val.profilePicture} */}
                </div>
                <div className={styles.centercard}>
                  <div className={styles.name}>{val.fullName}</div>
                  <div className={styles.content}>{val.messageContent}</div>
                </div>
                <div className={styles.rightcard}>
                  {Number(val.unreadMessages) > 0 ? (
                    <div className={styles.unread}>{val.unreadMessages}</div>
                  ) : null}
                  <div className={styles.time}>
                    {String(new Date(val.receivedTime).toDateString())}
                  </div>
                  {!Number(val.unreadMessages) && (
                    <div className={styles.icon}>
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.6764 5.44248C11.811 5.33746 11.9108 5.19094 11.9619 5.02348C12.0129 4.85602 12.0127 4.67601 11.9612 4.50869C11.9097 4.34138 11.8095 4.19514 11.6747 4.0905C11.5399 3.98585 11.3772 3.92804 11.2094 3.92517L7.95128 3.7962C7.93526 3.79504 7.9199 3.78905 7.90706 3.77895C7.89421 3.76886 7.88442 3.75509 7.87888 3.7393L6.753 0.55293C6.69643 0.39082 6.59369 0.250839 6.45868 0.151939C6.32367 0.0530403 6.16292 0 5.99819 0C5.83346 0 5.67271 0.0530403 5.5377 0.151939C5.40269 0.250839 5.29995 0.39082 5.24338 0.55293L4.12112 3.75068C4.11558 3.76647 4.10579 3.78024 4.09295 3.79033C4.0801 3.80043 4.06474 3.80642 4.04872 3.80758L0.790556 3.93655C0.622799 3.93942 0.460106 3.99723 0.325288 4.10188C0.190471 4.20652 0.09029 4.35276 0.0387928 4.52007C-0.0127043 4.68739 -0.0129354 4.8674 0.0381321 5.03486C0.0891995 5.20232 0.189005 5.34884 0.323553 5.45386L2.8794 7.55914C2.89219 7.56969 2.90175 7.58393 2.9069 7.60011C2.91205 7.6163 2.91256 7.6337 2.90836 7.65018L2.02866 10.9162C1.98307 11.0825 1.98749 11.2595 2.04131 11.4231C2.09513 11.5867 2.19573 11.7289 2.32944 11.8305C2.46315 11.932 2.62347 11.988 2.78859 11.9907C2.95371 11.9934 3.11562 11.9427 3.25228 11.8456L5.95294 9.94892C5.96624 9.93929 5.98202 9.93414 5.99819 9.93414C6.01436 9.93414 6.03014 9.93929 6.04344 9.94892L8.7441 11.8456C8.87892 11.946 9.04024 12 9.20567 12C9.3711 12 9.53243 11.946 9.66725 11.8456C9.80099 11.745 9.90169 11.6034 9.9555 11.4404C10.0093 11.2773 10.0136 11.1009 9.96772 10.9352L9.08078 7.65777C9.07608 7.64131 9.07634 7.62374 9.08152 7.60745C9.0867 7.59116 9.09656 7.57694 9.10974 7.56673L11.6764 5.44248Z"
                          fill={val.isFavorite ? "#00A389" : "#BEC4CD"}
                        />
                      </svg>
                    </div>
                  )}
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
      {emailclicked._id && <Outlet context={emailclicked} />}
    </>
  );
}
