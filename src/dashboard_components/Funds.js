import React from "react";
import { useGeneralContext } from "./GeneralContext";

const Funds = () => {
  const { funds, portfolioData } = useGeneralContext();

  return (
    <div className="funds">
      <h3>Funds</h3>
      
      {/* Quick Actions */}
      <div className="row mb-4">
        <div className="col">
          <p className="mb-3">Instant, zero-cost fund transfers with UPI</p>
          <button className="btn btn-success me-2">Add funds</button>
          <button className="btn btn-primary">Withdraw</button>
        </div>
      </div>

      <div className="row">
        {/* Equity Section */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5>Equity</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span>Available margin</span>
                <span className="fw-bold text-success">₹{funds.available.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Used margin</span>
                <span className="fw-bold">₹{funds.used.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Available cash</span>
                <span className="fw-bold text-success">₹{funds.available.toLocaleString()}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-2">
                <span>Opening Balance</span>
                <span>₹{funds.total.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Payin</span>
                <span>₹0.00</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>SPAN</span>
                <span>₹0.00</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Delivery margin</span>
                <span>₹0.00</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Exposure</span>
                <span>₹0.00</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Options premium</span>
                <span>₹0.00</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-2">
                <span>Collateral (Liquid funds)</span>
                <span>₹0.00</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Collateral (Equity)</span>
                <span>₹0.00</span>
              </div>
              <div className="d-flex justify-content-between">
                <span><strong>Total Collateral</strong></span>
                <span><strong>₹0.00</strong></span>
              </div>
            </div>
          </div>
        </div>

        {/* Commodity Section */}
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h5>Commodity</h5>
            </div>
            <div className="card-body text-center">
              <p className="mb-3">You don't have a commodity account</p>
              <button className="btn btn-primary">Open Account</button>
            </div>
          </div>

          {/* Fund Summary */}
          <div className="card mt-3">
            <div className="card-header">
              <h5>Fund Summary</h5>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between mb-2">
                <span>Total Funds</span>
                <span className="fw-bold">₹{funds.total.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span>Available for Trading</span>
                <span className="text-success">₹{funds.available.toLocaleString()}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Used Margin</span>
                <span className="text-danger">₹{funds.used.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
