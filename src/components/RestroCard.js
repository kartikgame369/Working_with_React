import { CDN_url } from "../utils/contants";


const RestarantCard =(props)=>{
  const {resData}=props;
  return(
    <div className="res-card">
      <img
      className="res-logo"
      alt="res-logo"
      src={CDN_url + cloudinaryImageId}
      />
      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines}</h4>
      <h4>{resData.data.avgrating}</h4>
       <h4>{resData.data.deliveryTime}</h4>
      {/* <h4>{resData.minuets}</h4> */}

    </div>
  )
};

export default RestarantCard;