const SearchBar = () => {
    return (
        <form className="d-flex m-5">
            <input
                className="form-control me-2"
                type="search"
                placeholder="name"
                aria-label="Search"
            />
            <button className="input-group-text" type="submit">
                <i class="bi bi-search"></i>
            </button>
        </form>
    );
};

export default SearchBar;
