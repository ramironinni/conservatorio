const FormSubmitBtn = ({ children, isFormValid }) => {
    return (
        <button
            className="w-100 btn btn-success btn-lg mt-5"
            type="submit"
            disabled={!isFormValid}
        >
            {children}
        </button>
    );
};

export default FormSubmitBtn;
