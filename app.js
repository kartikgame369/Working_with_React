//  const heading = React.createElement("h1",{id:"heading" ,xyz:"abc"},"hello world inside react!");
//         const root = ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);

// {} this object for attributes for tages{id:"heading"}
// this returens me as an object 

// paraent and clild class
// reactelement(object )
// at the end it will convert into html and show on the screen
const paraent = React.createElement("div",
    {id:"paraent"},
    [
        React.createElement("div",{id:"child1"},
        [React.createElement("h1",{},"hello its h1 tag "),
            React.createElement("h2",{},"hello its h2 tag")
        ]
    ),
    React.createElement("div",{id:"child2"},
        [React.createElement("h3",{},"hello its h3 tag "),
            React.createElement("h4",{},"hello its h4 tag")
        ]
    )
    ]

);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(paraent);

// replaced but not appended[ root h1 = kartik is here ]
