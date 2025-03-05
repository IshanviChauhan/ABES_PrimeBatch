import React from 'react';
import ReactDOM from 'react-dom/client';
import Card, {TITLE} from "./components/card";
import {Button} from "./components/button";

const domRoot = document.getElementById('parent');
const reactRoot = ReactDOM.createRoot(domRoot);

//React components have name in pascal case (first letter of each word is capital)
//React components are just functions that return JSX elements (HTML like syntax)
//React components can be nested inside each other
//React components can be used inside other React components 

const App = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <Button color = "submit">Submit</Button>
            <Button color = "danger">Cancel</Button>
            <Card username = "Ishanvi"></Card>
            <Card username = "Anisha"></Card>
            <Card username = "Kshitiz"></Card>
            <Card username = "Asmit"></Card>
            <Card username = "Arpit"></Card>
            <Card username = {TITLE}></Card>
            {/* or => <Card/> */}
            {/* {Card("Ishanvi Chauhan")} */}
            {/* {Card({username:"Ishanvi Chauhan"})} */}
        </div>
        // React.createElement("h1",{},"Hello from App!")
    );
};
console.log("Hello console");

// reactRoot.render(App());
//OR
reactRoot.render(<App />);