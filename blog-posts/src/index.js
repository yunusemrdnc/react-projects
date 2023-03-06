import React from 'react';
import ReactDOM from 'react-dom';
import User from "./components/User";

const friends = [
    {
        id: 1,
        name: " Ali: ",
        text: " Merhabalar! ",
    },
    {
        id: 2,
        name: " Ayşe: ",
        text: " Bugün hava çok güzel! ",
    },
    {
        id: 3,
        name: " Ahmet: ",
        text: " İyi akşamlar! ",
    },
];

function App() {
    return (
        <>
            <User
                friends={friends}
            />
        </>
    );
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)