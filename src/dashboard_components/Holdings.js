import React from "react";
import { useGeneralContext } from "./GeneralContext";

const Holdings = () => {
  const { holdings, portfolioData } = useGeneralContext();

  if (holdings.length === 0) {
    return (
      <div className="holdings text-center">
        <h3>Holdings</h3>
        <div className="no-holdings">
          <h4>No holdings found</h4>
          <p className="text-muted">Start investing to see your holdings here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="holdings">
      <h3>Holdings ({holdings.length})</h3>
      
      <div className="table-responsive mb-4">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((stock, index) => {
              const currentValue = stock.ltp * stock.quantity;
              const investment = stock.avgPrice * stock.quantity;
              const pnl = currentValue - investment;
              const isProfit = pnl >= 0;
              
              return (
                <tr key={index}>
                  <td>{stock.symbol}</td>
                  <td>{stock.quantity}</td>
                  <td>₹{stock.avgPrice.toFixed(2)}</td>
                  <td>₹{stock.ltp.toFixed(2)}</td>
                  <td>₹{currentValue.toFixed(2)}</td>
                  <td className={isProfit ? "text-success" : "text-danger"}>
                    ₹{pnl.toFixed(2)}
                  </td>
                  <td className={isProfit ? "text-success" : "text-danger"}>
                    {isProfit ? '+' : ''}{stock.pnlPercent.toFixed(2)}%
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Summary Row */}
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5>₹{portfolioData.totalInvestment.toLocaleString()}</h5>
              <p className="text-muted mb-0">Total investment</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5>₹{portfolioData.totalValue.toLocaleString()}</h5>
              <p className="text-muted mb-0">Current value</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body text-center">
              <h5 className={portfolioData.totalPnL >= 0 ? "text-success" : "text-danger"}>
                ₹{portfolioData.totalPnL.toLocaleString()} 
                <small className="ms-2">
                  ({portfolioData.totalPnL >= 0 ? '+' : ''}{portfolioData.totalPnLPercent.toFixed(2)}%)
                </small>
              </h5>
              <p className="text-muted mb-0">P&L</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Holdings;
