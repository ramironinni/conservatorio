const Modal = ({ id, title, body, option1, option2, onConfirm }) => {
    return (
        <div
            className="modal fade"
            id={id}
            tabIndex="-1"
            aria-labelledby={`${id}Label`}
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="Label">
                            {title}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">{body}</div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                            onClick={onConfirm}
                        >
                            {option1}
                        </button>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                        >
                            {option2}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
