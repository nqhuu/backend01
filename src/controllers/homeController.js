
const getHomepage = (req, res) => {
    res.send('<h1>Hoi dan it hihi </h1>');
};

const getAbc = (req, res) => {
    res.send('<h1>ABC</h1>');
};

const getHtml = (req, res) => {
    res.send('<h1>Hoi dan it hihi </h1>');
};

module.exports = {
    getHomepage,
    getAbc,
    getHtml
};