import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <>    
                {this.props.users.map(users => 
                    <div>
                        <h1>{users.name}</h1>
                        <p>Username: {users.username}</p>
                        <p>Email: {users.email}</p>
                    </div>
                )}
            </>
        );
    };
};

export default Card;