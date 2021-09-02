const SearchBar = ({ type }) => {
    return (
        <div className="container my-5">
            <h2>{type}</h2>
            <form className="d-flex">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="name"
                    aria-label="Search"
                />
                <button className="input-group-text" type="submit">
                    <span className="material-icons">search</span>
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
