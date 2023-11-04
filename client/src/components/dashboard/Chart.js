import React from "react";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  BarElement,
  ArcElement,
  Legend,
  LineElement,
  Title,
} from "chart.js";
import { Line, Doughnut, Bar, Radar } from "react-chartjs-2";

ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  BarElement,
  ArcElement,
  Legend,
  LineElement,
  Title
);
//start_year,intensity,sector
export const LineChart = ({ dataArray }) => {
  if (!dataArray || dataArray.length === 0) {
    return <div>loading{console.log("No data available for the chart")}</div>;
  }

  // Extract and filter relevant data
  const filteredData = dataArray
    .filter((item) => item.start_year && item.intensity && item.sector)
    .sort((a, b) => a.start_year - b.start_year);

  // Group data by year and sector
  const groupedData = filteredData.reduce((result, item) => {
    const year = item.start_year;
    const sector = item.sector;

    if (!result[year]) {
      result[year] = {};
    }

    if (!result[year][sector]) {
      result[year][sector] = [];
    }

    result[year][sector].push(item.intensity);

    return result;
  }, {});

  // Get unique sectors
  const sectors = Array.from(new Set(filteredData.map((item) => item.sector)));

  const labels = Object.keys(groupedData);

  const datasets = sectors.map((sector, index) => {
    const data = labels.map((year) => {
      return groupedData[year][sector]
        ? groupedData[year][sector].reduce((acc, val) => acc + val)
        : 0;
    });

    return {
      label: sector,
      data: data,
      borderColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      }, 1)`,
      fill: false,
    };
  });

  const chartData = {
    labels: labels,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: "Yearly Intensity by Sector",
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        borderRadius: "10px",
        alignItems: "center",
        display: "flex",
        border: "2px solid #000",
      }}
    >
      <Line data={chartData} options={options} />
    </div>
  );
};
//start_year,intensity,topic
export const LineChart1 = ({ dataArray }) => {
  if (!dataArray || dataArray.length === 0) {
    return <div>loading{console.log("No data available for the chart")}</div>;
  }

  // Extract and filter relevant data
  const filteredData = dataArray
    .filter(
      (item) => item.start_year && item.intensity && item.sector && item.topic
    )
    .sort((a, b) => a.start_year - b.start_year);

  // Group data by year and topic
  const groupedData = filteredData.reduce((result, item) => {
    const year = item.start_year;
    const topic = item.topic;

    if (!result[year]) {
      result[year] = {};
    }

    if (!result[year][topic]) {
      result[year][topic] = [];
    }

    result[year][topic].push(item.intensity);

    return result;
  }, {});

  // Get unique topics
  const topics = Array.from(new Set(filteredData.map((item) => item.topic)));

  const labels = Object.keys(groupedData);

  const datasets = topics.map((topic, index) => {
    const data = labels.map((year) => {
      return groupedData[year][topic]
        ? groupedData[year][topic].reduce((acc, val) => acc + val)
        : 0;
    });

    return {
      label: topic,
      data: data,
      borderColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      }, 1)`,
      fill: false,
    };
  });

  const chartData = {
    labels: labels,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          usePointStyle: true,
        },
      },
      title: {
        display: true,
        text: "Yearly Intensity by Topic",
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        borderRadius: "10px",
        alignItems: "center",
        display: "flex",
        border: "2px solid #000",
      }}
    >
      <Line data={chartData} options={options} />
    </div>
  );
};
export const DoughnutChart = ({ dataArray }) => {
  if (!dataArray || dataArray.length === 0) {
    return <div>loading{console.log("No data available for the chart")}</div>;
  }

  // Extract and filter relevant data
  const filteredData = dataArray.filter(
    (item) => item.likelihood && item.country
  );

  if (filteredData.length === 0) {
    return <div>No data available for the chart.</div>;
  }

  // Group data by likelihood
  const groupedData = filteredData.reduce((result, item) => {
    const likelihood = item.likelihood;
    if (!result[likelihood]) {
      result[likelihood] = 0;
    }
    result[likelihood] += 1;
    return result;
  }, {});

  // Extract likelihood levels and counts
  const likelihoodLevels = Object.keys(groupedData);
  const counts = Object.values(groupedData);

  const backgroundColors = likelihoodLevels.map(
    () =>
      `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      }, 1)`
  );

  const chartData = {
    labels: likelihoodLevels,
    datasets: [
      {
        data: counts,
        backgroundColor: backgroundColors,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Count by Likelihood and Country",
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        border: "2px solid #000",
      }}
    >
      <Doughnut data={chartData} options={options} />
    </div>
  );
};
export const DoughnutChart1 = ({ dataArray }) => {
  if (!dataArray || dataArray.length === 0) {
    return <div>loading{console.log("No data available for the chart")}</div>;
  }

  // Extract and filter relevant data
  const filteredData = dataArray.filter(
    (item) => item.region && item.relevance
  );

  if (filteredData.length === 0) {
    return <div>No data available for the chart.</div>;
  }

  // Group data by region
  const groupedData = filteredData.reduce((result, item) => {
    const region = item.region;
    if (!result[region]) {
      result[region] = 0;
    }
    result[region] += 1;
    return result;
  }, {});

  // Extract region names and counts
  const regionNames = Object.keys(groupedData);
  const counts = Object.values(groupedData);

  const backgroundColors = regionNames.map(
    () =>
      `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
      }, 1)`
  );

  const chartData = {
    labels: regionNames,
    datasets: [
      {
        data: counts,
        backgroundColor: backgroundColors,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Display the legend
      },
      title: {
        display: true,
        text: "Count by Region and Relevance",
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        border: "2px solid #000",
      }}
    >
      <Doughnut data={chartData} options={options} />
    </div>
  );
};
export const DoughnutChart2 = ({ dataArray }) => {
  if (!dataArray || dataArray.length === 0) {
    return <div>loading{console.log("No data available for the chart")}</div>;
  }

  // Extract and filter relevant data
  const filteredData = dataArray.filter(
    (item) => item.intensity && item.region
  );

  if (filteredData.length === 0) {
    return <div>No data available for the chart.</div>;
  }

  // Get all unique Intensity values
  const uniqueIntensities = Array.from(
    new Set(filteredData.map((item) => item.intensity))
  );

  // Create a dictionary to store counts for each Intensity and Region combination
  const dataDict = {};

  // Initialize the data dictionary with zeros for all Intensity and Region combinations
  uniqueIntensities.forEach((intensity) => {
    dataDict[intensity] = {};
  });

  // Group data by Intensity and Region
  filteredData.forEach((item) => {
    const region = item.region;
    const intensity = item.intensity;

    if (!dataDict[intensity][region]) {
      dataDict[intensity][region] = 0;
    }

    dataDict[intensity][region] += 1;
  });

  // Extract labels and datasets
  const labels = uniqueIntensities;
  const datasets = [];

  labels.forEach((intensity) => {
    const datasetLabel = `Intensity: ${intensity}`;
    const counts = Object.values(dataDict[intensity]);

    const backgroundColors = counts.map(
      () =>
        `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
          Math.random() * 255
        }, 1)`
    );

    datasets.push({
      label: datasetLabel,
      data: counts,
      backgroundColor: backgroundColors,
    });
  });

  const chartData = {
    labels: labels,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: true,
        text: "Counts by Intensity and Region",
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        border: "2px solid #000",
      }}
    >
      <Doughnut data={chartData} options={options} />
    </div>
  );
};
export const BarChart = ({ dataArray }) => {
  if (!dataArray || dataArray.length === 0) {
    return <div>loading{console.log("No data available for the chart")}</div>;
  }

  // Extract and filter relevant data
  const filteredData = dataArray.filter(
    (item) => item.relevance && item.pestle
  );

  if (filteredData.length === 0) {
    return <div>No data available for the chart.</div>;
  }

  // Get all unique Pestle values
  const uniquePestles = Array.from(
    new Set(filteredData.map((item) => item.pestle))
  );

  // Create a dictionary to store counts for each Pestle and Relevance combination
  const dataDict = {};

  // Initialize the data dictionary with zeros for all Pestle and Relevance combinations
  uniquePestles.forEach((pestle) => {
    dataDict[pestle] = {};
  });

  // Group data by Pestle and Relevance
  filteredData.forEach((item) => {
    const relevance = item.relevance;
    const pestle = item.pestle;

    if (!dataDict[pestle][relevance]) {
      dataDict[pestle][relevance] = 0;
    }

    dataDict[pestle][relevance] += 1;
  });

  // Extract labels and datasets
  const labels = uniquePestles;
  const datasets = [];

  labels.forEach((pestle) => {
    const datasetLabel = `Pestle: ${pestle}`;
    const counts = Object.values(dataDict[pestle]);

    const backgroundColor = `rgba(${Math.random() * 255}, ${
      Math.random() * 255
    }, ${Math.random() * 255}, 0.7)`;

    datasets.push({
      label: datasetLabel,
      data: counts,
      backgroundColor: backgroundColor,
    });
  });

  const chartData = {
    labels: labels,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: true,
        text: "Counts by Pestle and Relevance",
      },
    },
    scales: {
      x: {
        type: "category", // Set x-axis as a category axis
        offset: true, // Offset the bars to be evenly distributed
      },
      y: {
        beginAtZero: true, // Start the y-axis from 0
      },
    },
  };
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        borderRadius: "10px",
        alignItems: "center",
        display: "flex",
        border: "2px solid #000",
      }}
    >
      <Bar data={chartData} options={options} />;
    </div>
  );
};
export const BarChart1 = ({ dataArray }) => {
  if (!dataArray || dataArray.length === 0) {
    return <div>Loading...</div>;
  }

  // Extract and filter relevant data
  const filteredData = dataArray.filter(
    (item) => item.intensity && item.pestle && item.topic
  );

  if (filteredData.length === 0) {
    return <div>No data available for the chart.</div>;
  }

  // Create a dictionary to store counts for each Topic
  const dataDict = {};

  // Group data by Topic
  filteredData.forEach((item) => {
    const topic = item.topic;

    if (!dataDict[topic]) {
      dataDict[topic] = 0;
    }

    dataDict[topic] += 1;
  });

  // Extract labels and datasets
  const labels = Object.keys(dataDict);
  const datasets = [
    {
      label: "Counts",
      data: labels.map((label) => dataDict[label]),
      backgroundColor: labels.map(
        () =>
          `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
            Math.random() * 255
          }, 0.7)`
      ),
    },
  ];

  const chartData = {
    labels: labels,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      title: {
        display: true,
        text: "Counts by Topic",
      },
    },
    scales: {
      x: {
        type: "category", // Set x-axis as a category axis
        offset: true, // Offset the bars to be evenly distributed
      },
      y: {
        beginAtZero: true, // Start the y-axis from 0
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        borderRadius: "10px",
        alignItems: "center",
        display: "flex",
        border: "2px solid #000",
      }}
    >
      <Bar data={chartData} options={options} />
    </div>
  );
};
