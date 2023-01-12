const heading = React.createElement("h1",{},"Namaste Everyone")
const heading2 = React.createElement("h2",{},"Namaste Everyone")
const container = React.createElement("div",{id:"container"},[heading,heading2])


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(container);