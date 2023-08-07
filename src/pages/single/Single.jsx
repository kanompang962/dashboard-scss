import React from "react";
import "./single.scss";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/table/Table";

const Single = () => {
  return (
    <div className="single">
      {/* Top */}
      <div className="top">
        <div className="left">
          <div className="edit-icon">Edit</div>
          <h1 className="title">Infomation</h1>
          <div className="item">
            <img
              className="item-img"
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
              alt="profile"
            />
            <div className="details">
              <h1 className="detail-title">Jane Doe</h1>
              <div className="detail-item">
                <span className="item-key">Email: </span>
                <span className="item-value">JaneDoe@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="item-key">Phone: </span>
                <span className="item-value">0931177457</span>
              </div>
              <div className="detail-item">
                <span className="item-key">Address: </span>
                <span className="item-value">212/13 Bantan</span>
              </div>
              <div className="detail-item">
                <span className="item-key">Country: </span>
                <span className="item-value">Thailand</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <Chart title="User Spending (Last 6 Months)" aspect={3 / 1} />
        </div>
      </div>
      {/* Bottom */}
      <div className="bottom">
        <h1 className="title">Last Transactions</h1>
        <ListTable />
      </div>
    </div>
  );
};

export default Single;
