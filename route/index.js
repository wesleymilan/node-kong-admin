'use strict';

const CONNECTOR = require('../connector');

function Route(params) {

    this.params = params;

    this.connector = new CONNECTOR(params);

}

Route.prototype.create = function(data, cb) {

    this.connector.execute('post', '/routes', this.validate(data), null, cb);

};

Route.prototype.createByService = function(serviceNameOrId, data, cb) {

    this.connector.execute('post', '/services/' + serviceNameOrId + '/routes', this.validate(data), null, cb);

};

Route.prototype.get = function(nameOrId, cb) {

    this.connector.execute('get', '/routes/' + nameOrId, null, null, cb);

};

Route.prototype.getByPlugin = function(pluginId, cb) {

    this.connector.execute('get', '/plugins/' + pluginId + '/route', null, null, cb);

};

Route.prototype.list = function(offset, cb) {

    this.connector.execute('get', '/routes', null, offset ? { offset: offset } : null, cb);

};

Route.prototype.listByService = function(serviceNameOrId, offset, cb) {

    this.connector.execute('get', '/services/' + serviceNameOrId + '/routes', null, offset ? { offset: offset } : null, cb);

};

Route.prototype.update = function(data, cb) {

    this.connector.execute('patch', '/routes/' + (data.id || data.name), this.validate(data), null, cb);

};

Route.prototype.updateByPlugin = function(pluginId, data, cb) {

    this.connector.execute('patch', '/plugins/' + pluginId + '/route', this.validate(data), null, cb);

};

Route.prototype.updateOrCreate = function(data, cb) {

    this.connector.execute('put', '/routes/' + (data.id || data.name), this.validate(data), null, cb);

};

Route.prototype.updateOrCreateByPlugin = function(pluginId, data, cb) {

    this.connector.execute('put', '/plugins/' + pluginId + '/route', this.validate(data), null, cb);

};

Route.prototype.delete = function(nameOrId, cb) {

    this.connector.execute('delete', '/routes/' + nameOrId, null, null, cb);

};

Route.prototype.validate = function(data) {

    if(!data || !(data instanceof Object)) throw new Error('Data must be an Object!');

    return {
        "name": data.name,
        "protocols": data.protocols || ["http", "https"],
        "methods": data.methods,
        "hosts": data.hosts,
        "paths": data.paths,
        "regex_priority": data.regex_priority || 0,
        "strip_path": data.strip_path,
        "preserve_host": data.preserve_host,
        "tags": data.tags,
        "snis": data.snis,
        "sources": data.sources,
        "destinations": data.destinations,
        "service": data.service
    };

};

module.exports = Route;

