const parent= React.createElement("div", {id:"parent"} , React.createElement("child",{id:"child"}, React.createElement("h1",{}, "I'm h1 tag")))






const heading= React.createElement("h1",
{ id:"heading" },
"Hello world");

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);