export const removeBadWords = (template, text) => {
    const textArray = text.split(" ");
    const badWordIndx = textArray.findIndex((word) => {
        return word === template;
    });
    textArray.splice(badWordIndx, 1, "***");
    return textArray.join(" ");
}

export default removeBadWords;
