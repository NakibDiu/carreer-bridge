import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import DetailsHeader from "../Job details/DetailsHeader";

const Statistics = () => {
  const data = [
    { assignmentNumber: 1, mark: 57 },
    { assignmentNumber: 2, mark: 56 },
    { assignmentNumber: 3, mark: 50 },
    { assignmentNumber: 4, mark: 60 },
    { assignmentNumber: 5, mark: 60 },
    { assignmentNumber: 6, mark: 29 },
    { assignmentNumber: 7, mark: 50 },
    { assignmentNumber: 8, mark: 60 },
  ];

  const xAxisLabels = data.map(item => `A${item.assignmentNumber}`);

  return (
    <div>
      <DetailsHeader>Statistics</DetailsHeader>
      <div className="w-full flex justify-center items-center">
      <AreaChart width={600} height={300} data={data}>
      <XAxis dataKey="assignmentNumber" tickFormatter={(value, index) => xAxisLabels[index]} />
      <YAxis label={{ value: 'Marks', angle: -90, position: 'insideLeft' }} />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
      </div>
    </div>
  );
};

export default Statistics;
