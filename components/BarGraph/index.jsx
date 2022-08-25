import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

class BarGraph extends React.Component {
  render() {  
    const { data, color } = this.props;

    return (
        <BarChart height={200} width={300} data={data}>
            <YAxis />
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="val" fill={color} />
        </BarChart>
    );
  }
}
  
  export default BarGraph;