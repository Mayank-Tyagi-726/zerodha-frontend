import React from "react";

const Apps = () => {
  const apps = [
    {
      name: "Kite",
      description: "Trading platform",
      icon: "📈",
      link: "https://kite.zerodha.com",
    },
    {
      name: "Console",
      description: "Backoffice",
      icon: "⚙️",
      link: "https://console.zerodha.com",
    },
    {
      name: "Coin",
      description: "Mutual funds",
      icon: "💰",
      link: "https://coin.zerodha.com",
    },
    {
      name: "Varsity",
      description: "Learning platform",
      icon: "📚",
      link: "https://zerodha.com/varsity",
    },
    {
      name: "Smallcase",
      description: "Thematic investing",
      icon: "📊",
      link: "https://www.smallcase.com",
    },
    {
      name: "Sensibull",
      description: "Options trading",
      icon: "📉",
      link: "https://www.sensibull.com",
    },
  ];

  return (
    <div className="apps">
      <h3>Apps</h3>
      <div className="row">
        {apps.map((app, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card h-100">
              <div className="card-body text-center">
                <div className="app-icon mb-3" style={{ fontSize: "2rem" }}>
                  {app.icon}
                </div>
                <h5 className="card-title">{app.name}</h5>
                <p className="card-text text-muted">{app.description}</p>
                <a 
                  href={app.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  Open
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
