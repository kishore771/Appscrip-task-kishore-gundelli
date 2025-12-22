import React, { useState } from "react";
import "./Filters.css";

const Filters = () => {
  const [openFilter, setOpenFilter] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState({men: false,women: false,children: false,});
  
  const unselectAll = () => {
    setSelectedOptions({
      men: false,
      women: false,
      children: false,
    });
  };  
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
              <br />

              <p
                onClick={unselectAll}
                className="category-options"
              >
                Unselect All
              </p>

              <input
                type="checkbox"
                id={`${category}-option1`}
                checked={selectedOptions.men}
                onChange={(e) =>
                  setSelectedOptions({ ...selectedOptions, men: e.target.checked })
                }
              />
              <label htmlFor={`${category}-option1`}>MEN</label>
              <br />

              <input
                type="checkbox"
                id={`${category}-option2`}
                checked={selectedOptions.women}
                onChange={(e) =>
                  setSelectedOptions({ ...selectedOptions, women: e.target.checked })
                }
              />
              <label htmlFor={`${category}-option2`}>WOMEN</label>
              <br />

              <input
                type="checkbox"
                id={`${category}-option3`}
                checked={selectedOptions.children}
                onChange={(e) =>
                  setSelectedOptions({ ...selectedOptions, children: e.target.checked })
                }
              />
              <label htmlFor={`${category}-option3`}>CHILDREN</label>
              <br />
            </div>
            )}
        </div>
      ))}
    </div>
  );
};

export default Filters;
