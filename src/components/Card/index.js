import React from 'react';
import styled from 'styled-components'

const Cd = styled.div`
    border: 2px black solid
    width: 300px
    height: 200px
    border-radius: 4px
    margin: 5px
    padding: 5px
    overflow: scroll
`
    const Btn = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid tomato;
    border-radius: 3px; 
    color: tomato;
`

class Card extends React.Component {
    handleClick = () => {
        this.props.onUserDelete(this.props.cardIndex)
    }

    render() {
        return (  
            <Cd>
                <h1>{this.props.user.name}</h1>
                <p>Username: {this.props.user.username}</p>
                <p>Email: {this.props.user.email}</p>
                <Btn onClick={this.handleClick}>Delete</Btn>
            </Cd>
        );
    };
};

export default Card;