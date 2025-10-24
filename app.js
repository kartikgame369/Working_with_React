
import React from "react";
import ReactDOM from "react-dom/client"

const Header =()=>{
    return (
        <div className="header">
            <div className="Logo-container">
                <img src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contect us</li>
                    <li>Cart</li>
                </ul>
            </div>

        </div>
    )
}





const AppLayout = ()=>{
    return (
        <div class="app">
         <Header/>

        </div>
    )
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);