import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
      } = resData?.data;

   return (
    <div className=" p-3 m-3 w-[250px] flex-wrap h-[550px] hover:bg-white bg-slate-300" >
      <img
        className="res-logo rounded-xl m-2 p-2 "
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className=" m-3 font-bold">{name}</h3>
      <h4 className=" m-3">{cuisines.join(", ")}</h4>
      <h4 className=" m-3">{avgRating} stars</h4>
      <h4 className=" m-3">₹{costForTwo / 100} FOR TWO</h4>
      <h4 className=" m-3">{deliveryTime} minutes</h4>
    </div>
  );
};

//Higher order component
export const withPromotedLabel = (RestaurantCard) =>{
  return (props) => {
    return(
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;