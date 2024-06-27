
import RestaurantConatiner from "./RestaurantContainer";
import { useState } from "react";
import listObjData from "../uitils/mockData";




const BodyContainer = () =>{
    const [listObj, setListObj] = useState(listObjData)
    return(
        <div className="body-section">
            <button className="btnTop" onClick={() =>{
             let filterData =   listObj.filter(
                    (item) => item.data.avgRating > 4.5)
                    console.log(listObj)
                setListObj(filterData)
            }}>Click me</button>

            <div className="restorent-setion">
            {
                listObj.map((restorent, index) => <RestaurantConatiner key={restorent.data.id} restData={restorent} /> )
            } 
            </div>
        </div>
    )
}

export default BodyContainer