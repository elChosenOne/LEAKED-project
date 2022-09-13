import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

function LineGraph(props){
  const { data, color } = props;

  return (
    <LineChart height={200} width={300} data={data}>
      <YAxis />
      <XAxis dataKey="name" />
      <Tooltip />
      <Line type="monotone" dataKey="val" stroke={color} strokeWidth={2}/>
    </LineChart>
  );
}
  
  export default LineGraph;