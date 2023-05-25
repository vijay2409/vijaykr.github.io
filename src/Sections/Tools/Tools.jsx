import React from "react";
import "./Tools.css";

const tools = [
  { id: 1, tool: "STS", img: "image/STS.png" },
  {
    id: 2,
    tool: "VsCode",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png",
  },
  {
    id: 3,
    tool: "Intellij",
    img: "https://img.icons8.com/color/96/intellij-idea.png",
  },
  {
    id: 4,
    tool: "Postman",
    img: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/256/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png",
  },
  {
    id: 5,
    tool: "pg-Admin 4",
    img: "https://img.icons8.com/color/96/postgreesql.png",
  },
  {
    id: 6,
    tool: "Oracle 10g",
    img: "https://img.icons8.com/nolan/96/oracle-logo.png",
  },
  {
    id: 7,
    tool: "Git",
    img: "https://img.icons8.com/color/256/git.png",
  },
];
const Tools = () => {
  return (
    <>
      <div id="tools">
        <div id="tools-heading">
          <h1>Tools</h1>
        </div>
        <div className="tool-section">
          {tools.map((el) => {
            return (
              <div className="tools-card">
                <div id="tool-logo">
                  <img className="tool-card-img" src={el.img} alt={el.tool} />
                </div>
                <div className="tool-title">
                  <p className="tool-card-name">{el.tool}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Tools;
