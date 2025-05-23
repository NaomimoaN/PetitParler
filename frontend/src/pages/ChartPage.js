import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";

// Chart.jsのコンポーネントを登録
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const ChartPage = () => {
  const data = {
    labels: ["level1", "level2", "level3", "level4", "level5"],
    datasets: [
      {
        label: "Vocabulary level",
        data: [100, 89, 60, 40, 21],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Vocabulary level</h2>
      <p>
        The vocabulary level is a measure of how much you know in each level
        about the vocabulary of French.
      </p>
      <Radar data={data} options={options} />
    </div>
  );
};

export default ChartPage;
