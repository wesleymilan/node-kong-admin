'use strict';

// External libraries
const UNIREST = require('unirest');
const debug = require('debug')('node:kong:admin:connector');

// Library definitions
const TIMEOUT = 60000;

function Connector(params) {

    debug('Connector Constructor: ', params);

    this.baseUrl = params.url;
    this.authParams = params.auth || null;

    this.requestHeaders = {
        'User-Agent': 'NODE-KONG-ADMIN-1.0.0 (pid: ' + process.pid + ', uid: ' + process.getuid() + ')',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Connection': 'keep-alive',
        'Authorization': null
    };

}

Connector.prototype.auth = function (cb) {

    debug('Connector AUTH');

    var self = this;

    if(self.requestHeaders.Authorization || !this.authParams) return cb();

    var data = {
        username: self.authUser,
        password: self.authPass
    };

    debug('Connector AUTH Sending Request');

    UNIREST.post(self.baseUrl + '/Users/login')
        .headers(self.requestHeaders)
        .send(data)
        .timeout(TIMEOUT)
        .end(function (response) {

            debug('Connector AUTH Received');

            if (response.error) {
                debug('Connector AUTH Error: ', response.error);
                return cb({
                    error: response.error,
                    body: response.body
                });
            }

            debug('Connector AUTH Success');

            self.requestHeaders.Authorization = response.body.id;

            cb();
        });
};

Connector.prototype.get = function (path, params, cb) {

    debug('Connector GET: ', path, params);

    var self = this;

    self.auth(function(err) {
        if(err) return cb(err);

        debug('Connector GET Sending Request');

        UNIREST.get(self.baseUrl + path)
            .headers(self.requestHeaders)
            .timeout(TIMEOUT)
            .end(function (response) {

                debug('Connector GET Received: ', response);

                if (response.error) {
                    // This is the only situation where a 404 error must be ignored
                    if(response.code === 404) return cb();
                    debug('Connector GET Error: ', response.error);
                    return cb(response.body);
                }

                debug('Connector GET Success: ', response.body);

                cb(null, response.body);
            });
    });
};

Connector.prototype.post = function (path, data, params, cb) {

    debug('Connector POST: ', path, data, params);

    var self = this;

    self.auth(function(err) {
        if(err) return cb(err);

        debug('Connector POST Sending Request');

        UNIREST.post(self.baseUrl + path)
            .headers(self.requestHeaders)
            .send(data)
            .timeout(TIMEOUT)
            .end(function (response) {

                debug('Connector POST Received: ', response);

                if (response.error) {
                    debug('Connector POST Error: ', response.error);
                    return cb(response.body);
                }

                debug('Connector POST Success: ', response.body);

                cb(null, response.body);
            });
    });
};

Connector.prototype.postFile = function (path, filePath, params, cb) {

    debug('Connector POSTFILE: ', path, filePath, params);

    var self = this;

    self.auth(function(err) {
        if(err) return cb(err);

        debug('Connector POSTFILE Sending Request');

        UNIREST.post(self.baseUrl + path)
            .headers(self.requestHeaders)
            .attach('file', filePath, {
                contentType: 'application/json'
            })
            .timeout(TIMEOUT)
            .end(function (response) {

                debug('Connector POSTFILE Received: ', response);

                if (response.error) {
                    debug('Connector POSTFILE Error: ', response.error);
                    return cb(response.body);
                }

                debug('Connector POSTFILE Success: ', response.body);

                cb(null, response.body);
            });
    });
};

Connector.prototype.put = function (path, data, params, cb) {

    debug('Connector PUT: ', path, data, params);

    var self = this;

    self.auth(function(err) {
        if(err) return cb(err);

        debug('Connector PUT Sending Request');

        UNIREST.put(self.baseUrl + path)
            .headers(self.requestHeaders)
            .send(data)
            .timeout(TIMEOUT)
            .end(function (response) {

                debug('Connector PUT Received: ', response);

                if (response.error) {
                    debug('Connector PUT Error: ', response.error);
                    return cb(response.body);
                }

                debug('Connector PUT Success: ', response.body);

                cb(null, response.body);
            });
    });
};

Connector.prototype.patch = function (path, data, params, cb) {

    debug('Connector PATCH: ', path, data, params);

    var self = this;

    self.auth(function(err) {
        if(err) return cb(err);

        debug('Connector PATCH Sending Request');

        UNIREST.patch(self.baseUrl + path)
            .headers(self.requestHeaders)
            .send(data)
            .timeout(TIMEOUT)
            .end(function (response) {

                debug('Connector PATCH Received: ', response);

                if (response.error) {
                    debug('Connector PATCH Error: ', response.error);
                    return cb(response.body);
                }

                debug('Connector PATCH Success: ', response.body);

                cb(null, response.body);
            });
    });
};

Connector.prototype.delete = function (path, params, cb) {

    debug('Connector DELETE: ', path, params);

    var self = this;

    self.auth(function(err) {
        if(err) return cb(err);

        debug('Connector DELETE Sending Request');

        UNIREST.delete(self.baseUrl + path)
            .headers(self.requestHeaders)
            .timeout(TIMEOUT)
            .end(function (response) {

                debug('Connector DELETE Received: ', response);

                if (response.error) {
                    debug('Connector DELETE Error: ', response.error);
                    return cb(response.body);
                }

                debug('Connector DELETE Success: ', response.body);

                cb();
            });
    });
};

Connector.prototype.execute = function(action, url, data, params, cb) {

    debug('Connector EXECUTE: ', action, url, data, params);

    if(data) {

        debug('Connector EXECUTE with DATA');

        this[action](url, data, params, function (err, results) {

            if (err) {
                debug('Connector EXECUTE Error: ', err);
                return cb(err);
            }

            debug('Connector EXECUTE Success: ', results);

            cb(null, results);

        });
    } else {

        debug('Connector EXECUTE without DATA');

        this[action](url, params, function (err, results) {

            if (err) {
                debug('Connector EXECUTE Error: ', err);
                return cb(err);
            }

            debug('Connector EXECUTE Success: ', results);

            cb(null, results);

        });
    }

};

module.exports = Connector;
