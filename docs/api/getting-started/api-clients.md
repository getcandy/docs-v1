# API Clients

Once you have your shiny new e-commerce API up and running, you will likely want to test it out!

## Testing Locally

Locally you can use tools such as [Postman](https://www.postman.com/) or [Insomnia](https://insomnia.rest/) to connect to your API and make requests manually.

If you are really impatient and want to see something work right now, try hitting the `/root` endpoint to get basic information about your API. If you followed the installation instructions this will be at `http://localhost:8000/api/v1/root`.


## Connecting to Storefronts

It is highly recommended that the GetCandy API is used to power a modern [NuxtJS](https://nuxtjs.org/) or [React](https://reactjs.org/) storefront. You can of course connect to the API via Axios yourself, however you will probably benefit from using a JS client library generated from the OpenAPI specification, see [API Reference](/api/getting-started/api-reference.html).

Or if you would prefer, you can use our [pre-generated JS library](https://github.com/getcandy/js-client).

::: tip
Check our [PWA Storefront](https://getcandy.io/storefront) built in NuxtJS!
:::