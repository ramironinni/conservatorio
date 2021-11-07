const AlertDismissible = ({ type, text }) => {
    return (
        <div
            className={`alert alert-${type} alert-dismissible fade show mt-3 text-center`}
            role="alert"
        >
            {text}
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
            ></button>
        </div>
    );
};

export default AlertDismissible;
