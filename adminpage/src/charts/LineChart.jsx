import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

import { applyTheNeccessaryData } from "../utilities/chartData";
import {
  dayfinder,
  dayoftheweekorginal,
  days,
} from "../utilities/CalculateThReaptedDay";
import { useEffect, useState } from "react";
import { user_analytic_url } from "../services/apiEndUrls";
import { fetchApi } from "../services/fetchApi";
import "./Linechart.css";
Chart.register(...registerables);

const init = (data, dayoftheweek) => {
  console.log(dayoftheweek);
  for (let x = 0; x < data.length; x++) {
    for (let i = 0; i < 7; i++) {
      if (parseInt(data[x]) === parseInt(dayoftheweek[i].date)) {
        dayoftheweek[i].count = dayoftheweek[i].count + 1;
        console.log(
          data[x],
          "=",
          dayoftheweek[i].date,
          "and the count value",
          dayoftheweek[i].count
        );
      }
      console.log(dayoftheweek[i].date, "the not match day");
    }
    console.log(dayoftheweek, "calls on every", x, "change");
  }
  return dayoftheweek;
};

const LineChart = ({ user_id }) => {
  const dayoftheweek = [
    {
      day: dayfinder(
        new Date(new Date().setDate(new Date().getDate() - 6)).getDay()
      ),
      date: days.mon,
      count: 0,
    },
    {
      day: dayfinder(
        new Date(new Date().setDate(new Date().getDate() - 5)).getDay()
      ),
      date: days.tu,
      count: 0,
    },
    {
      day: dayfinder(
        new Date(new Date().setDate(new Date().getDate() - 4)).getDay()
      ),
      date: days.wedn,
      count: 0,
    },
    {
      day: dayfinder(
        new Date(new Date().setDate(new Date().getDate() - 3)).getDay()
      ),
      date: days.thur,
      count: 0,
    },
    {
      day: dayfinder(
        new Date(new Date().setDate(new Date().getDate() - 2)).getDay()
      ),
      date: days.fri,
      count: 0,
    },
    {
      day: dayfinder(
        new Date(new Date().setDate(new Date().getDate() - 1)).getDay()
      ),
      date: days.sat,
      count: 0,
    },
    {
      day: dayfinder(
        new Date(new Date().setDate(new Date().getDate())).getDay()
      ),
      date: days.sun,
      count: 0,
    },
  ];

  // const dayoftheweek = [
  //   {
  //     day: "mon",
  //     date: days.mon,
  //     count: 0,
  //   },
  //   {
  //     day: "tue",
  //     date: days.tu,
  //     count: 0,
  //   },
  //   {
  //     day: "wed",
  //     date: days.wedn,
  //     count: 0,
  //   },
  //   {
  //     day: "thur",
  //     date: days.thur,
  //     count: 0,
  //   },
  //   {
  //     day: "fri",
  //     date: days.fri,
  //     count: 0,
  //   },
  //   {
  //     day: "sat",
  //     date: days.sat,
  //     count: 0,
  //   },
  //   {
  //     day: "sun",
  //     date: days.sun,
  //     count: 0,
  //   },
  // ];

  const array = [
    {
      createdAt: "2021-12-16T11:44:13.000Z",
    },
    {
      createdAt: "2021-12-16T11:14:53.000Z",
    },
    {
      createdAt: "2021-12-17T15:05:47.000Z",
    },
    {
      createdAt: "2021-12-18T15:14:44.000Z",
    },
    {
      createdAt: "2021-12-17T15:06:27.000Z",
    },
  ];

  const [lineData, setLineData] = useState([]);
  const [isloading, setisloading] = useState(false);

  useEffect(() => {
    const fetchdata = async () => {
      setisloading(true);
      setLineData(
        await fetchApi(user_analytic_url + user_id, "1234", "new=true", "GET")
      );

      setisloading(false);
    };
    fetchdata();
  }, []);

  let Data;
  if (!isloading) {
    const slicedDate = lineData.map((data) => data.createdAt.slice(8, 10));
    const values = init(slicedDate, [...dayoftheweek]);
    Data = applyTheNeccessaryData(
      values,
      "The # of Blog post in each day",
      "Line"
    );
  }

  return (
    <div className="line_chart_container">
      <div className="line_items">
        {isloading ? (
          "loading"
        ) : (
          <Line data={Data.data} options={Data.options} />
        )}
      </div>
    </div>
  );
};

export default LineChart;
