import React from "react";
import BarGraph from "../BarGraph";
import LineGraph from "../LineGraph";
import AreaGraph from "../AreaGraph";

class Graphics extends React.Component{
    render() {
        const { graphType, data, color } = this.props;

        if (graphType === "BarGraph"){
            return (
                <BarGraph data={data} color={color}/>
            );
        }else if (graphType === "LineGraph"){
            return (
                <LineGraph data={data} color={color}/>
            );
        }else if (graphType === "AreaGraph"){
            return (
                <AreaGraph data={data} color={color}/>
            );
        }
    }
}

export default Graphics;