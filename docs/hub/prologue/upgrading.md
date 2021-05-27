# Upgrade Guide

[[toc]]
## 0.12.11

Update your `@getcandy` dependencies to `0.12.11`

## 0.12

::: tip The quick and easy way to update
If you haven't made any changes to the Nuxt app yourself, the easiest way to update would be to clone down the Hub again and start from there.
:::

If you cannot reclone the repo again, follow the steps outlined below. If you have issues then feel free to reach out on our [Discord Server](https://discord.gg/mHf5cGjm)


### Update `middleware/hub.js`

Remove

```javascript
app.$getcandy.setHttp(app.$axios)
```

Replace line `31` with:
``` javascript
--- store.commit('setLocale', find(languages.data.data, l => l.default).lang)
+++ store.commit('setLocale', find(languages.data.data, l => l.default).code)
```

Replace line `47` with:

``` javascript
--- const customerGroups = await app.$getcandy.on('CustomerGroups').getCustomerGroups()
+++ const customerGroups = await app.$getcandy.on('customer-groups', 'getCustomerGroups')
```

### Update `package.json`

Replace the `@getcandy/js-client-nuxt` module with `@getcandy/nuxt-client` at the same version constraint

``` json
"dependencies": {
    //...
    "@getcandy/hub-categories": "^0.12.0",
    "@getcandy/hub-collections": "^0.12.0",
    "@getcandy/hub-core": "^0.12.0",
    "@getcandy/hub-customers": "^0.12.0",
    "@getcandy/hub-orders": "^0.12.0",
    "@getcandy/hub-products": "^0.12.0",
    "@getcandy/hub-reports": "^0.12.0",
    "@getcandy/hub-shipping": "^0.12.0",
    "@getcandy/js-client": "^0.12.0",
    "@getcandy/nuxt-client": "^0.12.0",
    "@getcandy/node-client": "^0.11.0",
    //...
}
```

::: tip
Notice that `@getcandy/node-client` should stay at `0.11.0` as this will be phased out in a later release.
:::

Update these other packages:

```json
"dependencies": {
    //...
    "@tailwindcss/ui": "^0.7.0",
},
"devDependencies": {
    //...
    "@nuxtjs/tailwindcss": "^3.4.2",
}
```

Add Tailwindcss forms package

```json
"dependencies": {
    //...
    "@tailwindcss/forms": "^0.1.4"
}
```

### Update your Tailwind config

Replace your `tailwind.config.js` with the config below. Bear in mind to migrate any changes you may have done yourself.

```javascript
module.exports = {
  theme: {},
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  plugins: [
    require('@tailwindcss/ui')
  ],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts',
      './node_modules/@getcandy/**/src/**/*.vue'
    ]
  }
}
```

### Nuxt config updates

In `nuxt.config.js`

- Remove `@getcandy/js-client-nuxt` fully from `buildModules`

At the top of `modules` include the new package..

```javascript
  modules: [
    '@getcandy/nuxt-client',
    // ...
  ]
```

Save this icon sprite under `static/icon-sprite.svg`
[https://github.com/tabler/tabler-icons/blob/master/tabler-sprite.svg](https://github.com/tabler/tabler-icons/blob/master/tabler-sprite.svg)


### Update ACL middleware
Update your `middleware/acl.js` file as follows:

```javascript
import HubUser from '@getcandy/hub-core/src/modules/HubUser.js'

export default async function ({ store, route, redirect, $auth }) {
  if (!$auth.user) {
    await $auth.logout()
  }

  if (!($auth.user instanceof HubUser)) {
    const hubUser = new HubUser($auth.user.data)
    await $auth.setUser(hubUser)
  }

  const meta = route.meta[0]
  const permissions = meta ? meta.permissions : null

  if (permissions && !$auth.user.hasRole('admin')) {
    const result = $auth.user.can(permissions)
    if (!result) {
      throw Error('Unauthorised')
    }
  }
}
```

### Laravel Sanctum Users

Add a new `SANCTUM_URL` entry to your `.env` file.

```
SANCTUM_URL=http://localhost:8000/api
```

Replace `@nuxtjs/auth` with the updated Nuxt Auth module.

``` javascript
--- "@nuxtjs/auth": "^4.4"
+++ "@nuxtjs/auth-next": "^5.0.0-1611574754.9020f2a",
```

Add the updated auth module to your modules:

```javascript
modules: [
  '@nuxtjs/auth-next' // Add below @nuxtjs/axios
]
```
Update the auth section in your `nuxt.config.js` to:

```javascript
  auth: {
    strategies: {
      hub: {
        provider: 'laravel/sanctum',
        url: `http://localhost:8000/api`,
        endpoints: {
          user: { url: '/v1/users/current?include=customer.customerGroups', method: 'get', propertyName: 'data' }
        }
      }
    }
  }
```
### Passport users

Update the auth strategy name to `hub`:

```javascript
auth: {
    strategies: {
        hub: {
            // ...
        }
    }
}
```
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