const setLSData = (key, value) => {
    typeof value === "object"
        ? localStorage.setItem(key, JSON.stringify(value))
        : localStorage.setItem(key, value);
};

const getLSData = (key) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch {
        return localStorage.getItem(key);
    }
}

export { setLSData, getLSData };
