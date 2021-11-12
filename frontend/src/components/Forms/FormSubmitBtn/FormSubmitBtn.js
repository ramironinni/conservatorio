const FormSubmitBtn = ({ element, disabled }) => {
    return (
        <button
            className="w-100 btn btn-success btn-lg mt-5"
            type="submit"
            disabled={disabled}
        >
            Add {element}
        </button>
    );
};

export default FormSubmitBtn;
