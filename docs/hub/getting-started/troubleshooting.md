# Troubleshooting

If you're having issues getting the hub set up, we understand it can be frustrating. Which is why we've compiled a list of common scenario's and how to fix them.


### I'm getting a CSRF token mismatch when I try to log in

<alert>
Make these changes on your Laravel app.
</alert>

This sounds like an issue with Sanctum and how the hub is connecting to the API. Check that they are both running on the same TLD and in your `cors.php` config file, check that `supports_credentials` is set to `true`.

If you're still seeing the error it's likely Sanctum hasn't been properly set up, double check the install steps for Sanctum.


### I'm getting a 404 for /api/v1/sanctum/csrf-cookie when I try and log in

<alert>
Make these changes on your Laravel app.
</alert>

Make sure you have set `'prefix' => 'api/v1/sanctum'`, in your `sanctum.php` config file.


### The API just returns "Unauthenticated"

<alert>
Make these changes on your Laravel app.
</alert>

Looks like Sanctum isn't authenticating you via the `auth:sanctum` middleware. Check that you have set your `SESSION_DRIVER` to cookie in your `.env` file.

If the issue persists, double check your Sanctum installation.