# Real DOM and Virtual DOM

## Real DOM (Manual DOM Manipulation)

- Real DOM meaning is  nodes which are in memory and it is appering or rendering in UI, those are real DOM elements  
- When `renderHTMLElements()` is called, the entire DOM inside `container` is **cleared and re-created**.
- This means every element (`<h1>`, `<input>`, `<button>`, `<p>`) is **removed and replaced**, even if only the time has changed.
- This makes updates inefficient since the entire subtree is reconstructed.

## Virtual DOM (React’s Diffing Algorithm)

- When it comes to virtual dom, these elements are only in memory we cant see on ui, that is why these are called virtual. when root.render is called, react prepares Tree structure and tree structure is synced on ui. Overall elements which are created by using react.createElemet() , This comes under VDOM. VDOM is not RDOM
- React first **creates a virtual representation** of the DOM tree.
- When `renderReactElement()` is triggered, React compares the new Virtual DOM with the previous one.
- It identifies the **changes** (only the `<p>` element with time) and updates **only that part** in the actual DOM.
- Other elements (`<h1>`, `<input>`, `<button>`) **remain untouched**, making updates more efficient.

By leveraging the **Virtual DOM**, React minimizes direct manipulation of the actual DOM, improving **performance and rendering efficiency**.

The Main Advantage of VDOM, when we create a big application, In React optimally,whatever elements changes, only those elements are rendered or updated in RealDOM, not the whole DOM like realDOM while using js

## How does React actually do this behind the scences, how it is changing only selective elements and updating in realDOM

- **React uses Diffing Algorithm and Reconciliation (if i understand this two processes, I can understand the how react effectively updating ui)**

- IN VDOM
1st render vdom 1  
Fragment
  |
/  |      \       |
h1 input  button   p(timer)

- Only on first Render VDOM is synced with UI/RDOM .

2nd render
VDOM 2
Fragment
  |
/  |      \       |
h1 input  button   p(timer)

- From the above example when i click on the button , the timer should update in p. So on 2nd render, it is not directly synced with RDOM on ui, it will do comparison with existing VDOM (here it is VDOM 1) when it compares it observes only p(timer) is changed . After comparison is done it will figure out the differences , in this case it is only one element p(timer) differences = [p] (it follows different Data structure)
After finding differnces. React update only the nodes which are effected in this comparison process. Only those are updated in RDOM. In this case only p(timer) is updated

- This whole process is called **DIFFING algorithm** (this algorithm is done in memory itself)

- After identifying the differences and understanding their impact on the Real DOM, the process of applying these changes by syncing with the Real DOM is called **Reconciliation**
