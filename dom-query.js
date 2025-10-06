/*
What is the DOM?

The DOM is a tree-like structure of your web page that browsers create from the HTML.
Each HTML tag (<div>, <button>, etc.) becomes a node/object in JavaScript that you can access and manipulate.
*/
/*
| Method                                      | Example                                  | Description                                                                    |
| ------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------ |
| `document.getElementById("id")`             | `document.getElementById("title")`       | Finds the element with that `id`.                                              |
| `document.getElementsByClassName("class")`  | `document.getElementsByClassName("btn")` | Returns an **HTMLCollection** (like an array) of all elements with that class. |
| `document.getElementsByTagName("tag")`      | `document.getElementsByTagName("p")`     | All elements of that tag.                                                      |
| `document.querySelector("CSS_selector")`    | `document.querySelector(".btn")`         | Finds the **first** element matching a CSS selector.                           |
| `document.querySelectorAll("CSS_selector")` | `document.querySelectorAll(".btn")`      | Finds **all** matching elements (returns a NodeList).                          |

*/
const title = document.getElementById("title");
const button = document.querySelector(".btn");

console.log(title.textContent); // "Welcome!"
console.log(button.innerText);  // "Click me"
