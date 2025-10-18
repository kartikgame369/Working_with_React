//  const heading = React.createElement("h1",{id:"heading" ,xyz:"abc"},"hello world inside react!");
//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);

// {} this object for attributes for tages{id:"heading"}
// this returens me as an object 

// paraent and clild class
// reactelement(object )
// at the end it will convert into html and show on the screen
import React from "react";
import ReactDOM from "react-dom/client";

const paraent = React.createElement("div",
    {id:"paraent"},
    [
        React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"hi there is no change  "),
            React.createElement("h2",{},"hii its working")
        ]
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h3",{},"i importated the react  "),
            React.createElement("h4",{},"type = module for error"),
        ]
    )
    ]

);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(paraent);

// replaced but not appended[ root h1 = kartik is here ]
