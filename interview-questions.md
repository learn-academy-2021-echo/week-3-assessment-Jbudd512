# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is `this` in JavaScript?

Your answer: `this` is a keyword used to reference properties or methods within an object or class. It is typically used at the start of a command chain (ie this.state.people).

Researched answer: According to MDN, `this` is a property of an execution context, which is used in reference to an object. According to the syllabus, `this` is a javascript keyword that references an object.

2. What is React? Why would you use it?

Your answer: React is an open source javascript library which is widely used to create advanced UI/UX front-end websites.

Researched answer: React is an open-source javascript library used for building user interfaces, typically single page applications.

3. Which lifecycle method is required in a React class component?

Your answer: The lifecycle method render() is required for creating class components. It is typically used at the start of the lifecycle.

Researched answer: Along side render(), there are several methods which can be used during the mounting lifecycle phase: constructor(), getDerivedStateFromProps(), and componentDidMount(). Of these, constructor() and render() are the only ones which are required (for OOP at least).

4. What is JSX? What is one notable difference between HTML and JSX?

Your answer: I don't remember what JSX stands for exactly (Javascript and then something), but it is a code format used inside of HTML to allow for Javascript usage.

Researched answer: JSX is a Javascript hybrid between Javascript and XML. It extends JavaScript's syntax so that HTML code can be used in conjunction with it. Just to note, there are some slight difference between JavaScript syntax and JSX syntax.

5. What is yarn? What file(s) are modified in a React application when you run yarn?

Your answer: Yarn is a program which works through terminal to download dependencies and create React applications from scratch. It is also used to run Jest for code testing.

Researched answer: Yarn is a package manager for coding. It is a dependency management tool, used for Node.js, React, etc.

6. STRETCH: What is an anonymous function in JavaScript?

Your answer: I frankly don't know the answer to this question. If this was mentioned in class, I don't remember it.

Researched answer: An anonymous function is apparently just an unnamed function. It appears to be the old way to write a function (ie let x = function(){};)

## Looking Ahead: Terms for Next Week

1. Conditional rendering: Conditional rendering is when you have some components render only while certain states of your react application are active. For example, if a user is logging in, you can create a component which greets the user, which becomes inactive when they log out. They are rendered into the code using either traditinal if statements or ternary operators.

2. Props: Props is a type of object which acts as an arguments, which can be passed into components. They are passed into components via component calls.

3. JavaScript Events: An event is the change of the state of an object in Javascript. Examples of events include onClick, onSubmit, onMouseOver, onMouseOut, etc.

4. Object-oriented programming: Object-oriented programming is a programming model which revolves around using objects and data, as opposed to functions or logic.

5. Ruby: Ruby is an interpreted, high level programming language, which solely relies on object-oriented programming.
