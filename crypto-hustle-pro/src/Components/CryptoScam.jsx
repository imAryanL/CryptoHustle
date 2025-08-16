import React from "react";

const CryptoScam = () => {
    const commonScams = [
        "BitConnect - Ponzi Scheme",
        "OneCoin - $4B Fraud",
        "PlexCoin - Fake ICO",
        "PlusToken - $3B Pyramid",
        "Mining Max - Mining Scam",
        "BitClub Network - $722M Fraud",
        "QuadrigaCX - Exit Scam",
        "Pincoin - Token Scam"
    ];
    
    return (
        <div className="scam-alert">
            <p style={{ color: '#ff6b6b', fontWeight: 'bold' }}>
                ⚠️ Recent Crypto Scams to Avoid:
            </p>
            <ul className="side-list">
                {commonScams.map((scam) => 
                    <li key={scam} 
                        style={{ 
                            color: '#ff6b6b',
                            padding: '8px',
                            margin: '5px 0',
                            backgroundColor: 'rgba(255, 107, 107, 0.1)',
                            borderRadius: '4px',
                            transition: 'all 0.2s ease'
                        }}>
                        {scam}
                    </li>
                )}
            </ul>
            <p style={{ 
                fontSize: '0.9em', 
                marginTop: '15px',
                padding: '10px',
                backgroundColor: 'rgba(76, 175, 80, 0.1)',
                borderRadius: '4px',
                color: '#4CAF50'
            }}>
                🔒 Always DYOR (Do Your Own Research) before investing!
            </p>
        </div>
    );
};

export default CryptoScam;