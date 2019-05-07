'use strict';

const CONNECTOR = require('../connector');

function SNI(params) {

    this.params = params;

    this.connector = new CONNECTOR(params);

}

SNI.prototype.create = function(data, cb) {

    this.connector.execute('post', '/snis', this.validate(data), null, cb);

};

SNI.prototype.createByCertificate = function(certificateNameOrId, data, cb) {

    this.connector.execute('post', '/certificates/' + certificateNameOrId + '/snis', this.validate(data), null, cb);

};

SNI.prototype.get = function(sniId, cb) {

    this.connector.execute('get', '/snis/' + sniId, null, null, cb);

};

SNI.prototype.list = function(offset, cb) {

    this.connector.execute('get', '/snis', null, { offset: offset}, cb);

};

SNI.prototype.listByCertificate = function(certificateNameOrId, offset, cb) {

    this.connector.execute('get', '/certificates/' + certificateNameOrId + '/snis', null, { offset: offset}, cb);

};

SNI.prototype.update = function(data, cb) {

    this.connector.execute('patch', '/snis/' + (data.id || data.name), this.validate(data), null, cb);

};

SNI.prototype.updateOrCreate = function(data, cb) {

    this.connector.execute('put', '/snis/' + (data.id || data.name), this.validate(data), null, cb);

};

SNI.prototype.delete = function(sniNameOrId, cb) {

    this.connector.execute('delete', '/snis/' + sniNameOrId, null, null, cb);

};

SNI.prototype.validate = function(data) {

    if(!data || !(data instanceof Object)) throw new Error('Data must be an Object!');

    return {
        "name": data.name,
        "tags": data.tags,
        "certificate": { "id": data.certificate }
    };

};

module.exports = SNI;

