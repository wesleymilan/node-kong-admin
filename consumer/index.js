'use strict';

const CONNECTOR = require('../connector');

function Consumer(params) {

    this.params = params;

    this.connector = new CONNECTOR(params);

}

Consumer.prototype.create = function(data, cb) {

    this.connector.execute('post', '/consumers', this.validate(data), null, cb);

};

Consumer.prototype.get = function(usernameOrId, cb) {

    this.connector.execute('get', '/consumers/' + usernameOrId, null, null, cb);

};

Consumer.prototype.getByPlugin = function(pluginId, cb) {

    this.connector.execute('get', '/plugins/' + pluginId + '/consumer', null, null, cb);

};

Consumer.prototype.list = function(offset, cb) {

    this.connector.execute('get', '/routes', null, offset ? { offset: offset } : null, cb);

};

Consumer.prototype.update = function(data, cb) {

    this.connector.execute('patch', '/consumers/' + (data.id || data.username), this.validate(data), null, cb);

};

Consumer.prototype.updateByPlugin = function(pluginId, data, cb) {

    this.connector.execute('patch', '/plugins/' + pluginId + '/route', this.validate(data), null, cb);

};

Consumer.prototype.updateOrCreate = function(data, cb) {

    this.connector.execute('put', '/consumers/' + (data.id || data.name), this.validate(data), null, cb);

};

Consumer.prototype.updateOrCreateByPlugin = function(pluginId, data, cb) {

    this.connector.execute('put', '/plugins/' + pluginId + '/consumer', this.validate(data), null, cb);

};

Consumer.prototype.delete = function(nameOrId, cb) {

    this.connector.execute('delete', '/consumers/' + nameOrId, null, null, cb);

};

Consumer.prototype.validate = function(data) {

    if(!data || !(data instanceof Object)) throw new Error('Data must be an Object!');

    return {
        "username": data.username,
        "custom_id": data.custom_id,
        "tags": data.tags
    };

};

module.exports = Consumer;

