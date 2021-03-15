# Languages

::: warning ISSUE For Alec
What is the purpose of having both `lang` and `iso` fields? In the DB `lang` is set to "en", but `iso` is set to "gb" (which isn't a valid ISO language, should be "en"). I would like to present a real-world example.
:::

Languages in GetCandy are used to help translate attribute data for resources, such as products. Each language's `iso` column must be unique but they can share the same `lang` value.

::: tip
You can find a list of ISO Language codes here [List of ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
:::

The API will look for the `'accept-language'` HTTP header and set the API's language based upon this value and what is available in the database. If the language requested in `'accept-language'` HTTP header does not exist in the database, GetCandy will fallback to whatever the default language is.

If the `accept-language` header is not present, GetCandy will also fallback to the default language automatically.

The `'accept-language'` HTTP header is sent by most browsers when making requests, so there is nothing generally you need to code, unless you want to force a specific language for some reason.

::: tip API Reference
[View the API Reference section for Languages](https://api-reference.getcandy.io/#tag/Languages)
:::
