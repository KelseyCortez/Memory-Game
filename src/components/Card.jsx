import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="Card">
                { this.props.name }
                <br></br>
                { this.props.likes >= 0 ? (
                    <sup>likes: { this.props.likes }</sup>
                ) : '' }
            </div>
        )
    }
}

    export default Card;