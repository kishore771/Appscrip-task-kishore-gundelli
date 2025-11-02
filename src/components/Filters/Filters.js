import React, { useState } from "react";
import "./Filters.css";

const Filters = () => {
  const [openFilter, setOpenFilter] = useState(null);

  const toggleFilter = (name) => {
    setOpenFilter(openFilter === name ? null : name);
  };

  const filterCategories = [
    "IDEAL FOR",
    "OCCASION",
    "WORK",
    "FABRIC",
    "SEGMENT",
    "SUITABLE FOR",
    "RAW MATERIALS",
    "PATTERN",
  ];

  return (
    <div className="filters-list">
      <div className="category-filter checkbox-top">
        <input type="checkbox" id="customizable" />
        <label htmlFor="customizable">CUSTOMIZABLE</label>
      </div>

      {filterCategories.map((category) => (
        <div key={category} className="category-filter">
          <div
            className="filter-header"
            onClick={() => toggleFilter(category)}
          >
            <h4>{category}</h4>
            <span className={`arrow ${openFilter === category ? "up" : "down"}`}>
              ▼
            </span>
          </div>
          {openFilter === category && (
            <div className="filter-content">
              <p>All</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Filters;
