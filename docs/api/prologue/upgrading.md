# Upgrade Guide

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