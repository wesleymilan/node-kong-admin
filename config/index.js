'use strict';

const CONNECTOR = require('../connector');

function Config(params) {

    this.params = params;

    this.connector = new CONNECTOR(params);

}

Config.prototype.dbLess = function(filePath, cb) {

    this.connector.execute('postFile', '/config', filePath, null, cb);

};

module.exports = Config;

