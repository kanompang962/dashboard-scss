import React from "react";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import { widgetItems } from "../../contents/content";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import ListTable from "../../components/table/Table";

const Home = () => {
  return (
    <div>
      {/* Widget */}
      <div className="widgets">
        {widgetItems.map((widget) => (
          <Widget key={widget.id + "-widget"} {...widget} />
        ))}
      </div>
      {/* Charts */}
      <div className="charts">
        <Featured />
        <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
      </div>
      {/* List container */}
      <div className="list-container">
        <div className="list-title">Latest transitions</div>
        <ListTable />
      </div>
    </div>
  );
};

export default Home;
