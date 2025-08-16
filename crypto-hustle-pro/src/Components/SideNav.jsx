import React from 'react';
import CryptoScam from './CryptoScam';

const SideNav = () => {
  return (
    <div className="sideNav">
      <h2>CoinGecko Guide</h2>
      <div style={{ padding: "10px", textAlign: "left" }}>
        <h3>Getting Started</h3>
        <p>Welcome to CryptoHustle powered by CoinGecko! Here's what you can do:</p>
        <ul>
          <li>View top 100 cryptocurrencies by market cap</li>
          <li>Search coins by name or symbol</li>
          <li>Track real-time USD prices</li>
        </ul>
        
        <h3>Tips</h3>
        <p>💡 Use the search bar for quick filtering</p>
        <p>📈 Market cap ranking included</p>
        <p>🔄 Data refreshes automatically</p>
        
        <h3>Market Info</h3>
        <p>Powered by CoinGecko's reliable market data</p>
        <p>Prices are updated in real-time using CoinGecko's API</p>

        <h3>Scam Alerts</h3>
        <CryptoScam />
      </div>
    </div>
  );
};

export default SideNav;