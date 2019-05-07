'use strict';

const CONNECTOR = require('../connector');

function Upstream(params) {

    this.params = params;

    this.connector = new CONNECTOR(params);

}

Upstream.prototype.create = function(data, cb) {

    this.connector.execute('post', '/upstreams', this.validate(data), null, cb);

};

Upstream.prototype.get = function(upstreamNameOrId, cb) {

    this.connector.execute('get', '/upstreams/' + upstreamNameOrId, null, null, cb);

};

Upstream.prototype.getByTarget = function(targetHostAndPortOrId, cb) {

    this.connector.execute('get', '/targets/' + targetHostAndPortOrId + '/upstream', null, null, cb);

};

Upstream.prototype.health = function(upstreamNameOrId, cb) {

    this.connector.execute('get', '/upstreams/' + upstreamNameOrId + '/health', null, null, cb);

};

Upstream.prototype.list = function(offset, cb) {

    this.connector.execute('get', '/upstreams', null, { offset: offset}, cb);

};

Upstream.prototype.update = function(data, cb) {

    this.connector.execute('patch', '/upstreams/' + (data.id || data.name), this.validate(data), null, cb);

};

Upstream.prototype.updateByTarget = function(targetHostAndPortOrId, data, cb) {

    this.connector.execute('patch', '/targets/' + targetHostAndPortOrId + '/upstream', this.validate(data), null, cb);

};

Upstream.prototype.updateOrCreate = function(data, cb) {

    this.connector.execute('put', '/upstreams/' + (data.id || data.name), this.validate(data), null, cb);

};

Upstream.prototype.updateOrCreateByTarget = function(targetHostAndPortOrId, data, cb) {

    this.connector.execute('put', '/targets/' + targetHostAndPortOrId + '/upstream', this.validate(data), null, cb);

};

Upstream.prototype.delete = function(upstreamNameOrId, cb) {

    this.connector.execute('delete', '/upstreams/' + upstreamNameOrId, null, null, cb);

};

Upstream.prototype.deleteByTarget = function(targetHostAndPortOrId, cb) {

    this.connector.execute('delete', '/targets/' + targetHostAndPortOrId + '/upstream', null, null, cb);

};

Upstream.prototype.validate = function(data) {

    if(!data || !(data instanceof Object)) throw new Error('Data must be an Object!');

    return {
        "name": data.name,
        "hash_on": data.hash_on || "none",
        "hash_fallback": data.hash_fallback || "none",
        "hash_on_cookie_path": data.hash_on_cookie_path || "/",
        "slots": data.slots || 10000,
        "healthchecks": data.healthchecks,
        "tags": data.tags
    };

};

module.exports = Upstream;

