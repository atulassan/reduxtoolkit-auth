import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits :"apple, orage"
        }
    }

    render() {
        return (
            <div><p>About</p></div>
        )
    }
}

export default About;