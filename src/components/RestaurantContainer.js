import { CLOUD_URL } from "../uitils/constant";

const RestaurantConatiner = (props)=>{
    const data = props.restData;

    const {cloudinaryImageId, avgRating, name, areaName} = props.restData?.data

   const cuisines = props.restData?.data.cuisines.join(", ")
    return(
        <div className="cart-setion">
                <img src={CLOUD_URL+cloudinaryImageId} 
                width="100" />
                <h4 style={{fontSize: "20px"}}>{name} <span>,{areaName}</span></h4>
                <div className="">
                    <span>Avrage Rating :- {avgRating}, </span>
                   
                </div>
                <h6>{cuisines}</h6>
            </div>
    )
}

export default RestaurantConatiner;