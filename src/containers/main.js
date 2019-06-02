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

    render () {
        return (
            <>
                {this.state.users.map(user => 
                    <Card user={user} key={user.id}/>
                )}
                <button onClick={this.handleClick}>Fetch</button>
            </>
        );
    };
};

export default Main;