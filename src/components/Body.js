import RestaurantCard, {withPromotedLabel}from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { RESCARD_API } from "../utils/constants";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";

const Body = () => {
  // Local State Variable - Super powerful variable
  const [listOfRestaurants, setListOfRestraunt] = useState([]);
  const [searchedRestaurant, setSearchedRestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard); 

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

const onlineStatus = useOnlineStatus();

if(onlineStatus === false) 
return (
     <h1>No internet Please check your internet connection</h1>
)

  return (
    <div className="body bg-slate-200">
      <div className="filter flex">
        <div className="search m-2 p-2">
          <input type="text" className=" border border-solid border-black " value={searchText}
          onChange={ (e) => {
            setsearchText(e.target.value);
          }}  />
          <button className=" px-3 py-0.5 mx-3 bg-emerald-100 rounded-xl" 
          onClick={ () =>{
             const filteredRestaurant = listOfRestaurants.filter(
              (res) => res.data.name.toLowerCase().includes(searchText.toLowerCase()) 
             );
             setSearchedRestaurant(filteredRestaurant);
          }}>search</button>
       </div>
       <div className="search m-2 p-2">
          <button
          className=" bg-emerald-100 px-3 py-0.5 rounded-xl"
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
        </div>
        <div className=" flex flex-wrap justify-center m-1 ">
        {searchedRestaurant.map((restaurant) => (
          <Link
            key={restaurant.data.id}
            to={"/restaurants/" + restaurant.data.id}
          >
            {
              restaurant.data.promoted ? (
                <RestaurantCardPromoted resData={restaurant}/>
              ) : (<RestaurantCard resData={restaurant} />)
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;