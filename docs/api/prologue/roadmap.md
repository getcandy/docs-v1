# Roadmap

The long and winding road to version 1.0! :smiley:

## 0.13 Payment Packages

Payment providers integrations, such as Stripe, will be moved to their own packages. This will allow for installation of individual payment gateways and provide good examples to developers wanting to build their own integrations.

## 0.14 Improved Search

Enhancements to the search endpoint to introduce performance improvements by avoiding database loading of resources. Also, moving to a driver-based set-up so we can introduce Meilisearch and MySQL drivers, along with the existing Elasticsearch.

## 0.15 Plugin Architecture

This enhancement will provide a standardised way to create "plugins" for the GetCandy API. It will allow plugins to add "included" resources within existing core resources.

## 0.16 Improved Shipping Logic

We want to ensure shipping logic can be extended and cover all requirements by making it driver-based, so it can support packages.

## 0.17 Taxation

Currently taxation is very basic. We want to review the way tax rates are used to ensure it suits all requirements and can be extended with plugins.

## 0.18 Discounts

Discounts shouldn't be in the core system, not everyone will use them. We wish to move discounts to an optional package and provide a well documented way to modify basketing pricing.

## 0.19 Additional Product Types

Currently we have product variants, but that is quite limiting. We want to be able to offer other product types, such as bundles and configurable items.

## 0.20 Inventory

To ensure GetCandy can be reliably connected with inventory stock systems, we want to create standardised approach to storing stock of products in different locations.

## 0.21 Improved Order Management

Currently refunds can be made, but they do NOT relate to a specific order line (or shipping). This update will introduce functionality for handling refunds, exchanges and returns.