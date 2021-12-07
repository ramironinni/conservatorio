const SortGroup = ({ onClick }) => {
    return (
        <div
            className="btn-group col-sm-8"
            role="group"
            aria-label="Basic radio toggle button group"
        >
            <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="newest"
                autoComplete="off"
                onClick={onClick}
            />
            <label className="btn btn-outline-primary" htmlFor="newest">
                Newest
            </label>
            <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="oldest"
                autoComplete="off"
                onClick={onClick}
            />
            <label className="btn btn-outline-primary" htmlFor="oldest">
                Oldest
            </label>

            <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="asc"
                autoComplete="off"
                onClick={onClick}
            />
            <label className="btn btn-outline-primary" htmlFor="asc">
                A-Z
            </label>

            <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="desc"
                autoComplete="off"
                onClick={onClick}
            />
            <label className="btn btn-outline-primary" htmlFor="desc">
                Z-A
            </label>
        </div>
    );
};

export default SortGroup;
