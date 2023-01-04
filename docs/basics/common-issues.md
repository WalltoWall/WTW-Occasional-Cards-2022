# Troubleshooting

When working with NextJS, there are some common issues that you may
come across during development. This document aims to outline strategies other
Wall-to-Wall developers found success with to work around these issues.

## General Issues

In most cases where you are experiencing strange or unexpected behavior in a
NextJS project, it's recommended to delete the `.next` and folder
from the project.

```bash
rm -rf .next
```

Behind the scenes, NextJS performs some aggressive caching that aids in speeding
up development, but can sometimes result in behavior and content refreshing
issues.

## Safe Property Access

A common cause of broken website builds with Gatsby are due to unsafe nested
property access.

Consider a data object that we receive from an API:

```ts
const data = {
  page: {
    body: {
      textSlice: { text: "Home" },
    },
  },
}

const title = data.page.body.textSlice.text
// => 'Home'
```

This seems fine initially, but like in most front-end applications, it's unsafe
to assume that user generated data will _always_ be as we expect.

Consider another object that we may get back from an API.

```ts
const data = {
  page: {
    data: {
      body: {
        textSlice: undefined,
      },
    },
  },
}

const title = data.prismicPage.data.body.textSlice.text
// => TypeError: Cannot read property 'text' of undefined
```

In the above scenario, a CI build will always fail if some user-generated is not
specified!

### Solution

Whenever working with user-generated data, it's recommended to use some form of
safe property access. [**Optional chaining**][mdn-optional-chaining] is the
primary method for safe property access.

[mdn-optional-chaining]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
