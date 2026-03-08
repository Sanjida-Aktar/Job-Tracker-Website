# Answers to Questions

## 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll bellow- 
### getElementById 
getElementById used id only. it use when we know unique id of an element. it must be unique in the DOM.
### getElementsByClassName
getElementsByClassName is used for class name. When selecting multiple elements by class.
### querySelector
querySelector is used for any valid css selector ("#id", ".class"). Flexible single-element selection. returns only the first match.
### querySelectorAll
querySelectorAll is used for any valid CSS selector.When selecting multiple elements with complex rules. NodeList does not auto-update when DOM changes


## 2. How do you create and insert a new element into the DOM?
You can create elements dynamically using document.createElement() and then insert them with methods like appendChild, append, prepend, or insertBefore.
Other insertion methods:
- append() → adds nodes or text at the end.
- prepend() → adds nodes or text at the beginning.
- insertBefore(newNode, referenceNode) → inserts before a specific element.


## 3. What is Event Bubbling? And how does it work?
Event bubbling is the process where an event triggered on a child element propagates (bubbles up) through its ancestors in the DOM tree.

## 4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is a technique where you attach a single event listener to a parent element to handle events on its child elements, using event bubbling.


## 5. What is the difference between preventDefault() and stopPropagation() methods?
the difference between preventDefault() and stopPropagation() :

### preventDefault():
Stops the browser’s default action for an event. It doesn’t affect event bubbling or capturing.

##### stopPopagation():
Stops the event from propagating through the DOM tree. It doesn’t affect the default browser behavior.

---


