import React from "react";
import MyImage from "../defaultProfile.png";
import "./ProfileInfo.css";

export default function ProfileInfo({ senderDetails }) {
  const { first_name, picture } = senderDetails;

  return (
    <>
      <div style={{ height: "25vh" }}>
        <div>
          <button
            className="btn"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
            style={{ padding: "7px" }}
          >
            <i className="fa fa-bars"></i>
          </button>

          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
            style={{ minWidth: '150px', width: "20%" }}
          >
            <div
              className="offcanvas-header"
              style={{ backgroundColor: "blueviolet" }}
            >
              <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body" style={{ padding: "0px" }}>
              <ul className="list-group">
                <li className="list-group-item">
                  <a>Option A</a>
                </li>
                <li className="list-group-item">
                  <a>Option B</a>
                </li>
                <li className="list-group-item">
                  <a>Option C</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center" style={{ marginTop: "5px" }}>
          <img
            src={picture ? picture : MyImage}
            className="rounded-circle"
            style={{
              width: "6rem",
              height: "6rem",
              verticalAlign: "center",
              horizontalAlign: "center",
            }}
          />
          <h3 style={{ marginTop: "8px", marginBottom: "1px" }}>
            {first_name}
          </h3>
        </div>
        <hr
          style={{
            width: "100%",
            border: "0.1px solid black",
            marginTop: "5px",
            marginBottom: "5px",
          }}
        />
      </div>
    </>
  );
}
