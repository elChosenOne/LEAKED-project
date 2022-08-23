import React from "react";
import "./TopButton.css";

class TopButton extends React.Component {
  render() {
    const { inicio } = this.props;

    return (
      <div className="overlap-group">
        <div className="top-back"></div>
        <div className="inicio sitkatext-regular-normal-masala-30px">{inicio}</div>
      </div>
    );
  }
}

export default TopButton;
