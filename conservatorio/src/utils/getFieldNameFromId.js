import capitalizeWord from './capitalizeWord';

const getFieldNameFromId = (id) => {
    const startIndex = id.lastIndexOf('_') + 1;
    const idWithoutPrefix = Array.from(id).slice(startIndex).join('');

    const arrayAndCapitalized = idWithoutPrefix.split('-').map((word) => {
        return capitalizeWord(word);
    });

    const fieldName = arrayAndCapitalized.reduce((accum, curr) => {
        return accum + ' ' + curr;
    }, '');

    return fieldName;
};

export default getFieldNameFromId;
