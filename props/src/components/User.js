import PropTypes from "prop-types";

function User({ name, surname, age, isLoggedIn, friends, address }) {
    if (!isLoggedIn) {
        return <div>Giriş yapılmadı.</div>;
    }

    return (
        <>
            Kullanıcı adı: {name} {surname} <br />
            Yaş: {age} <br />
            Adres: {address.title} {address.zip} <br />
            <br/>
            {friends &&
                friends.map((friend) => <div key={friend.id}>{friend.name}</div>)}
        </>
    );
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.bool.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    }),
};

User.defaultProps = {
    name: "İsim girilmedi.",
    isLoggedIn: false,
};

export default User;
