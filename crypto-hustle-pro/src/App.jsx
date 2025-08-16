import { useState, useEffect } from 'react'
import './App.css'
import CoinInfo from "./Components/CoinInfo";
import SideNav from "./Components/SideNav";

function App() {
  const [list, setList] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchAllCoinData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        );
        const json = await response.json();
        setList(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAllCoinData();
  }, []);

  const searchItems = searchValue => {
    setSearchInput(searchValue);
    if (searchValue !== "") {
      const filteredData = list.filter((item) => 
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.symbol.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults([]);
    }
  }; 

  return (
    <div className="whole-page">
      <div className="author-info">
        <div className="author-name">Aryan Lakahani</div>
        <div className="Z-number">Z Number- Z23724811</div>
      </div>
      <SideNav />
      <h1>My Crypto List</h1>
      <input
        type="text"
        placeholder="Search..."
        onChange={(inputString) => searchItems(inputString.target.value)}
      />
      <ul>
        {searchInput.length > 0
          ? filteredResults.map((coin) => (
              <CoinInfo
                key={coin.id}
                image={coin.image}
                name={coin.name}
                symbol={coin.symbol}
                price={coin.current_price}
              />
            ))
          : list.map((coin) => (
              <CoinInfo
                key={coin.id}
                image={coin.image}
                name={coin.name}
                symbol={coin.symbol}
                price={coin.current_price}
              />
            ))}
      </ul>
    </div>
  );
}

export default App;
