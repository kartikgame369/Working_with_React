

import react from "react"
import reactDOM from "react-dom/client"

// React Element

const heading = React.createElement("h1",{id:"heading"},"hii its react 3part");
const root = React.createRoot(document.getElementById("root"));
root.render(heading)
