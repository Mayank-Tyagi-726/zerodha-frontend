import React, { createContext, useContext, useState } from "react";

const GeneralContext = createContext();

export const useGeneralContext = () => {
  const context = useContext(GeneralContext);
  if (!context) {
    throw new Error("useGeneralContext must be used within a GeneralContextProvider");
  }
  return context;
};

export const GeneralContextProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([
    { symbol: "RELIANCE", ltp: 2456.30, change: 12.45, changePercent: 0.51 },
    { symbol: "TCS", ltp: 3890.25, change: -25.60, changePercent: -0.65 },
    { symbol: "HDFCBANK", ltp: 1678.90, change: 8.75, changePercent: 0.52 },
    { symbol: "INFY", ltp: 1789.45, change: -12.30, changePercent: -0.68 },
    { symbol: "HINDUNILVR", ltp: 2234.15, change: 15.20, changePercent: 0.68 }
  ]);

  const [portfolioData, setPortfolioData] = useState({
    totalValue: 31430,
    totalInvestment: 29880,
    totalPnL: 1550,
    totalPnLPercent: 5.20,
    availableMargin: 3740,
    usedMargin: 0
  });

  const [indices, setIndices] = useState({
    nifty: { value: 19845.30, change: 45.20, changePercent: 0.23 },
    sensex: { value: 67123.45, change: 123.45, changePercent: 0.18 }
  });

  const [holdings, setHoldings] = useState([
    {
      symbol: "RELIANCE",
      quantity: 50,
      avgPrice: 2420.00,
      ltp: 2456.30,
      pnl: 1815.00,
      pnlPercent: 1.50
    },
    {
      symbol: "TCS",
      quantity: 25,
      avgPrice: 3920.50,
      ltp: 3890.25,
      pnl: -756.25,
      pnlPercent: -0.77
    },
    {
      symbol: "HDFCBANK",
      quantity: 100,
      avgPrice: 1650.00,
      ltp: 1678.90,
      pnl: 2890.00,
      pnlPercent: 1.75
    }
  ]);

  const [orders, setOrders] = useState([
    {
      id: "ORD001",
      symbol: "RELIANCE",
      type: "BUY",
      quantity: 50,
      price: 2420.00,
      status: "COMPLETED",
      timestamp: "2024-01-15 10:30:00"
    },
    {
      id: "ORD002",
      symbol: "TCS",
      type: "SELL",
      quantity: 25,
      price: 3890.25,
      status: "COMPLETED",
      timestamp: "2024-01-14 14:20:00"
    }
  ]);

  const [positions, setPositions] = useState([
    {
      symbol: "RELIANCE",
      quantity: 50,
      avgPrice: 2420.00,
      ltp: 2456.30,
      pnl: 1815.00,
      pnlPercent: 1.50,
      dayChange: 622.50,
      dayChangePercent: 0.51
    }
  ]);

  const [funds, setFunds] = useState({
    available: 3740.00,
    used: 0.00,
    total: 3740.00
  });

  const addToWatchlist = (stock) => {
    setWatchlist(prev => [...prev, stock]);
  };

  const removeFromWatchlist = (symbol) => {
    setWatchlist(prev => prev.filter(item => item.symbol !== symbol));
  };

  const updateWatchlistPrices = (newPrices) => {
    setWatchlist(prev => 
      prev.map(item => ({
        ...item,
        ltp: newPrices[item.symbol] || item.ltp,
        change: (newPrices[item.symbol] || item.ltp) - item.ltp + item.change,
        changePercent: (((newPrices[item.symbol] || item.ltp) - item.ltp + item.change) / (newPrices[item.symbol] || item.ltp)) * 100
      }))
    );
  };

  const value = {
    watchlist,
    portfolioData,
    indices,
    holdings,
    orders,
    positions,
    funds,
    addToWatchlist,
    removeFromWatchlist,
    updateWatchlistPrices,
    setPortfolioData,
    setIndices,
    setHoldings,
    setOrders,
    setPositions,
    setFunds
  };

  return (
    <GeneralContext.Provider value={value}>
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
