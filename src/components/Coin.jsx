import { Link } from "react-router-dom";
import { TrendingDown, TrendingUp } from "../icons/icon";
import { currencyFormat } from "../utilities";

const Coin = ({ coin }) => {
  console.log(coin);
  return (
    <Link to={`/coin/${coin.id}`}>
      <div className="grid grid-cols-3 sm:grid-cols-4 font-light p-2 rounded border-red-200 border-b hover:bg-red-300">
        <div className="flex items-center gap-1 w-full">
          <img className="w-6" src={coin.image} alt={coin.name} />
          <p>{coin.name}</p>
          <span className="text-xs hidden sm:block uppercase">
            ({coin.symbol})
          </span>
        </div>
        <span className="w-full text-center">
          {currencyFormat(coin.current_price)}
        </span>
        <span
          className={`flex gap-1 ${
            coin.price_change_percentage_24h < 0
              ? "text-red-500"
              : "text-green-500"
          }`}
        >
          {coin.price_change_percentage_24h < 0 ? (
            <TrendingDown />
          ) : (
            <TrendingUp />
          )}
          {coin.price_change_percentage_24h}
        </span>
        <div className="hidden sm:block">
          <p className="font-semibold">Market Cap</p>
          <span>{currencyFormat(coin.market_cap)}</span>
        </div>
        {/* <div className="hidden sm:block">
          <p className="font-semibold">Volume</p>
          <span>{currencyFormat(coin.total_volume)}</span>
        </div> */}
      </div>
    </Link>
  );
};

export default Coin;
