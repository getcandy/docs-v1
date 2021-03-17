# Channels

Channels represent different outlets for your e-commerce API. Most installs will only have one channel to represent a single storefront. However, you can have as many channels as you require.

Perhaps you have multiple storefronts, or want to use channels for different marketplaces, e.g. ebay or Amazon.

Once created, you can assign products, categories, collections, etc. to channels, therefore restricting what each channel can return. E.g. Maybe you sell tools and have one site for all your products, but you also want a dedicated power tools website - that can be achieved with channels.

Channels in the database are given a `name`, `handle` and `url`. The name and URL are purely for your reference.

Your API will always have a default channel, which is used when making API calls without a channel specified.

The GetCandy installer will create an initial default channel for you called `webstore`.

To specify a channel to use when making an API request from your storefront you should set the `X-CANDY-CHANNEL` HTTP Header.

A good way to do this is to set the header globally, e.g. 

```js
let instance = axios.create({
  headers: {
    common: {
      'X-CANDY-CHANNEL': 'webstore'
    }
  }
})
```

::: tip API Reference
[View the API Reference section for Channels](https://api-reference.getcandy.io/#tag/Channels)
:::

