import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    costForTwo,
    avgRating,
    deliveryTime,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <img
        className="res-logo rounded-lg"
        alt="logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="py-2">"{cuisines.join(", ")}"</h4>
      <h4 className="py-2">{avgRating}⭐</h4>
      <h4 className="py-2">
        estimate delivery: {resData.info.sla.deliveryTime}min
      </h4>
    </div>
  );
};

export default RestaurantCard;
