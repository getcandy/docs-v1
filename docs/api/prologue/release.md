# Release Notes

## v0.12.0

### 🐞 Fixes
- Fixed an issue that was causing a indefinite wildcard search on products
- Allow certain fields to be nullable on a customer address (`company_name`, `address_two`, `address_three`)
- Fixed some issues on route creation
- Fixed issue where shipping method relationships were not having their timestamps updated
- Fixes to some migrations
- Fixed an issue where the recycle bin item wasn't returned on the relationship
- Fixed and issue where the indexable event wasn't being triggered when publishing a resource
- Fixes to drafting and publishing of resources
- Fixed an issue where `path` wasn't updating when updating a route
- Fixed an issue where the customer was not attached to the initial user on install

### ⭐ Improvements
- Slight optimisation for Elasticsearch and the fields it returns
- Drafting and Publishing of a draft will now run in a transaction, you can also extend the drafting functionality in your plugins.
- SKU uses `trim` when being saved
- Languages have been refactored and simplified so now we only rely on `code`. The `lang` column has been replaced by `code` and the `iso` column has been removed.
- When detecting the language to use for API responses, we now parse the `accept-language` header properly.

### 🏗️ Additions
- Added endpoint to get a payment provider via it's given ID
- Added Stripe Payment Intents provider
- Added a `RebuildTree` action and command for categories, so if your category tree is messed up you can run `candy:categories:rebuild`
- Added `user/addresses` endpoint to get the current users saved addresses
- Added initial report exporting logic, this will now run and exporter in the background and email you when ready to download.
- Add some additional reports
    - Average spending across customer groups
    - Total spending across customer groups


## v0.11.5

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