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
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="logo" src={CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>"{cuisines.join(", ")}"</h4>
      <h4>{avgRating}⭐</h4>
      <h4>estimate delivery: {resData.info.sla.deliveryTime}min</h4>
    </div>
  );
};

export default RestaurantCard;
