import React from 'react';

class Card extends React.Component {
    state = {
        users:[
            {
                id: 1,
                name: "Leanne Graham",
                username: "Bret",
                email: "Sincere@april.biz",
                address: {
                    street: "Kulas Light",
                    suite: "Apt. 556",
                    city: "Gwenborough",
                    zipcode: "92998-3874",
                    geo: {
                        lat: "-37.3159",
                        lng: "81.1496"
                    }
                },
                phone: "1-770-736-8031 x56442",
                website: "hildegard.org",
                company: {
                    name: "Romaguera-Crona",
                    catchPhrase: "Multi-layered client-server neural-net",
                    bs: "harness real-time e-markets"
                }
            }
        ]
    };

    render() {
        return (
            <>    
                {this.state.users.map(users => 
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