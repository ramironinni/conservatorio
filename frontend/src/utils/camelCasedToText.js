const camelCasedToText = (camelCased) => {
    let text = [];

    Array.from(camelCased).forEach((letter, i) => {
        if (i === 0) {
            text.push(letter.toUpperCase());
        } else if (letter === letter.toUpperCase()) {
            text.push(' ');
            text.push(letter);
        } else {
            text.push(letter);
        }
    });

    return text.join('');
};

export default camelCasedToText;
