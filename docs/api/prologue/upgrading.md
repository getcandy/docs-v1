# Upgrade Guide
[[toc]]
## v0.12
::: tip
You can see a full list of changes on the [release page](/api/prologue/release.html#v0-12-0)
:::

Update your `@getcandy/candy-api` dependency to `^0.12`

```bash
$ composer update @getcandy/candy-api
```

Run Migrations

```bash
$ php artisan migrate
```

Reindex your categories and products

``` bash
$ php artisan candy:categories:reindex
$ php artisan candy:products:reindex
```

### High Impact Changes

We have tried to document all high impact changes below. If you have doubts feel free to reach out on our [Discord Server](https://discord.gg/mHf5cGjm) and we'll do our best to advise.

#### Order Processing Changes

Some columns have been added/removed from the database. The tables/columns affected are:

- `orders`
    - Removed `company_name` column as it wasn't being used and we have other columns for that now
    - Added `billing_company_name` and `shipping_company_name` columns.
- `countries`
    - Remove `country` column in favour of a `country_id` relationship

#### Current user endpoint changes

Previously when returning the current user via `users/current` there was some hard coded includes, this has been replaced to allow the `include` query parameter.
You should update any calls to this endpoint if you rely on included resources. The previous default includes were:

```php
['addresses.country', 'roles.permissions', 'customer', 'savedBaskets.basket.lines']
```
#### Drafting changes

The way drafting previously worked has now been refactored to be less destructive. You should reindex your products before going back into the hub to get everything in sync.

#### Route searching changes

The way you search for routes has changed on the API. We have removed the `path` column and also the `locale` column in favour of a `language_id` relation.

When you search for a route, previously you would do something like:
```javascript
const { data } = await axios('routes/search', {
    params: {
        slug: 'slug-for-the-product',
        path: null,
        include: 'element'
    }
})
```
This should now be changed to:
```javascript
const { data } = await axios('routes/search', {
    params: {
        slug: 'slug-for-the-product',
        language_code: 'en',
        element_type: 'product',
        include: 'element'
    }
})
```

#### Language changes

The schema of languages has been changed and also the way that language is detected through our middleware.

- The `lang` column has been replaced by `code` and the `iso` column has been removed.
- When detecting the language to use for API responses, we now parse the `accept-language` header properly.

## v0.11.5

You must reindex your categories and products by running

```bash
$ php artisan candy:products:reindex
$ php artisan candy:categories:reindex
```

You should also run migrations

```bash
$ php artisan migrate
```
