const AddContent = ({ children, element }) => {
    return (
        <main className="add-content">
            <div className="py-5 text-center">
                <h2>Add new {element}</h2>
            </div>
            <div className="row g-5 justify-content-center">
                <div className="col-md-12 col-lg-9">{children}</div>
            </div>
        </main>
    );
};

export default AddContent;
