import React from 'react';
import styled from 'styled-components'

const Cd = styled.div`
    border: 2px black solid
    width: 300px
    height: 200px
    border-radius: 4px
    margin: 5px
    padding: 5px
`

class Card extends React.Component {
    render() {
        return (  
            <Cd>
                <h1>{this.props.user.name}</h1>
                <p>Username: {this.props.user.username}</p>
                <p>Email: {this.props.user.email}</p>
            </Cd>
        );
    };
};

export default Card;