//vanilla js dom manipulation

const heading1 = document.createElement('h1');
// heading.id = "anime";
// heading.textContent = "Onepiece";

 const container = document.getElementById('app');
// container.appendChild(heading);




// console.log(React)
// console.log(ReactDOM)


// console.dir(heading1); //this is the native representation of html native element using dom, to represnt this as obj use dir



// Lets see how we can do in react
const heading2 = React.createElement("h1",{id:"anime"},"Onepiece");

//rendering react element via reactDom
const root = ReactDOM.createRoot(container);
root.render(heading2);
