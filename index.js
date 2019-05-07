'use strict';

// Library extensions
const SERVICE = require('./service');
const ROUTE = require('./route');
const CONSUMER = require('./consumer');
const PLUGIN = require('./plugin');
const CERTIFICATE = require('./certificate');

function Kong(params) {

    const PARAMS = {
        url: params.url || 'https://localhost:8001'
    };

    this.service = new SERVICE(PARAMS);
    this.route = new ROUTE(PARAMS);
    this.consumer = new CONSUMER(PARAMS);
    this.plugin = new PLUGIN(PARAMS);
    this.certificate = new CERTIFICATE(PARAMS);

}

module.exports = Kong;
