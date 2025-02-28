// const parent = document.getElementById('parent');
// const ul = document.createElement('ul');
// const li1 = document.createElement('li');
// li1.innerText = "Item1";
// const li2 = document.createElement('li');
// li2.innerText = "Item2";
// const li3 = document.createElement('li');
// li3.innerText = "Item3";

// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);

// parent.appendChild(ul);

/*-------------------------------------------------------------------------*/
// console.log(React);
// console.log(ReactDOM);

// const domRoot = document.getElementById('parent');
// const reactRoot = ReactDOM.createRoot(domRoot);

//const variable_name = React.createElement('tag_name', {options}, 'text_content or children');
// const li1 = React.createElement('li', {className: 'text-li'}, 'Item1');
// const li2 = React.createElement('li', {className: 'text-li'}, 'Item2');
// const li3 = React.createElement('li', {className: 'text-li'}, 'Item3');

// const ul = React.createElement('ul', {className: 'text-ul'}, [li1, li2, li3]);

// reactRoot.render(ul);

/*-------------------------------------------------------------------------*/
const domRoot = document.getElementById('parent');
const reactRoot = ReactDOM.createRoot(domRoot);

// const title = React.createElement('h1', {}, 'Hello from React DOM!');
// console.log("Type of title :",typeof(title));
// console.log("Title :",title);

//Creating my React element
// const title2 = {
//     $$typeof: Symbol.for("react.element"),
//     type: "h1",
//     key: null,
//     ref: null,
//     props: {
//         style: {color: "purple"},
//         children: "Hello from React DOM!"
//     },
//     _owner: null,
//     _store: {},
// }

//React element
const title2 = <h1>Hello from JSX</h1>; 
// reactRoot.render(title2);

//React component
const Title3 = () => {
    return <h1>Hello from JSX Again</h1>
};

// reactRoot.render(Title3()); 
// OR
reactRoot.render(<Title3/>);