import reslist from "../utils/MockData";

const Body =()=>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestarantCard  res-data={reslist} />
        <RestarantCard/>
        
      </div>
    </div>
  )
};

export default Body;