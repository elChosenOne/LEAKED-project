import React from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";

class LineGraph extends React.Component {
  render() {  
    const { data, color } = this.props;

    return (
        <AreaChart height={200} width={300} data={data}>
            <YAxis />
            <XAxis dataKey="name" />
            <Tooltip />
            <Area type="monotone" dataKey="val" stroke={color} fill={color}/>
        </AreaChart>
    );
  }
}
  
  export default LineGraph;