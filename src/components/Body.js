import ResCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
    useEffect(() => {
    fetchData();
  }, []);

    const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    // Optional Chaining
    setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);
};

if(listOfRestaurants.length === 0){
    return <Shimmer/>
}

  return(
    <div className="body">
      <div className="filter"></div>
      <div className="search">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4.5
            );
            setListOfRestraunt(filteredList);
          }}
          >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <ResCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;