import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header/Header";
import Filters from "./components/Filters/Filters";
import Footer from "./components/Footer/Footer";

function App() {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("recommended");
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("API error:", error));
  }, []);

  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOrder) {
      case "newest":
        return b.id - a.id;
      case "popular":
        return b.rating?.rate - a.rating?.rate;
      case "lowToHigh":
        return a.price - b.price;
      case "highToLow":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  const toggleFilters = () => setShowFilters((prev) => !prev);

  return (
    <div className="App">
      <Header />


      <div className="breadcrumb">
        <span>HOME</span> | <span>SHOP</span>
      </div>

      <div className="description-container">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>

      <div className="plp-wrapper">

        <div className="plp-header">
          <div className="plp-header-left">
            <h2 className="count-text">{sortedProducts.length} ITEMS</h2>
            <button className="filter-button" onClick={toggleFilters}>
              {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
            </button>
          </div>
          <select
            id="sort"
            value={sortOrder}
            className="sort-list"
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="recommended">RECOMMENDED</option>
            <option value="newest">NEWEST FIRST</option>
            <option value="popular">POPULAR</option>
            <option value="highToLow">PRICE : HIGH TO LOW</option>
            <option value="lowToHigh">PRICE : LOW TO HIGH</option>
          </select>
        </div>


        <div className="plp-content">
          {showFilters && (
            <aside className="filters-sidebar">
              <Filters
                sortOrder={sortOrder}
                handleSortChange={(e) => setSortOrder(e.target.value)}
                itemCount={sortedProducts.length}
                toggleFilters={toggleFilters}
                showFilters={showFilters}
              />
            </aside>
          )}

          <section
            className={`product-grid-container ${
              showFilters ? "with-filters" : "full-width"
            }`}
          >
            {sortedProducts.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">${product.price}</p>
              </div>
            ))}
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
