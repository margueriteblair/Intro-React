const MyComponent = function() {
    // change code below this line
   return (
     <div>Hello World</div>
   )
}

//components are a core part of react, everything in React is a component and here this is how we create one
//two ways to make a React component: 1. use a JS function, defining a component in this way creates a stateless functional component
//a stateless component is one that can receive data and render it, but it does not manage or track changes to data
//basically, you write a JS function that returns JSX

//the other way to create a React component is with ES6 class syntax
//the class extents React.Component()
//this means that the class then has many react features
//put your htmlelements within the render() {}

class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // change code below this line
  return (
    <div>
    <h1>Hello React!</h1>
    </div>
  )
  
  
      // change code above this line
    }
  };
  