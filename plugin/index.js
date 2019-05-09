'use strict';

const CONNECTOR = require('../connector');

function Plugin(params) {

    this.params = params;

    this.connector = new CONNECTOR(params);

}

Plugin.prototype.create = function(data, cb) {

    this.connector.execute('post', '/plugins', this.validate(data), null, cb);

};

Plugin.prototype.createByRoute = function(routeId, data, cb) {

    this.connector.execute('post', '/routes/' + routeId + '/plugins', this.validate(data), null, cb);

};

Plugin.prototype.createByService = function(serviceId, data, cb) {

    this.connector.execute('post', '/services/' + serviceId + '/plugins', this.validate(data), null, cb);

};

Plugin.prototype.createByConsumer = function(consumerId, data, cb) {

    this.connector.execute('post', '/consumers/' + consumerId + '/plugins', this.validate(data), null, cb);

};

Plugin.prototype.get = function(pluginId, cb) {

    this.connector.execute('get', '/plugins/' + pluginId, null, null, cb);

};

Plugin.prototype.getEnabledPlugins = function(cb) {

    this.connector.execute('get', '/plugins/enabled', null, null, cb);

};

Plugin.prototype.getEnabledPlugins = function(cb) {

    this.connector.execute('get', '/plugins/enabled', null, null, cb);

};

Plugin.prototype.getSchema = function(pluginName, cb) {

    this.connector.execute('get', '/plugins/schema/' + pluginName, null, null, cb);

};

Plugin.prototype.list = function(offset, cb) {

    this.connector.execute('get', '/plugins', null, offset ? { offset: offset } : null, cb);

};

Plugin.prototype.listByRoute = function(routeId, offset, cb) {

    this.connector.execute('get', '/routes/' + routeId + '/plugins', null, offset ? { offset: offset } : null, cb);

};

Plugin.prototype.listByService = function(serviceId, offset, cb) {

    this.connector.execute('get', '/services/' + serviceId + '/plugins', null, offset ? { offset: offset } : null, cb);

};

Plugin.prototype.listByConsumer = function(consumerId, offset, cb) {

    this.connector.execute('get', '/consumers/' + consumerId + '/plugins', null, offset ? { offset: offset } : null, cb);

};

Plugin.prototype.update = function(data, cb) {

    this.connector.execute('patch', '/plugins/' + data.id, this.validate(data), null, cb);

};

Plugin.prototype.updateOrCreate = function(data, cb) {

    this.connector.execute('put', '/plugins/' + data.id, this.validate(data), null, cb);

};

Plugin.prototype.delete = function(pluginId, cb) {

    this.connector.execute('delete', '/plugins/' + pluginId, null, null, cb);

};

Plugin.prototype.validate = function(data) {

    if(!data || !(data instanceof Object)) throw new Error('Data must be an Object!');

    return {
        "name": data.name,
        "route": data.route,
        "service": data.service,
        "consumer": data.consumer,
        "config": data.config,
        "run_on": data.run_on || "first",
        "protocols": data.protocols || ["http", "https"],
        "enabled": data.enabled,
        "tags": data.tags
    };

};

module.exports = Plugin;

