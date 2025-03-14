
function render(reactElement, containerDom) {
    //create a domElement
    const domElement = document.createElement(reactElement.type);
    //update the properties
    domElement.textContent = reactElement.children;
    for (const key in reactElement.props) {
        const value = reactElement.props[key];
        domElement.setAttribute(key, value);
    }
    //put in container
    containerDom.appendChild(domElement);
}
const reactElement = {
    type: 'a',
    props: {
        href: 'https://aniwatchtv.to/home'
    },
    children: 'click here'
}
const containerDom = document.getElementById('root');
render(reactElement, containerDom)
