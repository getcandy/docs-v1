# Release Notes

## v0.11.5

### Upgrading

You must reindex your categories and products by running

`php artisan candy:products:reindex`
`php artisan candy:categories:reindex`

You should also run migrations

`php artisan migrate`

### 🐞 Fixes
* Fixed a missing class on the `SyncWithBasketListener`
* Fixed an issue where the wrong Eloquent resource was being returned when fetching shipping estimates.
* Fixed an issue where the incorrect `published_at` date was being set when editing a discount
* Fixed an issue when passing the search type as a singular string i.e. `product`would break the searching. Now you can pass both the singular and plural versions.
* General fixes to Discount editing and creation.
* Tweaked offset calculation when searching on Elasticsearch.
* Fixed aggregations not returning on search results.
* Fixed invalid relationship call when returning activity log records.
* Fixed default `depth` setting when getting a category tree.
* The `SavedBasketResource` now includes the related `BasketResource` correctly.
* Fixed an issue which prevented assets being added by YouTube or URL.
* Fixed an issue which caused an error if you tried to add the same YouTube video more than once to a product. Thumbnail naming was clashing, now we will get a unique name.
* Fixed an issue which, when publishing a category draft, would cause child nodes to disappear.
* Fixed namespace issue on `PluginResource` and `PluginCollection`.
* Fixed an issue where a product or category wasn’t being removed from the search index when it was hard deleted.
* Fixed an issue where not sending `path` when searching for a route gave a validation error. This should allow null.

### 🔀 Changes
* **High Impact** Changed `POST` method on `basket-lines/{id}/remove` to a `PUT` request. This is so it matches the spec.
* **High Impact** When filtering on multiple values, a pipe `|` should be used instead of a hyphen `-`
* **High Impact** The way products/categories channel and customer group data gets indexed has changed.
    * **Channels:** Previously if a channel wasn’t published it wouldn’t get added into the document, this has been changed so that the `published_at` field is now indexed as a date. This will allow us to filter on these documents more accurately in the future.
    * **Customer groups:** Previously if the `visible` and `purchasable` fields weren’t set the customer group wouldn’t be added to the document, now these fields have been added as `boolean` types to again allow better filtering in the future.
*  Added `count` to the pagination response on search results.
* Added `draft` filter on `FetchProduct` action.
* Channel and Customer Group scopes will check if we are on the command line before resolving.

### ⭐ Improvements
* Used eager loading when indexing instead of the query builder to boost performance.
* Category filter has been added back.
* Removed using the query builder to count products and children and use Laravel’s `with_count` instead to boost performance.

### 🏗️ Additions
* Added `provider_users` table for association with payment providers.
* `BasketResource` now includes the basket currency

### 💖  Thanks to
@ven7ura
@Repox 