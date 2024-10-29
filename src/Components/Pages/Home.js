/*function Home() {
    return(
        <>
            <h1>Home Page</h1>
        </>    
    )
}

export default Home;*/

import React, {Component} from "react";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.handlClickButton =  this.handlClickButton.bind(this);
    }
    
    handlClickButton(){
        this.setState(prevState => ({
            count: prevState.count + 1
          }));    
    }

    componentDidMount() {
        console.log("Component did mount");
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate this.state: ", this.state);
        console.log("shouldComponentUpdate nextProps: ", nextProps);
        console.log("shouldComponentUpdate nextState: ", nextState);

        return this.state.count !== nextState.count;
    }

    render() {
        console.log(!this.state.count ? 'Mounting <-> Rendered successfully' : 'Updating <-> Re - Rendered/Updated successfully');
        return (
            <div>
                <p><strong>Home Page</strong></p>
                <button onClick={this.handlClickButton} >button</button>
                <p><strong>{this.state.count}</strong></p>
            </div>
        )
    }
}

export default Home;
