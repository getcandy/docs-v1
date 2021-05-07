# Upgrade Guide
[[toc]]

## v0.12.5
### Upgrading

Update the GetCandy API package.

```
composer update getcandy/candy-api
```

Run any migrations

```
php artisan migrate
```

### 🐞 Fixes

- Fixed an issue that caused an un hydrated basket being returned when fetching shipping methods for an order.
- Fixed an issue when publishing/drafting customer groups that was causing `purchasable` to not get populated correctly.
- Fixed an issue on the indexer which caused disabled languages to be indexed and if they didn't have a value it would error.
- Fixed an issue where order shipping or billing details were an empty array on create.

### ⭐ Improvements

- Publishing variant tiers from a draft has been simplified.
- In the recycle bin, entries are now ordered by the date they were added descending.
- When uploading an asset via the simple upload endpoint, you can now specify the filesystem disk to use. e.g. `disk=public`
- When uploading an asset via the simple upload endpoint, you can now specify a path, if blank `uploads` will be the default.
- When fetching a product you can now specify an SKU in the action.
- Improved the way product variant tiers were fetched, this now relys on the underlying scope rather than passing through customer group ids.

### 🏗️ Additions

- Added manual flag to transactions
- Added an `GetCandy\Api\Core\Orders\Events\OrderStatusUpdatedEvent` for when an order status is updated.
- Added `order_status` key to the order response, this will return an array of details if the status has been matched from the `getcandy.php` config.

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
