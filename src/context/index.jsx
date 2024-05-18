import React from "react";
import { createContext } from "react";
import { useEffect, useState } from "react";
// import Popup from "../layout/Popup";
// import apiCalls from "../functions/apiCalls";

export const DataContext = createContext({});

export default function Context({ children }) {
  const [allData, setAllData] = useState({});
  // const [activeUser, setActiveUser] = useState(true);
  const [activeUser, setActiveUser] = useState({});
  // const [activeUser, setActiveUser] = useState({ login: true });
  //   const [popUp, setPopUp] = useState();

  const allValuesProvid = {
    allData,
    setAllData,
    activeUser,
    setActiveUser,
    // popUp,
    // setPopUp,
  };
  //   useEffect(() => {
  //     if (activeUser?.login) {
  //       // set admins
  //       apiCalls
  //         .get("/admins/teacher/all")
  //         .then((res) => {
  //           const result = res.data.map((v) => {
  //             return { _id: v._id, name: v.name, role: v.role };
  //           });
  //           setAllData((prev) => {
  //             return { ...prev, admins: result };
  //           });
  //         })
  //         .catch((err) =>
  //           setPopUp(
  //             <div>
  //               <h4>שגיאה: {err.response.status}</h4>
  //               <p>הודעה: {err.response.data.msg}</p>
  //             </div>
  //           )
  //         );
  //       // set actionsNames
  //       apiCalls
  //         .get("/actions")
  //         .then((res) => {
  //           const result = res.map((v) => v.name);
  //           setAllData((prev) => {
  //             return { ...prev, actionsNames: result };
  //           });
  //         })
  //         .catch((err) =>
  //           setPopUp(
  //             <div>
  //               <h4>שגיאה: {err.response.status}</h4>
  //               <p>הודעה: {err.response.data.msg}</p>
  //             </div>
  //           )
  //         );
  //       // set studentsNames
  //       apiCalls
  //         .get("/students")
  //         .then((res) => {
  //           const result = res.map((v) => v.name);
  //           setAllData((prev) => {
  //             return { ...prev, allStudents: result };
  //           });
  //         })
  //         .catch((err) =>
  //           setPopUp(
  //             <div>
  //               <h4>שגיאה: {err.response.status}</h4>
  //               <p>הודעה: {err.response.data.msg}</p>
  //             </div>
  //           )
  //         );

  //       // set relevent data
  //       apiCalls
  //         .get(`/data`)
  //         .then((res) => {
  //           const releventData = {
  //             orderSource: res
  //               .filter((v) => v.title === "orderSource")
  //               .map((v) => v.data)[0],
  //             fundingSource: res
  //               .filter((v) => v.title === "fundingSource")
  //               .map((v) => v.data)[0],
  //           };
  //           setAllData((prev) => {
  //             return { ...prev, ...releventData };
  //           });
  //         })
  //         .catch((err) =>
  //           setPopUp(
  //             <div>
  //               <h4>שגיאה: {err.response.status}</h4>
  //               <p>הודעה: {err.response.data.msg}</p>
  //             </div>
  //           )
  //         );
  //     }
  //   }, [activeUser]);
  return (
    <DataContext.Provider value={allValuesProvid}>
      <>
        {children}
        {/* {popUp && <Popup />} */}
      </>
    </DataContext.Provider>
  );
}
