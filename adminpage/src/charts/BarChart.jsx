import React, { useEffect, useState } from "react";

//must register before using chartjs
import { Bar } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { applyTheNeccessaryData } from "../utilities/chartData";
import { fetchApi } from "../services/fetchApi";
import { blogs_categoryreads_all } from "../services/apiEndUrls";
import "./barchart.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [barData, setBarData] = useState([]);
  const [isloading, setisloading] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      setisloading(true);
      setBarData(
        await fetchApi(blogs_categoryreads_all, "1234", "new=true", "GET")
      );
      setisloading(false);
    };
    fetchdata();
  }, []);

  let result = {};
  if (!isloading) {
    result = applyTheNeccessaryData(barData, "Read number per Blog", "Bar");
    console.log(result.data);
  }

  return (
    <div className="bar_chart_container">
      <div className="bar_items">
        <h3>Blog Analytics</h3>
        {isloading ? (
          "loading"
        ) : (
          <Bar data={result.data} options={result.options} />
        )}
      </div>
    </div>
  );
};

export default BarChart;
