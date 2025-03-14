/**
 * <h1>Timer app using real dom<h1>
    <input placeholder="username">
    button>update time<button>
    <p>time</p>
 */
const container = document.getElementById('rdom');

function renderHTMLElements(){
    const heading = document.createElement('h1');
    heading.textContent = "Timer app using real DOM";
    const inputElement = document.createElement('input');
    inputElement.placeholder = "username";
    const buttonElement = document.createElement('button');
    buttonElement.textContent = "update time";
    buttonElement.addEventListener('click', renderHTMLElements);
    const timeElement = document.createElement('p');
    timeElement.textContent = new Date().toTimeString();

    container.innerHTML = "";
    container.append(heading, inputElement, buttonElement, timeElement)
}
renderHTMLElements();

/** This way we can also only render p element when only time change, but what if i have 1000's of elements rendering, with diff cases
     if (!container.hasChildNodes()) {
        const heading = document.createElement('h1');
        heading.textContent = "Timer app using real DOM";
        const inputElement = document.createElement('input');
        inputElement.placeholder = "username";
        const buttonElement = document.createElement('button');
        buttonElement.textContent = "update time";
        buttonElement.addEventListener('click', renderHTMLElements);
        const timeElement = document.createElement('p');
        timeElement.id = "timer"; // Assign an ID for updating it later
        timeElement.textContent = new Date().toTimeString();

        container.append(heading, inputElement, buttonElement, timeElement);
    } else {
        // Only update the timer element
        document.getElementById('timer').textContent = new Date().toTimeString();
    }
 */
