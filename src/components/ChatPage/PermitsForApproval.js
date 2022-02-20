import React, { useState, useEffect } from "react";
import { List, Avatar } from "antd";

const data = [
  {
    title: "Import Permit",
    description: "Ant Design, a design language for background applications",
  },
  {
    title: "Ant Design Title 2",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team",
  },
  {
    title: "Ant Design Title 3",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team",
  },
  {
    title: "Ant Design Title 4",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team",
  },
  {
    title: "Ant Design Title 3",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team",
  },
  {
    title: "Ant Design Title 4",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team",
  },
];

const PermitsForApproval = ({
  exportPermitData,
  importPermitData,
  selectPermit,
}) => {
  return (
    <div style={{ overflowY: "auto", maxHeight: "90%" }}>
      <List
        style={{ maxHeight: "90%", overflowY: "auto" }}
        itemLayout="horizontal"
        dataSource={importPermitData}
        renderItem={(item) => (
          <List.Item
            onClick={() => selectPermit(importPermitData.indexOf(item))}
            className="sideItems"
          >
            <List.Item.Meta
              title={<a href="">{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />

      <List
        style={{ maxHeight: "90%", overflowY: "auto" }}
        itemLayout="horizontal"
        dataSource={exportPermitData}
        renderItem={(item) => (
          <List.Item className="sideItems">
            <List.Item.Meta
              title={<a href="">{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default PermitsForApproval;
