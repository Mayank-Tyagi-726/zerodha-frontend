import React from "react";
import { useGeneralContext } from "./GeneralContext";

const Orders = () => {
  const { orders } = useGeneralContext();

  if (orders.length === 0) {
    return (
      <div className="orders text-center">
        <div className="no-orders">
          <h4>You haven't placed any orders today</h4>
          <p className="text-muted">Start trading to see your orders here</p>
        </div>
      </div>
    );
  }

  return (
    <div className="orders">
      <h3>Orders</h3>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Symbol</th>
              <th>Type</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.symbol}</td>
                <td>
                  <span className={`badge ${order.type === 'BUY' ? 'bg-success' : 'bg-danger'}`}>
                    {order.type}
                  </span>
                </td>
                <td>{order.quantity}</td>
                <td>₹{order.price.toFixed(2)}</td>
                <td>
                  <span className="badge bg-success">{order.status}</span>
                </td>
                <td>{order.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
