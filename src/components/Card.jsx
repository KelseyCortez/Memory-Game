import React, { Component } from 'react';
import './Card.css';

class MemoryCard extends Component {
    render() {
    let innerClass = 'MemoryCard_inner';
    if(this.props.isFlipped === true) {
        innerClass += ' flipped';
    }
    
    return (
            <div className="MemoryCard" onClick ={this.props.pickCard}>
                <div className= {innerClass}>
                    <div className="MemoryCard_back">
                        <img src="https://www.digitalcrafts.com/img/logo-wrench-white.png" alt=""></img>
                    </div>
                    <div className="MemoryCard_front">{this.props.symbol}</div>
                </div>
            </div>

        )
    }

}
export default MemoryCard;