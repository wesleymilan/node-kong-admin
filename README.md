# Node Kong Admin

This library is on development stage, so be careful when using it on production environment.

The current version from May 2019 covers all methods listed on https://docs.konghq.com/1.1.x/admin-api/.

#### Installing
I had no time yet to write the tests and package it, so to install you should do using GitHub address.
```
npm install git@github.com:wesleymilan/node-kong-admin.git --save
```

#### Using

```
const KongLib = require('node-kong-admin');
const KongClient = new KongLib({ url: 'http://kong.docker:8001' });

let createData = {
    name: 'FirstService',
    host: 'localhost'
};

KongClient.service.create(createData, function(err, done) {
    
    if(err) throw new Error(err);
    
    console.log('Created: ', done);
    // Do whatever you have todo here

});
```


We are currently covering the following modules:
#### Node
<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Example</th>
            <th>Doc</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>info</td>
            <td><code>KongClient.node.info(callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#retrieve-node-information">https://docs.konghq.com/1.1.x/admin-api/#retrieve-node-information</a></td>
        </tr>
        <tr>
            <td>status</td>
            <td><code>KongClient.node.status(callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#retrieve-node-status">https://docs.konghq.com/1.1.x/admin-api/#retrieve-node-status</a></td>
        </tr>
    </tbody>
</table>


#### Config
<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Example</th>
            <th>Doc</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>dbless</td>
            <td><code>KongClient.config.dbless(filePath, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#update-db-less-config">https://docs.konghq.com/1.1.x/admin-api/#update-db-less-config</a></td>
        </tr>
    </tbody>
</table>


#### Tags
<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Example</th>
            <th>Doc</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>list</td>
            <td><code>KongClient.tag.list(offset, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#list-all-tags">https://docs.konghq.com/1.1.x/admin-api/#list-all-tags</a></td>
        </tr>
        <tr>
            <td>listByTag</td>
            <td><code>KongClient.tag.listByTags(tags, offset, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#list-entity-ids-by-tag">https://docs.konghq.com/1.1.x/admin-api/#list-entity-ids-by-tag</a></td>
        </tr>
    </tbody>
</table>


#### Service
<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Example</th>
            <th>Doc</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>create</td>
            <td><code>KongClient.service.create(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#add-service">https://docs.konghq.com/1.1.x/admin-api/#add-service</a></td>
        </tr>
        <tr>
            <td>update</td>
            <td><code>KongClient.service.update(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#update-service">https://docs.konghq.com/1.1.x/admin-api/#update-service</a></td>
        </tr>
        <tr>
            <td>updateByRoute</td>
            <td><code>KongClient.service.updateByRoute(routeNameOrId, data, callback);</code></td>
            <td><a href=""></a></td>
        </tr>
        <tr>
            <td>updateByPlugin</td>
            <td><code>KongClient.service.updateByPlugin(pluginId, data, callback);</code></td>
            <td><a href=""></a></td>
        </tr>
        <tr>
            <td>updateOrCreate</td>
            <td><code>KongClient.service.updateOrCreate(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#update-or-create-service">https://docs.konghq.com/1.1.x/admin-api/#update-or-create-service</a></td>
        </tr>
        <tr>
            <td>updateOrCreateByRoute</td>
            <td><code>KongClient.service.updateOrCreateByRoute(routeNameOrId, data, callback);</code></td>
            <td><a href=""></a></td>
        </tr>
        <tr>
            <td>updateOrCreateByPlugin</td>
            <td><code>KongClient.service.updateOrCreateByPlugin(pluginId, data, callback);</code></td>
            <td><a href=""></a></td>
        </tr>
        <tr>
            <td>get</td>
            <td><code>KongClient.service.get(nameOrId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#retrieve-service">https://docs.konghq.com/1.1.x/admin-api/#retrieve-service</a></td>
        </tr>
        <tr>
            <td>list</td>
            <td><code>KongClient.service.list(offset, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#list-services">https://docs.konghq.com/1.1.x/admin-api/#list-services</a></td>
        </tr>
        <tr>
            <td>delete</td>
            <td><code>KongClient.service.delete(nameOrId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#delete-service">https://docs.konghq.com/1.1.x/admin-api/#delete-service</a></td>
        </tr>
        <tr>
            <td>deleteByRoute</td>
            <td><code>KongClient.service.deleteByRoute(routeNameOrId, callback);</code></td>
            <td><a href=""></a></td>
        </tr>
    </tbody>
</table>


#### Route
<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Example</th>
            <th>Doc</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>create</td>
            <td><code>KongClient.route.create(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#add-route">https://docs.konghq.com/1.1.x/admin-api/#add-route</a></td>
        </tr>
        <tr>
            <td>createByService</td>
            <td><code>KongClient.route.createByService(serviceNameOrId, data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#add-route">https://docs.konghq.com/1.1.x/admin-api/#add-route</a></td>
        </tr>
        <tr>
            <td>update</td>
            <td><code>KongClient.route.update(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#update-route">https://docs.konghq.com/1.1.x/admin-api/#update-route</a></td>
        </tr>
        <tr>
            <td>updateByPlugin</td>
            <td><code>KongClient.route.updateByPlugin(pluginId, data, callback);</code></td>
            <td><a href=""></a></td>
        </tr>
        <tr>
            <td>updateOrCreate</td>
            <td><code>KongClient.route.updateOrCreate(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#update-or-create-route">https://docs.konghq.com/1.1.x/admin-api/#update-or-create-route</a></td>
        </tr>
        <tr>
            <td>updateOrCreateByPlugin</td>
            <td><code>KongClient.route.updateOrCreateByPlugin(pluginId, data, callback);</code></td>
            <td><a href=""></a></td>
        </tr>
        <tr>
            <td>get</td>
            <td><code>KongClient.route.get(nameOrId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#retrieve-route">https://docs.konghq.com/1.1.x/admin-api/#retrieve-route</a></td>
        </tr>
        <tr>
            <td>getByPlugin</td>
            <td><code>KongClient.route.getByPlugin(pluginId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#retrieve-route">https://docs.konghq.com/1.1.x/admin-api/#retrieve-route</a></td>
        </tr>
        <tr>
            <td>list</td>
            <td><code>KongClient.route.list(offset, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#list-routes">https://docs.konghq.com/1.1.x/admin-api/#list-routes</a></td>
        </tr>
        <tr>
            <td>listByService</td>
            <td><code>KongClient.route.listByService(serviceNameOrId, offset, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#list-routes">https://docs.konghq.com/1.1.x/admin-api/#list-routes</a></td>
        </tr>
        <tr>
            <td>delete</td>
            <td><code>KongClient.route.delete(nameOrId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#delete-route">https://docs.konghq.com/1.1.x/admin-api/#delete-route</a></td>
        </tr>
    </tbody>
</table>

#### Consumer
<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Example</th>
            <th>Doc</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>create</td>
            <td><code>KongClient.consumer.create(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#add-consumer">https://docs.konghq.com/1.1.x/admin-api/#add-consumer</a></td>
        </tr>
        <tr>
            <td>update</td>
            <td><code>KongClient.consumer.update(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#update-consumer">https://docs.konghq.com/1.1.x/admin-api/#update-consumer</a></td>
        </tr>
        <tr>
            <td>updateByPlugin</td>
            <td><code>KongClient.consumer.updateByPlugin(pluginId, data, callback);</code></td>
            <td><a href=""></a></td>
        </tr>
        <tr>
            <td>updateOrCreate</td>
            <td><code>KongClient.consumer.updateOrCreate(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#update-or-create-consumer">https://docs.konghq.com/1.1.x/admin-api/#update-or-create-consumer</a></td>
        </tr>
        <tr>
            <td>updateOrCreateByPlugin</td>
            <td><code>KongClient.consumer.updateOrCreateByPlugin(pluginId, data, callback);</code></td>
            <td><a href=""></a></td>
        </tr>
        <tr>
            <td>get</td>
            <td><code>KongClient.consumer.get(usernameOrId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#retrieve-consumer">https://docs.konghq.com/1.1.x/admin-api/#retrieve-consumer</a></td>
        </tr>
        <tr>
            <td>getByPlugin</td>
            <td><code>KongClient.consumer.getByPlugin(pluginId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#retrieve-consumer">https://docs.konghq.com/1.1.x/admin-api/#retrieve-consumer</a></td>
        </tr>
        <tr>
            <td>list</td>
            <td><code>KongClient.consumer.list(offset, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#list-consumers">https://docs.konghq.com/1.1.x/admin-api/#list-consumers</a></td>
        </tr>
        <tr>
            <td>delete</td>
            <td><code>KongClient.consumer.delete(usernameOrId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#delete-consumer">https://docs.konghq.com/1.1.x/admin-api/#delete-consumer</a></td>
        </tr>
    </tbody>
</table>

#### Plugin
<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Example</th>
            <th>Doc</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>create</td>
            <td><code>KongClient.plugin.create(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#add-plugin">https://docs.konghq.com/1.1.x/admin-api/#add-plugin</a></td>
        </tr>
        <tr>
            <td>createByRoute</td>
            <td><code>KongClient.plugin.createByRoute(routeId, data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#add-plugin">https://docs.konghq.com/1.1.x/admin-api/#add-plugin</a></td>
        </tr>
        <tr>
            <td>createByService</td>
            <td><code>KongClient.plugin.createByService(sericeId, data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#add-plugin">https://docs.konghq.com/1.1.x/admin-api/#add-plugin</a></td>
        </tr>
        <tr>
            <td>createConsumer</td>
            <td><code>KongClient.plugin.createByConsumer(consumerId, data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#add-plugin">https://docs.konghq.com/1.1.x/admin-api/#add-plugin</a></td>
        </tr>
        <tr>
            <td>update</td>
            <td><code>KongClient.plugin.update(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#update-plugin">https://docs.konghq.com/1.1.x/admin-api/#update-plugin</a></td>
        </tr>
        <tr>
            <td>updateOrCreate</td>
            <td><code>KongClient.plugin.updateOrCreate(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#update-or-create-plugin">https://docs.konghq.com/1.1.x/admin-api/#update-or-create-plugin</a></td>
        </tr>
        <tr>
            <td>get</td>
            <td><code>KongClient.plugin.get(pluginId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#retrieve-plugin">https://docs.konghq.com/1.1.x/admin-api/#retrieve-plugin</a></td>
        </tr>
        <tr>
            <td>list</td>
            <td><code>KongClient.plugin.list(offset, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#list-plugins">https://docs.konghq.com/1.1.x/admin-api/#list-plugins</a></td>
        </tr>
        <tr>
            <td>listByRoute</td>
            <td><code>KongClient.plugin.listByRoute(routeId, offset, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#list-plugins">https://docs.konghq.com/1.1.x/admin-api/#list-plugins</a></td>
        </tr>
        <tr>
            <td>listByService</td>
            <td><code>KongClient.plugin.listByService(serviceId, offset, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#list-plugins">https://docs.konghq.com/1.1.x/admin-api/#list-plugins</a></td>
        </tr>
        <tr>
            <td>listByConsumer</td>
            <td><code>KongClient.plugin.listByConsumer(consumerId, offset, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#list-plugins">https://docs.konghq.com/1.1.x/admin-api/#list-plugins</a></td>
        </tr>
        <tr>
            <td>delete</td>
            <td><code>KongClient.plugin.delete(pluginId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#delete-plugin">https://docs.konghq.com/1.1.x/admin-api/#delete-plugin</a></td>
        </tr>
    </tbody>
</table>

#### Certificate
<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Example</th>
            <th>Doc</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>create</td>
            <td><code>KongClient.certificate.create(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#add-certificate">https://docs.konghq.com/1.1.x/admin-api/#add-certificate</a></td>
        </tr>
        <tr>
            <td>update</td>
            <td><code>KongClient.certificate.update(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#update-certificate">https://docs.konghq.com/1.1.x/admin-api/#update-certificate</a></td>
        </tr>
        <tr>
            <td>updateOrCreate</td>
            <td><code>KongClient.certificate.updateOrCreate(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#update-or-create-certificate">https://docs.konghq.com/1.1.x/admin-api/#update-or-create-certificate</a></td>
        </tr>
        <tr>
            <td>get</td>
            <td><code>KongClient.certificate.get(nameOrId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#retrieve-certificate">https://docs.konghq.com/1.1.x/admin-api/#retrieve-certificate</a></td>
        </tr>
        <tr>
            <td>list</td>
            <td><code>KongClient.certificate.list(offset, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#list-certificates">https://docs.konghq.com/1.1.x/admin-api/#list-certificates</a></td>
        </tr>
        <tr>
            <td>delete</td>
            <td><code>KongClient.certificate.delete(nameOrId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#delete-certificate">https://docs.konghq.com/1.1.x/admin-api/#delete-certificate</a></td>
        </tr>
    </tbody>
</table>

#### SNI
<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Example</th>
            <th>Doc</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>create</td>
            <td><code>KongClient.sni.create(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#add-sni">https://docs.konghq.com/1.1.x/admin-api/#add-sni</a></td>
        </tr>
        <tr>
            <td>createByCertificate</td>
            <td><code>KongClient.sni.createByCertificate(certificateNameOrId, data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#add-sni">https://docs.konghq.com/1.1.x/admin-api/#add-sni</a></td>
        </tr>
        <tr>
            <td>update</td>
            <td><code>KongClient.sni.update(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#update-sni">https://docs.konghq.com/1.1.x/admin-api/#update-sni</a></td>
        </tr>
        <tr>
            <td>updateOrCreate</td>
            <td><code>KongClient.sni.updateOrCreate(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#update-or-create-sni">https://docs.konghq.com/1.1.x/admin-api/#update-or-create-sni</a></td>
        </tr>
        <tr>
            <td>get</td>
            <td><code>KongClient.sni.get(nameOrId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#retrieve-sni">https://docs.konghq.com/1.1.x/admin-api/#retrieve-sni</a></td>
        </tr>
        <tr>
            <td>list</td>
            <td><code>KongClient.sni.list(offset, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#list-snis">https://docs.konghq.com/1.1.x/admin-api/#list-snis</a></td>
        </tr>
        <tr>
            <td>listByCertificate</td>
            <td><code>KongClient.sni.listByCertificate(certificateNameOrId, offset, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#list-snis">https://docs.konghq.com/1.1.x/admin-api/#list-snis</a></td>
        </tr>
        <tr>
            <td>delete</td>
            <td><code>KongClient.sni.delete(nameOrId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#delete-sni">https://docs.konghq.com/1.1.x/admin-api/#delete-sni</a></td>
        </tr>
    </tbody>
</table>

#### Upstream
<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Example</th>
            <th>Doc</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>create</td>
            <td><code>KongClient.upstream.create(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#add-upstream">https://docs.konghq.com/1.1.x/admin-api/#add-upstream</a></td>
        </tr>
        <tr>
            <td>update</td>
            <td><code>KongClient.upstream.update(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#update-upstream">https://docs.konghq.com/1.1.x/admin-api/#update-upstream</a></td>
        </tr>
        <tr>
            <td>updateByTarget</td>
            <td><code>KongClient.upstream.updateByTarget(targetHostAndPortOrId, data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#update-upstream">https://docs.konghq.com/1.1.x/admin-api/#update-upstream</a></td>
        </tr>
        <tr>
            <td>updateOrCreate</td>
            <td><code>KongClient.upstream.updateOrCreate(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#update-or-create-upstream">https://docs.konghq.com/1.1.x/admin-api/#update-or-create-upstream</a></td>
        </tr>
        <tr>
            <td>updateOrCreateByTarget</td>
            <td><code>KongClient.upstream.updateOrCreateByTarget(targetHostAndPortOrId, data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#update-or-create-upstream">https://docs.konghq.com/1.1.x/admin-api/#update-or-create-upstream</a></td>
        </tr>
        <tr>
            <td>get</td>
            <td><code>KongClient.upstream.get(nameOrId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#retrieve-upstream">https://docs.konghq.com/1.1.x/admin-api/#retrieve-upstream</a></td>
        </tr>
        <tr>
            <td>getByTarget</td>
            <td><code>KongClient.upstream.getByTarget(targetHostAndPortOrId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#retrieve-upstream">https://docs.konghq.com/1.1.x/admin-api/#retrieve-upstream</a></td>
        </tr>
        <tr>
            <td>list</td>
            <td><code>KongClient.upstream.list(offset, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#list-upstreams">https://docs.konghq.com/1.1.x/admin-api/#list-upstreams</a></td>
        </tr>
        <tr>
            <td>delete</td>
            <td><code>KongClient.upstream.delete(nameOrId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#delete-upstream">https://docs.konghq.com/1.1.x/admin-api/#delete-upstream</a></td>
        </tr>
        <tr>
            <td>deleteByTarget</td>
            <td><code>KongClient.upstream.deleteByTarget(targetHostAndPortOrId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#delete-upstream">https://docs.konghq.com/1.1.x/admin-api/#delete-upstream</a></td>
        </tr>
        <tr>
            <td>health</td>
            <td><code>KongClient.upstream.health(nameOrId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#show-upstream-health-for-node">https://docs.konghq.com/1.1.x/admin-api/#show-upstream-health-for-node</a></td>
        </tr>
    </tbody>
</table>

#### Target
<table>
    <thead>
        <tr>
            <th>Method</th>
            <th>Example</th>
            <th>Doc</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>create</td>
            <td><code>KongClient.target.create(data, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#add-target">https://docs.konghq.com/1.1.x/admin-api/#add-target</a></td>
        </tr>
        <tr>
            <td>get</td>
            <td><code>KongClient.target.get(nameOrId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#retrieve-target">https://docs.konghq.com/1.1.x/admin-api/#retrieve-target</a></td>
        </tr>
        <tr>
            <td>list</td>
            <td><code>KongClient.target.list(upstreamHostAndPortOrId, offset, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#list-targets">https://docs.konghq.com/1.1.x/admin-api/#list-targets</a></td>
        </tr>
        <tr>
            <td>listAll</td>
            <td><code>KongClient.target.listAll(upstreamNameOrId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#list-all-targets">https://docs.konghq.com/1.1.x/admin-api/#list-all-targets</a></td>
        </tr>
        <tr>
            <td>delete</td>
            <td><code>KongClient.target.delete(nameOrId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#delete-target">https://docs.konghq.com/1.1.x/admin-api/#delete-target</a></td>
        </tr>
        <tr>
            <td>setHealthy</td>
            <td><code>KongClient.target.setHealthy(upstreamNameOrId, targetHostAndPortOrId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#set-target-as-healthy">https://docs.konghq.com/1.1.x/admin-api/#set-target-as-healthy</a></td>
        </tr>
        <tr>
            <td>setUnhealthy</td>
            <td><code>KongClient.target.setHealthy(upstreamNameOrId, targetHostAndPortOrId, callback);</code></td>
            <td><a href="https://docs.konghq.com/1.1.x/admin-api/#set-target-as-unhealthy">https://docs.konghq.com/1.1.x/admin-api/#set-target-as-unhealthy</a></td>
        </tr>
    </tbody>
</table>






































