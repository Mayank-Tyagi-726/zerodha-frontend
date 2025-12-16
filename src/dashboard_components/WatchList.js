import React, { useState } from "react";
import { useGeneralContext } from "./GeneralContext";
import { DoughnutChart } from "./DoughnutChart";

const WatchList = () => {
  const { watchlist } = useGeneralContext();

  const labels = watchlist.map((stock) => stock.symbol);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.ltp),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container" style={{ 
      width: "300px", 
      backgroundColor: "#f8f9fa", 
      padding: "20px", 
      borderRight: "1px solid #dee2e6" 
    }}>
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="form-control mb-3"
          style={{ width: "100%" }}
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list-unstyled">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
      className="mb-2 p-2 border rounded"
      style={{ cursor: "pointer" }}
    >
      <div className="item">
        <p className={`mb-1 ${stock.change < 0 ? "text-danger" : "text-success"}`}>
          {stock.symbol}
        </p>
        <div className="item-info d-flex justify-content-between align-items-center">
          <span className={`${stock.change < 0 ? "text-danger" : "text-success"}`}>
            {stock.changePercent.toFixed(2)}%
          </span>
          {stock.change < 0 ? (
            <span className="text-danger">▼</span>
          ) : (
            <span className="text-success">▲</span>
          )}
          <span className="fw-bold">₹{stock.ltp}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.symbol} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  return (
    <div className="mt-2 pt-2 border-top">
      <div className="btn-group btn-group-sm" role="group">
        <button className="btn btn-success" title="Buy (B)">Buy</button>
        <button className="btn btn-danger" title="Sell (S)">Sell</button>
        <button className="btn btn-outline-secondary" title="Analytics (A)">
          <span className="icon">📊</span>
        </button>
        <button className="btn btn-outline-secondary" title="More">
          <span className="icon">⋮</span>
        </button>
      </div>
    </div>
  );
};
