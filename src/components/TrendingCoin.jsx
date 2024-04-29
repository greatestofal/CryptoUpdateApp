const TrendingCoin = ({ coin }) => {
  return (
    <>
      <div className="font-light mb-2 p-2 border-gray-200 border-2 rounded hover:bg-red-200 hover:grow">
        {/* <img src={coin.image} alt={coin.name} /> */}
        <div className="flex items-center gap-2">
          <span className="text-xs">{coin.score + 1}.</span>
          <img className="w-6" src={coin.small} alt={coin.name} />
          <p className="font-semibold">{coin.name}</p>
          {/* <small className="text-xs">{coin.symbol}</small> */}
          <small className="text-xs">#{coin.market_cap_rank}</small>
        </div>

        {/* <p className="price">${coin.current_price}</p>
        <p className="price">${coin.price_change_percentage_24h}</p> */}
      </div>
    </>
  );
};

export default TrendingCoin;
