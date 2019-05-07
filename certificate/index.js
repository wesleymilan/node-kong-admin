'use strict';

const CONNECTOR = require('../connector');

function Certificate(params) {

    this.params = params;

    this.connector = new CONNECTOR(params);

}

Certificate.prototype.create = function(data, cb) {

    this.connector.execute('post', '/certificates', this.validate(data), null, cb);

};

Certificate.prototype.get = function(certificateId, cb) {

    this.connector.execute('get', '/certificates/' + certificateId, null, null, cb);

};

Certificate.prototype.list = function(offset, cb) {

    this.connector.execute('get', '/certificates', null, { offset: offset}, cb);

};

Certificate.prototype.update = function(data, cb) {

    this.connector.execute('patch', '/certificates/' + data.id, this.validate(data), null, cb);

};

Certificate.prototype.updateOrCreate = function(data, cb) {

    this.connector.execute('put', '/certificates/' + data.id, this.validate(data), null, cb);

};

Certificate.prototype.delete = function(certificateId, cb) {

    this.connector.execute('delete', '/certificates/' + certificateId, null, null, cb);

};

Certificate.prototype.validate = function(data) {

    if(!data || !(data instanceof Object)) throw new Error('Data must be an Object!');

    return {
        "cert": data.cert,
        "key": data.key,
        "tags": data.tags,
        "snis": data.snis
    };

};

module.exports = Certificate;

