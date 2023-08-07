import React, { useState } from "react";
import "./new.scss";
import { DriveFolderUploadOutlined } from "@mui/icons-material";

const New = ({ input, title }) => {
  const [fileImg, setFileImg] = useState();

  return (
    <div className="new">
      <div className="top">
        <h1 className="title">{title}</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            className="img"
            src={
              fileImg
                ? URL.createObjectURL(fileImg)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            }
            alt=""
          />
        </div>
        <div className="right">
          <form action="">
            <div className="form-control">
              <label htmlFor="file">
                Image: <DriveFolderUploadOutlined className="icon" />
              </label>
              <input
                onChange={(e) => setFileImg(e.target.files[0])}
                type="file"
                id="file"
                style={{ display: "none" }}
              />
            </div>
            {input.map((data) => (
              <div className="form-control" key={data.id}>
                <label>{data.label}</label>
                <input type={data.type} placeholder={data.placeholder} />
              </div>
            ))}
            <button className="btn-submit" type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;
