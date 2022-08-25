import React from "react";
import "./TopSearch.css";

class TopSearch extends React.Component {
  render() {
    const { inputType, inputPlaceholder, buscar } = this.props;

    return (
      <div className="top-search">
        <div className="overlap-group5 border-1px-dove-gray">
          <input
            className="busqueda sitkatext-regular-normal-masala-20px"
            name="busqueda4"
            placeholder={inputPlaceholder}
            type={inputType}
            required
          />
        </div>
        <div className="search-button border-1px-dove-gray">
          <div className="buscar">{buscar}</div>
        </div>
      </div>
    );
  }
}

export default TopSearch;
