var pkg = require('./package');

module.exports = (function () {

    let comment = pkg.description + "\n \n" + "@copyright " + pkg.copyright + "\n" + "@license " + pkg.license + "\n" + "@author " + pkg.author + "\n" + "@version " + pkg.version;

    return comment;

})({});