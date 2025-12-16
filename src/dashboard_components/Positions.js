import React from "react";
import { useGeneralContext } from "./GeneralContext";

const Positions = () => {
  const { positions } = useGeneralContext();

  if (positions.length === 0) {
    return (
      <div className="positions text-center">
        <h3>Positions</h3>
        <div className="no-positions">
          <h4>No open positions</h4>
          <p className="text-muted">Open positions will appear here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="positions">
      <h3>Positions ({positions.length})</h3>
      
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((stock, index) => {
              const currentValue = stock.ltp * stock.quantity;
              const investment = stock.avgPrice * stock.quantity;
              const pnl = currentValue - investment;
              const isProfit = pnl >= 0;
              
              return (
                <tr key={index}>
                  <td>
                    <span className="badge bg-secondary">{stock.product || "CNC"}</span>
                  </td>
                  <td>{stock.symbol}</td>
                  <td>{stock.quantity}</td>
                  <td>₹{stock.avgPrice.toFixed(2)}</td>
                  <td>₹{stock.ltp.toFixed(2)}</td>
                  <td className={isProfit ? "text-success" : "text-danger"}>
                    ₹{pnl.toFixed(2)}
                  </td>
                  <td className={stock.dayChange < 0 ? "text-danger" : "text-success"}>
                    {stock.dayChange >= 0 ? '+' : ''}{stock.dayChangePercent.toFixed(2)}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
