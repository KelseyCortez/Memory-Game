import React, { Component } from 'react';
import './Card.css';

class MemoryCard extends Component {
    constructor(props) {
        super(props);
        this.state = {isFlipped:false};
    }
    clickHandler() {
        this.setState({
            isFlipped: !this.state.isFlipped,
        })
       
        }
    render() {
    let innerClass = 'MemoryCard_inner';
    if(this.state.isFlipped == true) {
        innerClass += ' flipped';
    }
    
    return (
            <div className="MemoryCard" onClick ={this.clickHandler.bind(this)}>
                <div className= {innerClass}>
                    <div className="MemoryCard_back">
                        <img src="https://www.digitalcrafts.com/img/logo-wrench-white.png"></img>
                    </div>
                    <div className="MemoryCard_front">
                        ∆
                        </div>
                </div>
            </div>

        )
    }
}

export default MemoryCard;