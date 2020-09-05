class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    } 
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          {/* change code below this line */}
        <Fruits />
        <Vegetables />
          {/* change code above this line */}
          {/*Comments must be written like this inside the .jsx comp */}
          {/*We rendered fruits and vegs inside of TypesOfFoods */}
        </div>
      );
    }
  };
  
  // change code below this line
  ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))
//ReactDOM.render() takes two arguments, the first one being the react component you want to render, the second is the target node
//the second argument is often a document.getElementById()
//ReactDOM.render() goes outside of the actual composition of the component