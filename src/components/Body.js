import reslist from "../utils/MockData";

const Body =()=>{
  return(
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={()=>{
          listOfRestro = listofrestro.filter(
            (res)=>res.data.avgrating>4
          );
        }}>Top rated restorent </button>
      </div>
      <div className="res-container">
        <RestarantCard  res-data={reslist} />
        <RestarantCard/>
        
      </div>
    </div>
  )
};

export default Body;