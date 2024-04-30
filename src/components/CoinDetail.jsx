import React from "react";
import useAxios from "../api/useAxios";
import { useParams } from "react-router-dom";

const CoinDetail = () => {
  //   this targets the id when clicked
  const { id } = useParams();
  const { response } = useAxios(
    `coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`
  );
  // loading screen
  if (!response) {
    return <div> Loading...</div>;
  }

  return (
    <div className="my-6">
      <div className="flex gap-2 items-center">
        <img src={response.image.small} alt={response.name} />
        <h1 className="text-2xl font-bold capitalize mb-2 font-bold">
          {response.name}
        </h1>
      </div>
    </div>
  );
};

export default CoinDetail;
