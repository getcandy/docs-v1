# Quick Install

GetCandy can be a little tricky to configure for new users of the project, so the quick installation has been developed to get you up and running as quickly as possible. 

When you become more familiar, you can get delve further into the workings.

## Let's go!

First, install a nice fresh copy of Laravel

```bash
composer create-project laravel/laravel getcandy
cd getcandy
```

Now we need to install the GetCandy Laravel package.

```bash
composer require getcandy/candy-api:^0.12-beta
```

Finally, let's run the installer and configure our set-up.

```bash
php artisan candy:quick-install
```

You will be asked if you wish to...

- Install and configure Sanctum or Passport
- Install demo data
- Use MySQL, Meilisearch or Elasticsearch for searching the catalogue
- Install the hub


Once complete you will be provided with the details to access the API and the hub. Enjoy! :tada:
