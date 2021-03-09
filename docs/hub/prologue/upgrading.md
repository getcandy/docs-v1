# Upgrade Guide

## From 0.9

### Update your nuxt.config.js like so

```js
-- mode: 'spa',
++ ssr: false,
```

### Update middleware/hub.js as follows on line 47

```js
-- const customerGroups = await app.$gc.customerGroups.get()
++ const customerGroups = await app.$getcandy.on('CustomerGroups').getCustomerGroups()
```

### Update the @getcandy packages to 0.10 in the package.json folder

```json
"@getcandy/hub-categories": "^0.11.0",
"@getcandy/hub-collections": "^0.11.0",
"@getcandy/hub-core": "^0.11.0",
"@getcandy/hub-customers": "^0.11.0",
"@getcandy/hub-orders": "^0.11.0",
"@getcandy/hub-products": "^0.11.0",
"@getcandy/hub-reports": "^0.11.0",
"@getcandy/hub-shipping": "^0.11.0",
"@getcandy/js-client": "^0.11.0",
"@getcandy/js-client-nuxt": "^0.11.0",
"@getcandy/node-client": "^0.11.0",
```

### Install the latest packages

You should be able to just run yarn install to get the latest versions, if you have issues, try removing node_modules and the lockfile and try again.