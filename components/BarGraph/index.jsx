import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

function BarGraph(props){
  const { data, color } = props;

  return (
    <BarChart height={200} width={300} data={data}>
      <YAxis />
      <XAxis dataKey="name" />
      <Tooltip />
      <Bar dataKey="val" fill={color} />
    </BarChart>
  );
}
  
  export default BarGraph;