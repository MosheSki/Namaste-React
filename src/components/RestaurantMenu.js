import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

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
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="text-center ">
      {/* <img
        className="w-40 m-auto p-4"
        alt="logo"
        src={CDN_URL + cloudinaryImageId}
      /> */}
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">"{cuisines.join(", ")}"</h3>
      <h3 className="my-4">
        {costForTwoMessage} - {avgRating}⭐
      </h3>
      {categories.map((c, index) => (
        <RestaurantCategory
          key={c?.card?.card.title}
          data={c?.card?.card}
          showItems={index === showIndex ? true : false} //fix the toggle button
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
