# Customers

::: tip
Content to be improved...
:::

Customers should not be confused with users. They are fundamentally different. Users are, as you'd expect, people who can log into your storefront and make purchases. Customers are records that hold information about either a customer or company that a user can be associated too.

In most cases, you will find that your customer records will only have one user attached to them, but you have the flexibility to attach multiple users if your store requires it.

A use case for this might be that you have a customer record that represents a company and you want multiple users to be associated with the customer. This would allow them to share information without duplicating data across multiple users.


## Customer Groups

Customer groups are an efficient way of grouping customers into specific areas of your online store.
They enable you to limit or tailor what your API returns based on who is making the request and what customer group they belong to. Resources that you can attach customer groups to are (but not limited to):

- Products
- Product variant prices
- Categories
- Shipping Prices
- Collections
- Payment Types

For example, assuming you have two customer groups, **Retail** and **Trade**.

You may wish for Trade customers to get a reduced price for a certain product, so you can add a trade price for a product, assign it to the customer group, attach that to the customer and then any users associated to that customer will see those prices.

