class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
    this.toggleVisiblility = this.toggleVisiblility.bind(this);
    }

    toggleVisiblility() {
        this.setState(state => {
            if (state.visibility === true ){
                return {visibility: false}
            } else
            { return {visibility: true}
        }
        })
    }
    render() {
        if (this.state.visibility) {
          return (
            <div>
              <button onClick={this.toggleVisibility}>Click Me</button>
              <h1>Now you see me!</h1>
            </div>
          );
        } else {
          return (
            <div>
              <button onClick={this.toggleVisibility}>Click Me</button>
            </div>
          );
        }
      }
    
}