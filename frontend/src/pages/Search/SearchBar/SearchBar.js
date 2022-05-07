const SearchBar = ({ userInput, onQueryChange, onSubmitHandler }) => {
    const searchSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitHandler(userInput);
    };

    const queryChangeHandler = (e) => {
        onQueryChange(e.target.value);
    };

    return (
        <form className="d-flex m-5" onSubmit={searchSubmitHandler}>
            <input
                className="form-control me-2"
                type="search"
                name="query"
                placeholder="first name, last name or city"
                aria-label="Search"
                value={userInput}
                onChange={queryChangeHandler}
            />
            <button className="btn btn-primary" type="submit">
                <i className="bi bi-search"></i>
            </button>
        </form>
    );
};

export default SearchBar;
