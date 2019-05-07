'use strict';

const CONNECTOR = require('../connector');

function Tag(params) {

    this.params = params;

    this.connector = new CONNECTOR(params);

}

Tag.prototype.list = function(offset, cb) {

    this.connector.execute('get', '/tags', null, { offset: offset }, cb);

};

Tag.prototype.listByTags = function(tags, offset, cb) {

    this.connector.execute('get', '/tags/' + tags, null, { offset: offset }, cb);

};

module.exports = Tag;

