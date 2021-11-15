const getValidityClass = (isValid) => {
    const isValidClass = isValid
        ? 'is-valid'
        : isValid === false
        ? 'is-invalid'
        : null;

    return isValidClass;
};

export default getValidityClass;
