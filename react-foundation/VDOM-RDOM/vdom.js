
const root = ReactDOM.createRoot(document.getElementById('vdom'));

function renderReactElement(){
    const heading = React.createElement("h1", null, "Timer app using - Virtual dom");
    const inputElement = React.createElement("input",{placeholder:"username"});
    const buttonElement = React.createElement("button",{onClick:renderReactElement},"update time");
    const timerElement = React.createElement("p",null, new Date().toTimeString());

    root.render([heading, inputElement, buttonElement, timerElement])
}
renderReactElement();
