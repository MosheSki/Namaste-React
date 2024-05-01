import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId=" +
        resId
    );
    const json = await data.json();
    // console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) return <Shimmer />;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    deliveryTime,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //   console.log(itemCards);

  return (
    <div className="menu">
      {/* <img className="res-logo" alt="logo" src={CDN_URL + cloudinaryImageId} /> */}
      <h1>{name}</h1>
      <h3>"{cuisines.join(", ")}"</h3>
      <h3>{avgRating}⭐</h3>
      <h3>{costForTwoMessage}</h3>

      <h1>Menu</h1>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{" Rs."}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
