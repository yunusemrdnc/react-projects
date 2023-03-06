function User({ friends }) {
    return (
        <>
            {friends && friends.map((friend) =>
                <div key={friend.id}>
                    <h1>{friend.name}</h1>
                    {friend.text}
                </div>
            )
            }
        </>
    );
}

export default User;
