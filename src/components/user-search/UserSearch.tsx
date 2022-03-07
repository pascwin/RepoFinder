import "./User.css"

const UserSearch = ({ findUser }: { findUser: Function }) => {
    return (
        <div className="container">
            <div className="descriptionContainer">
                <h1>Find a User from Github:</h1>
            </div>
            <div className="input-group container">
                <div className="form-outline">
                    <input type="search" id="userSearch" className="form-control" placeholder="search User" />
                </div>
                <button type="button" className="btn btn-primary" onClick={() => findUser()}>
                    Search
                </button>
            </div>
        </div>
    )
}

export default UserSearch;