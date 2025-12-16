import React from "react";
import { useGeneralContext } from "./GeneralContext";

const Summary = () => {
  const { portfolioData, holdings, indices } = useGeneralContext();

  return (
    <div className="container-fluid">
      <div className="username mb-4">
        <h3>Dashboard</h3>
        <hr className="divider" />
      </div>

      {/* Market Indices */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Market Indices</h5>
              <div className="row">
                <div className="col">
                  <div className="d-flex justify-content-between">
                    <span>Nifty 50</span>
                    <span className={`${indices.nifty.change >= 0 ? 'text-success' : 'text-danger'}`}>
                      {indices.nifty.value.toLocaleString()} 
                      ({indices.nifty.change >= 0 ? '+' : ''}{indices.nifty.changePercent.toFixed(2)}%)
                    </span>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col">
                  <div className="d-flex justify-content-between">
                    <span>Sensex</span>
                    <span className={`${indices.sensex.change >= 0 ? 'text-success' : 'text-danger'}`}>
                      {indices.sensex.value.toLocaleString()} 
                      ({indices.sensex.change >= 0 ? '+' : ''}{indices.sensex.changePercent.toFixed(2)}%)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Equity Section */}
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Equity</h5>
              <div className="row">
                <div className="col">
                  <div className="d-flex justify-content-between">
                    <span>Margin available</span>
                    <h4>₹{portfolioData.availableMargin.toLocaleString()}</h4>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col">
                  <div className="d-flex justify-content-between">
                    <span>Margins used</span>
                    <span>₹{portfolioData.usedMargin.toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Opening balance</span>
                    <span>₹{(portfolioData.availableMargin + portfolioData.usedMargin).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Holdings Section */}
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Holdings ({holdings.length})</h5>
              <div className="row">
                <div className="col">
                  <div className="d-flex justify-content-between">
                    <span>P&L</span>
                    <h4 className={`${portfolioData.totalPnL >= 0 ? 'text-success' : 'text-danger'}`}>
                      ₹{portfolioData.totalPnL.toLocaleString()} 
                      <small className={`ms-2 ${portfolioData.totalPnL >= 0 ? 'text-success' : 'text-danger'}`}>
                        ({portfolioData.totalPnL >= 0 ? '+' : ''}{portfolioData.totalPnLPercent.toFixed(2)}%)
                      </small>
                    </h4>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col">
                  <div className="d-flex justify-content-between">
                    <span>Current Value</span>
                    <span>₹{portfolioData.totalValue.toLocaleString()}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Investment</span>
                    <span>₹{portfolioData.totalInvestment.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
