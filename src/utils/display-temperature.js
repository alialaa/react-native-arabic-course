import displayNumber from "./display-number";

const displayTemperature = (temp, lang) => {
    return displayNumber(Math.round(temp), lang) + "°";
};

export default displayTemperature;
