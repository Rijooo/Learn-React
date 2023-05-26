import { CDN_URL } from "../utils/constants";

const ResCard = (props) =>{
    const { resData} = props;
    const{name,locality,avgRatingString,costForTwo}= resData?.info;

    return(
        <div className="res-card">
            <img alt="res-logo" src={ CDN_URL+resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{locality}</h4>
            <h4>{avgRatingString} stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    )
}

export default ResCard;