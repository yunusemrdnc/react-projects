import React from 'react';
import ReactDOM from 'react-dom';
import SingleComment from './SingleComment';
import profile1 from './image/img1.png';
import profile2 from './image/img2.png';
import profile3 from './image/img3.png';
import UserCard from './UserCard';

const App = () => {
    return (
        <div className='ui comments'>
            <UserCard>
                <SingleComment
                    name='Alex'
                    date='Today at 5:00 PM'
                    text='It is amazing'
                    picture={profile3}
                />
            </UserCard>
            <UserCard>
                <SingleComment
                    name='Jack'
                    date='Today at 6:00 PM'
                    text='Great job'
                    picture={profile2}
                />
            </UserCard>
            <UserCard>
                <SingleComment
                    name='Sarah'
                    date='Today at 7:00 PM'
                    text='Thanks'
                    picture={profile1}
                />
            </UserCard>

        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)