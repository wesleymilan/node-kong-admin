'use strict';

const CONNECTOR = require('../connector');

function Target(params) {

    this.params = params;

    this.connector = new CONNECTOR(params);

}

Target.prototype.create = function(data, cb) {

    this.connector.execute('post', '/upstreams/' + (data.upstream || data.target) + '/targets', this.validate(data), null, cb);

};

Target.prototype.list = function(upstreamHostAndPortOrId, offset, cb) {

    this.connector.execute('get', '/upstreams/' + upstreamHostAndPortOrId + '/targets', null, offset ? { offset: offset } : null, cb);

};

Target.prototype.listAll = function(upstreamNameOrId, cb) {

    this.connector.execute('get', '/upstreams/' + upstreamNameOrId + '/targets/all', null, null, cb);

};

Target.prototype.delete = function(upstreamNameOrId, targetHostAndPortOrId, cb) {

    this.connector.execute('delete', '/upstreams/' + upstreamNameOrId + '/targets/' + targetHostAndPortOrId, null, null, cb);

};

Target.prototype.setHealthy = function(upstreamNameOrId, targetHostAndPortOrId, cb) {

    this.connector.execute('post', '/upstreams/' + upstreamNameOrId + '/targets/' + targetHostAndPortOrId + '/healthy', {}, null, cb);

};

Target.prototype.setUnhealthy = function(upstreamNameOrId, targetHostAndPortOrId, cb) {

    this.connector.execute('post', '/upstreams/' + upstreamNameOrId + '/targets/' + targetHostAndPortOrId + '/unhealthy', {}, null, cb);

};

Target.prototype.validate = function(data) {

    if(!data || !(data instanceof Object)) throw new Error('Data must be an Object!');

    return {
        "upstream": {"id": data.upstream },
        "target": data.target,
        "weight": data.weight,
        "tags": data.tags
    };

};

module.exports = Target;

