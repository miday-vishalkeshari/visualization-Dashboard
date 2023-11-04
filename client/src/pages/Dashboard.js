import Layout from "../components/Layout/Layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  LineChart1,
  DoughnutChart,
  DoughnutChart1,
  DoughnutChart2,
  BarChart,
  BarChart1,
} from "../components/dashboard/Chart";
const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_API}/api/v1/data/get-data`
        );
        console.log(response.data); // Log the response to inspect its structure
        if (response.data?.success) {
          setData(response.data.data);
        }
      } catch (error) {
        console.log("we are in the catch block of the dashboard page");
        console.log(error);
      }
    };

    getAllData();
  }, []);

  return (
    <div>
      <Layout>
        {/* just for test purpose that all data is coming or not did before started working with chartjs */}
        {/* <div className="container-fluid m-3 p-3">
          <div className="row">
            <div className="col-md-9">
              <h1>All Data</h1>
              <div className="m-1 w-75">
                <ul>
                  {data.map((item) => (
                    <li key={item._id}>
                      <p>Intensity: {item.intensity}</p>
                      <p>Sector: {item.sector}</p>
                      <p>Topic: {item.topic}</p>
                      <p>Insight: {item.insight}</p>
                      <p>URL: {item.url}</p>
                      <p>Region: {item.region}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div> */}

        <div>
          <div className="d-flex justify-content-center align-items-center mt-3 p-3">
            <LineChart dataArray={data} />
          </div>

          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="d-flex justify-content-center align-items-center mt-3 p-3">
                <DoughnutChart dataArray={data} />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex justify-content-center align-items-center mt-3 p-3">
                <DoughnutChart1 dataArray={data} />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center mt-3 p-3">
            <LineChart1 dataArray={data} />
          </div>

          {/* <div className="d-flex justify-content-center align-items-center mt-3 p-3">
            <LineChart2 dataArray={data} />
          </div> */}

          <div className="d-flex justify-content-center align-items-center mt-3 p-3">
            <BarChart1 dataArray={data} />
          </div>

          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="d-flex justify-content-center align-items-center mt-3 p-3">
                <BarChart dataArray={data} />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex justify-content-center align-items-center mt-3 p-3">
                <DoughnutChart2 dataArray={data} />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
