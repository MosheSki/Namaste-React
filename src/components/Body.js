import RestaurantCard from "./RestaurantCard.js";
import resList from "../utils/mockData.js";
import { useState } from "react"; //React Hook

const Body = () => {
  //Local State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  // //Normal JS Variable
  // let resList = [];

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.venue.rating.score >= 8.8
            );

            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.venue.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
