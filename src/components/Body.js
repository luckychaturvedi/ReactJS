const BodyContainer = () =>{
    return(
        <div className="body-section">
            <div className="restorent-setion">
            {
                RestrorentObj.map((restorent, index) => <RestaurantConatiner key={index} restData={restorent} /> )
            } 
              
            </div>
        </div>
    )
}

export default BodyContainer;