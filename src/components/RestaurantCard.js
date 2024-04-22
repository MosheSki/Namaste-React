const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, tags, rating, estimate } = resData?.venue;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="logo" src={resData.image.url} />
      <h3>{name}</h3>
      <h4>"{tags.join(", ")}"</h4>
      <h4>{rating.score}⭐</h4>
      <h4>estimate delivery: {estimate}min</h4>
    </div>
  );
};

export default RestaurantCard;
