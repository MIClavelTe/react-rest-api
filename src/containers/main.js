import React from 'react';
import Card from '../components/Card';

class Main extends React.Component {
    state = {
        users:[]
    };

    handleClick = () => {
        console.log("hello")
        this.fch()
    }

    fch = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result => {
            console.log(result)
            this.setState({users: result})
        })
    }

    componentDidMount () {
        this.fch()
    }

    handleUserDelete = id => {
        this.setState( state => (
            { users: state.users.filter( (value, index) => index !== id ) }
        ))
    }

    render () {
        return (
            <>
                {this.state.users.map((user,index) => 
                    <Card 
                        user={user} 
                        key={user.id} 
                        onUserDelete={this.handleUserDelete} 
                        cardIndex={index}
                    />
                )}
                <button onClick={this.handleClick}>Fetch</button>
            </>
        );
    };
};

export default Main;