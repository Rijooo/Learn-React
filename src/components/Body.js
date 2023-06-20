import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { RESCARD_API } from "../utils/constants";
import {Link} from "react-router-dom";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [searchedRestaurant, setSearchedRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
    useEffect(() => {
    fetchData();
  }, []);

    const fetchData = async () => {
    const data = await fetch(RESCARD_API);
    const json = await data.json();
    console.log(json);
   
    if (listOfRestaurants === 0) return <Shimmer/>
    // Optional Chaining
    setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);
    setSearchedRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    
};

// conditional rendering
// if(listOfRestaurants.length === 0){
//     return <Shimmer/>
// }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText}
          onChange={ (e) => {
            setsearchText(e.target.value);
          }}  />
          <button className="search-btn" 
          onClick={ () =>{
             const filteredRestaurant = listOfRestaurants.filter(
              (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()) 
             );
             setSearchedRestaurant(filteredRestaurant);
          }}>search</button>
       </div>
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
        {searchedRestaurant.map((restaurant) => (
          <Link
            key={restaurant.data.id}
            to={"/restaurants/" + restaurant.data.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;