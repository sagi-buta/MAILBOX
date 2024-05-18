import React, { useContext, useEffect } from "react";
import styles from "./style.module.css";
import SideNav from "../../layout/SideNav";
import Content, { DataContext } from "../../context";
import { Route, Routes, useNavigate } from "react-router-dom";
import EmailList from "../../layout/EmaiList";
import MailBox from "../../layout/MailBox";
import Email from "../../layout/Email";
import LogIn from "../LogIn";
import ForgotPassword from "../ForgotPassword";
import NewMessage from "../../layout/NewMessage";

const MainLayout = () => {
  const context = useContext(DataContext);
  // const homePage = useNavigate();
  // useEffect(() => {
  //   homePage("sidenav");
  // }, []);

  const enterNavigte = useNavigate();
  useEffect(() => {
    enterNavigte(context.activeUser?.token ? "/" : "login");
  }, [context.activeUser]);
  return (
    <div className={styles.hiro}>
      <Routes>
        <Route path="login" element={<LogIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/" element={<SideNav />}>
          <Route path="mailbox" element={<MailBox />}>
            <Route path="newmessage" element={<NewMessage />} />
            <Route path="emaillist" element={<EmailList />}>
              <Route path=":_id" element={<Email />} />
              <Route />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MainLayout;
