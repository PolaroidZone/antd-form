import React, { useState, useEffect, Component } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { db } from "../firebase/firebase";
import {
  collection,
  doc,
  setDoc,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";

import Chat from "../components/ChatPage/Chat";
import PermitsForApproval from "../components/ChatPage/PermitsForApproval";
import SpecificPermit from "../components/ChatPage/SpecificPermit";

import styles from "../styles/Chat.css";

const Chats = ({ user }) => {
  // Side Panel Logic
  const [permitList, setPermitList] = useState([
    {
      import_permit: "",
      export_permit: "",
      rebate: "",
    },
  ]);
  const [selectedPermit, setSelectedPermit] = useState();
  const [selectedPermitID, setSelectedPermitID] = useState();
  const [importPermitData, setImportPermitData] = useState();
  const [importIDList, setImportIDList] = useState();
  const [exportPermitData, setExportPermitData] = useState();
  const [rebateData, setRebatePermitData] = useState();

  const selectPermit = (item) => {
    console.log(
      "Selected Permit: ",
      item,
      " and ",
      permitList.import_permit[item]
    );

    setSelectedPermit(permitList.import_permit[item]);
    setSelectedPermitID(importIDList[item]);
  };

  const fetchData = async () => {
    try {
      const importList = [];
      const importIDList = [];
      const exportList = [];
      const rebate = [];

      // const q = query(
      //   collection(db, "import_permit"),
      //   orderBy("date_submission", "desc")
      // );
      const queryImport = await getDocs(
        collection(db, "import_permit"),
        orderBy("date_submission")
      );
      queryImport.forEach((doc) => {
        importList.push(doc.data());
        importIDList.push(doc.id);
      });
      console.log(importIDList);
      const queryExport = await getDocs(
        collection(db, "export_permit"),
        orderBy("date_submission")
      );
      queryExport.forEach((doc) => {
        exportList.push(doc.data());
      });
      const queryRebate = await getDocs(
        collection(db, "rebate"),
        orderBy("date_submission")
      );
      queryRebate.forEach((doc) => {
        rebate.push(doc.data());
      });
      console.log("Object from database", {
        import_permit: importList,
        export_permit: exportList,
        rebate: rebate,
      });
      // Parsing Import Permit Data into suitable format for rendering
      const importPermitData = [];
      importList.forEach((permit) => {
        importPermitData.push({
          title: "Import Permit",
          description: `Permit Number: ${
            permit.application_number
          }, Date of Application: ${permit.date_submission
            .toDate()
            .toDateString()}, Name: ${permit.business.company_name}${
            permit.sole_proprietor.applicant_fullname
          }`,
        });
      });
      setImportPermitData(importPermitData);

      // Parsing Export Permit Data into suitable format for rendering
      const exportPermitData = [];
      exportList.forEach((permit) => {
        exportPermitData.push({
          title: "Export Permit",
          description: `Permit Number: ${
            permit.application_number
          }, Date of Application: ${permit.date_submission
            .toDate()
            .toDateString()}, Name: ${permit.company_name}`,
        });
      });
      console.log(exportPermitData);
      setExportPermitData(exportPermitData);

      // Parsing Export Permit Data into suitable format for rendering
      const rebateData = [];
      rebate.forEach((permit) => {
        rebateData.push({
          title: "Rebates",
          description: `Permit Number: ${
            permit.application_number
          }, Date of Application: ${permit.date_submission
            .toDate()
            .toDateString()}, Name: ${permit.company_name}`,
        });
      });
      console.log(exportPermitData);
      setPermitList({
        import_permit: importList,
        export_permit: exportList,
        rebate: rebate,
      });
      setImportIDList(importIDList);
      setSelectedPermit(importList[0]);
      setSelectedPermitID(importIDList[0]);
      setExportPermitData(exportPermitData);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="listPermitsDiv chatDiv">
        <h3>Permits for Approval </h3>
        <PermitsForApproval
          importPermitData={importPermitData}
          exportPermitData={exportPermitData}
          selectPermit={selectPermit}
        />
      </div>

      <div className="chatCenterDiv chatDiv">
        <Chat
          selectedPermit={selectedPermit}
          selectedPermitID={selectedPermitID}
        />
      </div>

      <div
        className="chatPermitDiv chatDiv"
        style={{
          overflowY: "scroll",
        }}
      >
        <SpecificPermit
          permitList={permitList}
          selectedPermit={selectedPermit}
        />
      </div>
    </>
  );
};

export default Chats;
