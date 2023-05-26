import ResCard from "./ResCard";
import resList from "../utils/mockdata";
import { useState } from "react";



const Body = () => {
    const[listOfRes, SetListOfRes]=useState(resList);
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={()=>{
                 const filterList = listOfRes.filter(
                    (e) => e.info.avgRatingString > 4.5
                  );
                  SetListOfRes(filterList);
                }}>Top Rated Restaurants</button>
            </div> 
            <div className="restaurant-container">
                {/* <ResCard resData={resList[0]}/>
                <ResCard resData={resList[1]}/>
                <ResCard resData={resList[2]}/>
                <ResCard resData={resList[3]}/> */}
                 {
                    listOfRes.map(restaurant => <ResCard key={restaurant.info.id}resData={restaurant}/>)
                }
            
            </div>
        </div>  
    )
}

export default Body;