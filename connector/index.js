'use strict';

// External libraries
const UNIREST = require('unirest');

// Library definitions
const TIMEOUT = 60000;

function Connector(params) {

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
    var self = this;

    if(self.requestHeaders.Authorization || !this.authParams) return cb();

    var data = {
        username: self.authUser,
        password: self.authPass
    };

    UNIREST.post(self.baseUrl + '/Users/login')
        .headers(self.requestHeaders)
        .send(data)
        .timeout(TIMEOUT)
        .end(function (response) {
            if (response.error) {
                return cb({
                    error: response.error,
                    body: response.body
                });
            }

            self.requestHeaders.Authorization = response.body.id;

            cb();
        });
};

Connector.prototype.get = function (path, params, cb) {

    var self = this;

    console.log('Getting');

    self.auth(function(err) {
        if(err) return cb(err);

        console.log('GET: ' + self.baseUrl + path);

        UNIREST.get(self.baseUrl + path)
            .headers(self.requestHeaders)
            .timeout(TIMEOUT)
            .end(function (response) {
                if (response.error) {
                    return cb(response.body);
                }

                cb(null, response.body);
            });
    });
};

Connector.prototype.post = function (path, data, params, cb) {
    var self = this;

    self.auth(function(err) {
        if(err) return cb(err);

        UNIREST.post(self.baseUrl + path)
            .headers(self.requestHeaders)
            .send(data)
            .timeout(TIMEOUT)
            .end(function (response) {
                if (response.error) {
                    return cb(response.body);
                }

                cb(null, response.body);
            });
    });
};

Connector.prototype.postFile = function (path, filePath, params, cb) {
    var self = this;

    self.auth(function(err) {
        if(err) return cb(err);

        UNIREST.post(self.baseUrl + path)
            .headers(self.requestHeaders)
            .attach('file', filePath, {
                contentType: 'application/json'
            })
            .timeout(TIMEOUT)
            .end(function (response) {
                if (response.error) {
                    return cb(response.body);
                }

                cb(null, response.body);
            });
    });
};

Connector.prototype.put = function (path, data, params, cb) {
    var self = this;

    self.auth(function(err) {
        if(err) return cb(err);

        UNIREST.put(self.baseUrl + path)
            .headers(self.requestHeaders)
            .send(data)
            .timeout(TIMEOUT)
            .end(function (response) {
                if (response.error) {
                    return cb(response.body);
                }

                cb(null, response.body);
            });
    });
};

Connector.prototype.patch = function (path, data, params, cb) {
    var self = this;

    self.auth(function(err) {
        if(err) return cb(err);

        UNIREST.patch(self.baseUrl + path)
            .headers(self.requestHeaders)
            .send(data)
            .timeout(TIMEOUT)
            .end(function (response) {
                if (response.error) {
                    return cb(response.body);
                }

                cb(null, response.body);
            });
    });
};

Connector.prototype.delete = function (path, params, cb) {
    var self = this;

    self.auth(function(err) {
        if(err) return cb(err);

        UNIREST.delete(self.baseUrl + path)
            .headers(self.requestHeaders)
            .timeout(TIMEOUT)
            .end(function (response) {
                if (response.error) {
                    return cb(response.body);
                }

                cb();
            });
    });
};

Connector.prototype.execute = function(action, url, data, params, cb) {

    if(data) {
        this[action](url, data, params, function (err, results) {

            if (err) {
                console.error(err);
                return cb(err);
            }

            cb(null, results);

        });
    } else {
        this[action](url, params, function (err, results) {

            if (err) {
                console.error(err);
                return cb(err);
            }

            cb(null, results);

        });
    }

};

module.exports = Connector;
