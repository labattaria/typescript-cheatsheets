// A special feature of working with the DOM structure in TS is that it provides many special interfaces for this.

// Node - Any node on the page: text, image content, any elements...
// Contains only the most basic properties and methods.

// Element - Any elements on the page, including invinsible elements.
// Contains the basic properties and methods inherent in all elements. Getting it without type assertion.

// HTMLElement - Any html elements on the page. Contains more specific properties and methods inherent in elements.

// HTMLInputElements, HTMLParagraphElement, HTMLAnchorElement etc. - Certain html elements on the page.
// Contain their specific properties and methods in addition to general.

// All these interfaces are needed to clearly indicate what we are working with and correct access to the required properties/methods.

const box1 = document.querySelector(".box") as HTMLElement;
const p = document.querySelector(".paragraph") as HTMLParagraphElement;