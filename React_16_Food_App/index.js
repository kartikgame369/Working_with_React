import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"
          alt="App Logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          
        </ul>
      </div>
    </div>
  );
};
const RestarantCard =(props)=>{
  const {resData}=props;
  return(
    <div className="res-card">
      <img
      className="res-logo"
      alt="res-logo"
      src="https://img.freepik.com/free-psd/roasted-chicken-dinner-platter-delicious-feast_632498-25445.jpg"
      />
      <h3>{resData.data.name}</h3>
      <h4>{resData.data.cuisines}</h4>
      <h4>{resData.data.avgrating}</h4>
       <h4>{resData.data.deliveryTime}</h4>
      {/* <h4>{resData.minuets}</h4> */}

    </div>
  )
};
const resObj={

};
const Footer=()=>{
  return(
    <div className=""></div>
  )
};
const Body =()=>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestarantCard  res-data={resObj} />
        <RestarantCard/>
        
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body/>
      <Footer/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
