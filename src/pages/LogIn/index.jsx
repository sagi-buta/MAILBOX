import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import { MdAlternateEmail } from "react-icons/md";
import { GoShieldLock } from "react-icons/go";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import logoin from "./../../assets/ImgLogin.png";
import apiCalls from "../../functions/apiCalls.js";
import { DataContext } from "../../context/index.jsx";

export default function LogIn() {
  const context = useContext(DataContext);
  const [pageOf, setPageOf] = useState(true); //true="Log in" page --- false="Register" page
  // const [pageOf, setPageOf] = useState(false);

  const objForstate = {
    email: "",
    firstname: "",
    lastname: "",
    password: "",
  };
  const [userInfo, setUserInfo] = useState(objForstate);

  const handleChange = (e) => {
    e.preventDefault();
    setUserInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    apiCalls
      .post(pageOf ? "users/login" : "users/register", userInfo)
      .then((res) => {
        context.setActiveUser({ data: res, token: res.token });
      })
      .catch((err) => console.log("err login", err));
  };

  const loginPageNav = () => {
    setPageOf(!pageOf);
  };
  return (
    <div className={styles.hiro}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3>Mailbox - communicate full-world</h3>
        </div>
        {pageOf ? (
          <h1 className={styles.title}>Welcome to Mailbox</h1>
        ) : (
          <p className={styles.registerp}>
            Enter your email address and we'll send you a link to reset your
            password.
          </p>
        )}
        <form
          className={!pageOf ? styles.formregister : styles.form}
          onSubmit={handleSubmit}
        >
          <div className={styles.parts}>
            {pageOf && <MdAlternateEmail />}
            <input
              name="email"
              className={styles.forminput}
              type="email"
              placeholder={`Email Address`}
              value={userInfo.email}
              onChange={handleChange}
            />
          </div>
          {!pageOf && (
            <div className={styles.parts}>
              <input
                name="firstname"
                className={styles.forminput}
                typeof="text"
                placeholder="First Name"
                value={userInfo.firstname}
                onChange={handleChange}
              />
            </div>
          )}
          {!pageOf && (
            <div className={styles.parts}>
              <input
                name="lastname"
                className={styles.forminput}
                typeof="text"
                placeholder="Last Name"
                value={userInfo.lastname}
                onChange={handleChange}
              />
            </div>
          )}
          <div className={styles.parts}>
            {pageOf && <GoShieldLock />}
            <input
              name="password"
              className={styles.forminput}
              type="password"
              placeholder="Password"
              value={userInfo.password}
              onChange={handleChange}
            />
          </div>
          {pageOf && (
            <Link to={"/forgotpassword"} className={styles.forgotbtn}>
              Forgot password ?
            </Link>
          )}

          <button type="submit" className={styles.submitbtn}>
            {pageOf ? "Sign in" : "Register"}
          </button>
        </form>
        {pageOf ? (
          <p className={styles.registerbtn}>
            Don't have an account?
            <span onClick={loginPageNav}>Register Here</span>
          </p>
        ) : (
          <div>
            <p className={styles.registerbtn}>
              Already have an account?
              <span onClick={loginPageNav}>Login Here</span>
            </p>
            <p className={styles.registerbtn}>
              By registering, you agree to <span>our Termsof Use.</span>
            </p>
          </div>
        )}
        {pageOf && (
          <div className={styles.or}>
            <div></div>
            <h3>or</h3>
            <div></div>
          </div>
        )}
        {pageOf && (
          <button className={styles.googlebtn}>
            <FcGoogle />
            Sign in with Google
          </button>
        )}
      </div>
      <img src={logoin} alt="" />
    </div>
  );
}
