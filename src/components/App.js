import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        // this.state={date:new Date()}
        this.state = { hour: null }
        this.state = { minute: null }
        this.state = { second: null }

    }
    updateDate() {
        // this.setState({date: new Date()})
        this.setState({ hour: new Date().getHours() })
        this.setState({ minute: new Date().getMinutes() })
        this.setState({ second: new Date().getSeconds() })

    }
    componentDidMount() {
        this.time = setInterval(() => { this.updateDate() }, 1000);
    }
    componentWillMount() {
        clearInterval(this.time);
    }
    render() {
        let hour = "";
        let minute = this.state.minute;
        let second = this.state.second;
        this.state.hour > 12 ? hour = this.state.hour - 12 : hour = this.state.hour
        this.state.hour < 10 ? hour = "0" + hour : hour;
        this.state.minute < 10 ? minute = "0" + minute : minute;
        this.state.second < 10 ? second = "0" + second : second;
        return (
            <div className="Clock">
                <h3 id="time">{hour}:{minute}:{second} {this.state.hour<11 ? `AM` : `PM`}
                </h3>
            </div>
        )
    }
}


export default App;
