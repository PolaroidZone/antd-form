import React from "react";
import { Card, Tooltip, Button, Divider, Popconfirm } from "antd";
import { CheckOutlined } from "@ant-design/icons";

const SpecificPermit = ({ permitList, selectedPermit, approvePermit }) => {
  // console.log("Specific Permit, data arrived: ", permitList.import_permit);
  // console.log("Specific Permit data arrived:", selectedPermit);
  return (
    <>
      {selectedPermit ? (
        <Card
          title="Import Permit Application"
          bordered={false}
          style={{
            minWidth: "100%",
            lineHeight: "1.2em",
          }}
        >
          <p>
            <b>Application Number:</b> {selectedPermit.application_number}{" "}
          </p>
          <p>
            <b>Company Name:</b> {selectedPermit.business.company_name}
          </p>
          <p>
            <b>Company Registration Number:</b>{" "}
            <Tooltip title="CIPA Registered">
              {selectedPermit.business.company_registration_number}
              <Button
                type="primary"
                shape="circle"
                size="small"
                icon={<CheckOutlined style={{ fontSize: "0.8em" }} />}
                heading={"Confirmed: CIPA Registered"}
                style={{ marginLeft: "15px", background: "green" }}
              />
            </Tooltip>
          </p>
          <p>
            <b>Manufacturing / Trading licence:</b>{" "}
            {selectedPermit.business.trading_license}
          </p>
          <p>
            <b>TIN/VAT registration No:</b>{" "}
            <Tooltip title="Confirmed: BURS Registered">
              {selectedPermit.business.tin_vat_registration_no}
              <Button
                type="primary"
                shape="circle"
                size="small"
                icon={<CheckOutlined style={{ fontSize: "0.8em" }} />}
                heading={"BURS Registered"}
                style={{ marginLeft: "15px", background: "green" }}
              />
            </Tooltip>
          </p>
          <p>
            <b>Physical address of the company:</b>{" "}
            {selectedPermit.business.physical_address}
          </p>
          <p>
            <b>Bill of lading :</b> {selectedPermit.business.bill_of_lading}
          </p>
          <p>
            <b>Details of invoice :</b>{" "}
            {selectedPermit.business.details_of_invoice}
          </p>
          <p>
            <b>Purpose for which goods are required :</b>{" "}
            {selectedPermit.business.purpose_of_goods}
          </p>
          <Divider style={{ marginBottom: "10px", marginTop: "10px" }} />
          <p>
            <b>Description of goods :</b> {selectedPermit.goods.description}
          </p>
          <p>
            <b>Tariff Heading (HS code) :</b>{" "}
            {selectedPermit.goods.tariff_heading_hs_code}
          </p>
          <p>
            <b>Customs Value :</b> {selectedPermit.goods.customs_value}
          </p>
          <p>
            <b>Quantity (i.e. kg/units) :</b>{" "}
            {selectedPermit.goods.quantity_of_goods}
          </p>
          <p>
            <b>Port of entry :</b> {selectedPermit.goods.port_of_entry}
          </p>
          <Divider style={{ marginBottom: "10px", marginTop: "10px" }} />
          <Popconfirm
            title="Are you sure to approve this permit?"
            onConfirm={() => {}}
          >
            <Button style={{ margin: "auto" }}>
              <b style={{ margin: "auto" }}>APPROVE PERMIT</b>
            </Button>
          </Popconfirm>
        </Card>
      ) : (
        ""
      )}
    </>
  );
};

export default SpecificPermit;
