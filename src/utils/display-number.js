import toArabicNumerals from "./to-arabic-numerals";

const displayNumber = (number, lang) => {
    return lang === "ar" ? toArabicNumerals(number) : number;
};

export default displayNumber;
