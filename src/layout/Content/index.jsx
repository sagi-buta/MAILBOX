import React, { useContext, useEffect } from "react";
import styles from "./style.module.css";
import { DataContext } from "../../context";
import MainLayout from "../../pages/MainLayout";
import LogIn from "../../pages/LogIn";
import { Link, Route, Routes, useNavigate } from "react-router-dom";

export default function Content() {
  const { activeUser } = useContext(DataContext);

  const enterNavigte = useNavigate();

  // useEffect(() => {
  //   enterNavigte(activeUser?.token ? "/" : "login");
  // }, [[], [activeUser]]);

  return (
    <>
      <div className={styles.content}>
        {/* <Routes>
          <Route path="login" element={<LogIn />} />
          <Route path="forgopassword" element={<ForgorPssword />} />
          <Route path="*" element={<MainLayout />} />
        </Routes> */}

        {/* {<Link to={activeUser ? "/" : "login"} />} */}
        {/* {activeUser?.token ? <MainLayout /> : <LogIn />} */}
        {/* <MainLayout /> */}
      </div>
    </>
  );
}
