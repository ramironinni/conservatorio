const SearchBar = () => {
    return (
        <form className="d-flex m-5">
            <input
                className="form-control me-2"
                type="search"
                placeholder="name"
                aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
                <i className="bi bi-search"></i>
            </button>
        </form>
    );
};

export default SearchBar;
