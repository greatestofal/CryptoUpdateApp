import React from "react";
import useAxios from "../api/useAxios";
import TrendingCoin from "./TrendingCoin";

const Trending = () => {
  const { response } = useAxios("search/trending");
  return (
    <div className=" mt-8">
      <h1 className="text-3xl mb-2 text-red-800"> Trending</h1>
      {response &&
        response.coins.map((coin) => (
          <TrendingCoin key={coin.item.coin_id} coin={coin.item} />
        ))}
    </div>
  );
};

export default Trending;
