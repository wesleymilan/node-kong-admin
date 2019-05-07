'use strict';

const CONNECTOR = require('../connector');

function Service(params) {

    this.params = params;

    this.connector = new CONNECTOR(params);

}

Service.prototype.create = function(data, cb) {

    this.connector.execute('post', '/services', this.validate(data), null, cb);

};

Service.prototype.get = function(nameOrId, cb) {

    this.connector.execute('get', '/services/' + nameOrId, null, null, cb);

};

Service.prototype.getByRoute = function(routeNameOrId, cb) {

    this.connector.execute('get', '/routes/' + routeNameOrId + '/service', null, null, cb);

};

Service.prototype.getByPlugin = function(pluginId, cb) {

    this.connector.execute('get', '/plugins/' + pluginId + '/service', null, null, cb);

};

Service.prototype.list = function(offset, cb) {

    this.connector.execute('get', '/services', null, { offset: offset }, cb);

};

Service.prototype.update = function(data, cb) {

    this.connector.execute('patch', '/services/' + (data.id || data.name), this.validate(data), null, cb);

};

Service.prototype.updateByRoute = function(routeNameOrId, data, cb) {

    this.connector.execute('patch', '/routes/' + routeNameOrId + '/service', this.validate(data), null, cb);

};

Service.prototype.updateByPlugin = function(pluginId, data, cb) {

    this.connector.execute('patch', '/plugins/' + pluginId + '/service', this.validate(data), null, cb);

};

Service.prototype.updateOrCreate = function(data, cb) {

    this.connector.execute('put', '/services/' + (data.id || data.name), this.validate(data), null, cb);

};

Service.prototype.updateOrCreateByRoute = function(routeNameOrId, data, cb) {

    this.connector.execute('put', '/routes/' + routeNameOrId + '/service', this.validate(data), null, cb);

};

Service.prototype.updateOrCreateByPlugin = function(pluginId, data, cb) {

    this.connector.execute('put', '/plugins/' + pluginId + '/service', this.validate(data), null, cb);

};

Service.prototype.delete = function(nameOrId, cb) {

    this.connector.execute('delete', '/services/' + nameOrId, null, null, cb);

};

Service.prototype.deleteByRoute = function(routeNameOrId, cb) {

    this.connector.execute('delete', '/routes/' + routeNameOrId + '/service', null, null, cb);

};

Service.prototype.validate = function(data) {

    if(!data || !(data instanceof Object)) throw new Error('Data must be an Object!');

    return {
        name: data.name,
        retries: data.retries || 5,
        protocol: data.protocol || 'http',
        host: data.host,
        port: data.port || 80,
        path: data.path,
        connect_timeout: data.connect_timeout || 60000,
        write_timeout: data.write_timeout || 60000,
        read_timeout: data.read_timeout || 60000,
        tags: data.tags,
        url: data.url
    };

};

module.exports = Service;

