import React, { Component } from 'react';

class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits :"apple, orage"
        }
    }

    componentDidUpdate() {
        console.log("Home Page has been updated" + new Date());
    }

    componentDidMount() {
        console.log('component Did mount');
        console.log("+++++++++++++++component did amount", this.state.fruits);
    }

    render() {
        console.log("+++++++++++++++Render", this.state.fruits);
        return (
            <div><p>Hompage</p></div>
        )
    }
}

export default Categories;    