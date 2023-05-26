import React from "react";
import { render } from "react-dom";
import  ReactDOM from "react-dom/client";

//React elements

// Original react element creating syntax


// const heading= React.createElement(
//     "h1",
//     {id:"heading"},
//     "Hello React"
// )

// root.render(heading);  


//JSX(transpiled before it reaches the JS engine which is done 
// BABEL ,a compiler which converts JSX into regular JS which can be read by thr browser )

// const jsxheading= <h1> HELLOOO JSX </h1>
//    root.render(jsxheading);

// React component

//Functional component
const root= ReactDOM.createRoot(document.getElementById("root"));

// component 1
const Title = () => {
    return (
        <h1>Hey Title</h1>
    );
}
// React  element 1
const Name= (
    <h1>
        Welcome Rijo
    </h1>
)
const number =100000;
//putting component inside component = component composition
// you can write JS inside {} inside JSX

// Component 2
 const Component = () => {
    return (
        <>
        <div id="container">
            <Title /> 
               {/* or <Title></Title> */}
               {/* or {Title()} */}
            {Name}
            <h1>HEY functional component{number}</h1>
        </div>
        </>
    );
}


root.render(<Component/>) 
