# javascript

This is the complete series of JavaScript learnt from the js-hindi series ("Chai aur JavaScript") of [Hitesh Chaudhary](https://youtube.com/playlist?list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&si=s3oyXdYUIC0xutJ4).

Note:- This repository is not forked from his GitHub. I myself practiced and wrote the code here.

It is a learning/practice repository: plain JavaScript files with notes and examples for each topic, plus a few small browser mini-projects. Some placeholder files (`DOM.js`, `oops/lexical_scoping.js`, `asyncjs_projects/two.html`) are currently empty. There is no build system, package manager or test setup.

## Topics Covered

### Basics (`basics/`)
- `learn1.js` – `learn4.js`: variables, data types, type conversion and operations
- `string.js`: strings and string methods
- `nums_and_maths.js`: numbers and the `Math` object
- `dates.js`: the `Date` object

### Core language (root folder)
- `arrays.js` – arrays and array methods
- `objects1.js`, `objects2.js` – objects, object methods, destructuring
- `functions.js` – functions
- `arrowfxn.js` – arrow functions and `this`
- `scope.js` – block/function scope
- `new.js` – IIFEs (immediately invoked function expressions) and control flow notes
- `controlflow.js` – `if`/`else`, `switch`, truthy/falsy values
- `iterations.js` – loops
- `HighOrderArray.js` – `for...of`, `for...in`, `forEach`
- `filtermap.js` – `filter`, `map`, `reduce`
- `1.html` – DOM learning (selecting and manipulating elements)

### Events (`events basics/`)
- `one.html`, `two.html`, `three.html`, `eventbasics.js` – event listeners, event handling, `setInterval` / `clearInterval`

### Advanced / async (`advance/`)
- `promises.js` – creating and consuming promises, `async`/`await`, `fetch`
- `api.html` – `XMLHttpRequest` and its `readyState` values

### OOP (`oops/`)
- `object.js`, `1.js` – objects and constructor functions
- `prototype.js` – prototypes
- `inheritance.js` – prototypal inheritance
- `class.js` – ES6 classes
- `gettersetter.js` – getters and setters
- `mathpi.js` – property descriptors (e.g. on `Math.PI`)
- `bind.html` – `bind` with DOM event handlers

## Mini Projects

| Folder | Project |
| ------ | ------- |
| `Project1/` | Background colour switcher |
| `project2/` | BMI calculator |
| `project3/` | Digital clock showing the local time |
| `project4/` | Number guessing game |
| `project6/` | Random background colour changer with Start/Stop |
| `project 7/` | Keyboard event viewer (key, keyCode, code) |
| `Main Projects/Rock_Paper_Scisser/` | Rock, Paper & Scissors game |

## How to Run

- **`.js` files**: run with Node.js, e.g.

  ```bash
  node basics/learn1.js
  ```

  Many `console.log` statements are commented out; uncomment the ones you want to see.

- **`.html` files and mini projects**: open the `index.html` (or other `.html` file) directly in a web browser. The numbered projects keep their JavaScript in `chaiaurcode.js` next to `index.html`.
