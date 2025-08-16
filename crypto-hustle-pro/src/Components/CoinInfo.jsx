import React from "react";
import { Link } from "react-router-dom";

const CoinInfo = ({ image, name, symbol, price }) => {
    return (
        <div>
            <li className="main-list">
                <img
                    className="icons"
                    src={image}
                    alt={`${name} icon`}
                />
                <Link
                    style={{ color: "white" }}
                    to={`/coinDetails/${symbol}`}
                    key={symbol}
                >
                    {name} ({symbol.toUpperCase()}) <span className="tab"></span> ${price} USD
                </Link>
            </li>
        </div>
    );
};

export default CoinInfo;