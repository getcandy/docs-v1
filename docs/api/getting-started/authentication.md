# Alternative Authentication

GetCandy installation instructions default to using Laravel Sanctum, however you can use which ever authentication method you like. Two obvious alternatives are Laravel Passport and JWT Tokens.


## Laravel Passport

>  Laravel makes API authentication a breeze using Laravel Passport, which provides a full OAuth2 server implementation for your Laravel application in a matter of minutes.

Install [Laravel Passport](https://laravel.com/docs/master/passport) as per their documentation and update your RouteServiceProvider.php to use the below.

```php
use GetCandy;
//...

public function boot()
{
    $this->configureRateLimiting();

    $this->routes(function () {
        GetCandy::router([
            'prefix' => 'api/v1'
        ], function ($registrar) {
            Route::group([
                'middleware' => ['auth:api', 'api']
            ], function () use ($registrar) {
                $registrar->auth();
            });
            Route::group([
                'middleware' => ['api']
            ], function () use ($registrar) {
                $registrar->guest();
            });
        });
        // ...
     });
}
```

#### Guest routes and client credentials
Previously, GetCandy used an altered version of the `Laravel\Passport\Http\Middleware\CheckClientCredentials` middleware, but since removing Passport from the core, we found this would have been too opinionated.

The issue with the original middleware was this allowed access tokens created via the `client_credentials` grant to access the API, but also meant that even if a user with an authenticated access token pinged the API, they wouldn't be bound to the request.

There seems to be some debate on this, [which you can see here](https://github.com/laravel/passport/issues/898), we currently do not have a solution that wouldn't require opinionated changes to the core GetCandy middleware, so for now we suggest reading the thread linked above and make a conscious decision based on your own needs.

If we figure out a solid solution we will post it either here or in the [forum](https://community.getcandy.io/) for discussion.


## JWT Tokens

Not something GetCandy supports in our documentation, but if you would like to go this route please check [jwt-auth](https://github.com/tymondesigns/jwt-auth).