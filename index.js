'use strict';

// Library extensions
const CONFIG = require('./config');
const NODE = require('./node');
const TAG = require('./tag');
const SERVICE = require('./service');
const ROUTE = require('./route');
const UPSTREAM = require('./upstream');
const TARGET = require('./target');
const CONSUMER = require('./consumer');
const PLUGIN = require('./plugin');
const CERTIFICATE = require('./certificate');
const SNI = require('./sni');

function Kong(params) {

    const PARAMS = {
        url: params.url || 'https://localhost:8001'
    };

    this.config = new CONFIG(PARAMS);
    this.node = new NODE(PARAMS);
    this.tag = new TAG(PARAMS);
    this.service = new SERVICE(PARAMS);
    this.route = new ROUTE(PARAMS);
    this.upstream = new UPSTREAM(PARAMS);
    this.target = new TARGET(PARAMS);
    this.consumer = new CONSUMER(PARAMS);
    this.plugin = new PLUGIN(PARAMS);
    this.certificate = new CERTIFICATE(PARAMS);
    this.sni = new SNI(PARAMS);

}

module.exports = Kong;
