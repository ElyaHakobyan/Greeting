import React, { Component } from 'react'
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';

class Greeting extends Component {

    state = {
        val: '',
        printVal: false
    }

    handleChage = (e) => {
        this.setState({
            val: e.target.value
        })
    }

    hanldeClick = () => {
        this.setState({
            printVal: true
        })
    }

    resetValue = () => {
        alert(this.state.printVal)
        if(this.state.printVal) {
            this.setState({
                printVal: false
            })
        }

    }


    render() {
        return (
            <div>
                <Button onClick={this.hanldeClick}>Click me!</Button>
                <Input
                    value={this.state.val}
                    onChange={this.handleChage}
                />
                {
                    // ( div </div> this.set)
                    this.state.printVal && <div>{this.state.val}</div>
                  
                }
                {this.resetValue()}
            </div>
        );
    }
}

export default Greeting


