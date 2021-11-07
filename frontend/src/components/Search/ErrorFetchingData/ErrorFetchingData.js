const ErrorFetchingData = ({ error }) => {
    return (
        <div
            className="alert alert-danger error-fetching-data mt-3"
            role="alert"
        >
            <h4 class="alert-heading">
                <i class="bi bi-x-octagon-fill"></i>&nbsp;Cannot fetch the data
            </h4>
            <hr />
            <p class="mb-0">{error}</p>
        </div>
    );
};

export default ErrorFetchingData;
