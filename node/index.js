'use strict';

const CONNECTOR = require('../connector');

function Node(params) {

    this.params = params;

    this.connector = new CONNECTOR(params);

}

Node.prototype.get = function(cb) {

    this.connector.execute('get', '/', null, null, cb);

};

Node.prototype.status = function(cb) {

    this.connector.execute('get', '/status', null, null, cb);

};

module.exports = Node;

