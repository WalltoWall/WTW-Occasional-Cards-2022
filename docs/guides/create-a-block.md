# Create a Block

Blocks are componentized so individual blocks can be made in isolation from
eachother. The following process describes creating a Block. This process can be
repeated for all Blocks on the site.

For more information on Blocks, see [Architecture - BDD: Block Driven
Development][arch-bdd].

## Determine the Blocks's purpose

Before writing code, a proper understanding of the Blocks's purpose must exist.
BLocks are typically horizontal content areas of a page that should be reusable
on any page (with the exception of visual design incompatibility).

Read the [Blocks](../concepts/blocks.md) concept document for more on this
topic.

## Create the Block in the CMS

In this example, we'll use Prismic's Slices, their own implementation of a
"block" as a practical guide.

Once we know what the Block will contain, we'll need to create the Slice in
Prismic.

In Prismic, Slices can contain two groups of fields: repeatable and
non-repeatable.

Repeatable fields are grouped into repeatable blocks with arbitrary quantity.
For example, an image gallery Slice would contain repeatable fields for each
image: the image itself and a text caption.

Non-repeatable fields are static fields for the Slice. Continuing the example of
an image gallery Slice, non-repeatable fields could be a gallery name and
description.

See the official [Prismic Slices][prismic-slices] documentation for more details
on configuring Prismic for your Slice.

## Create the React components

The next step is to create the React components that will render your Block. All
Blocks are typically located in `src/blocks`, or in a Prismic project,
`src/slices`. Within this directory, each block will have their own folder named
after the Block.

## Register Blocks

Once the React component is created, the block needs to be registered for use
within the main template.

All registration is handled in a file like `src/blocks/index.js`.

1. Import your Slice at the top of the file:

   ```js
   import { CallToAction } from "./CallToAction"
   ```

1. Add your Slice to the `slices` constant:

   ```js
   export const slices = {
     // ...
     CallToAction,
     // ...
   }
   ```

## Add to a page in Prismic

The next step is to test the Block in your app. You can do this by adding the
Block to a page in the CMS and restarting the development server or reloading
the page.

Now that the Block is visible in the browser, you can build the functionality
and styling necessary for the Slice.

## Write client documentation

Once the Block is complete, the final step is to document it for client use.
Note that this is different from developer documentation; it is not a set of
instructions on using the Block and how its technically implemented. Instead,
this is documentation client will use when updating content in the CMS.

A brief description of the Block's appearance and purpose along with a
description of each field in the CMS should be included.

All client documentation should be facilitated with Storybook with a `.stories`
file named appropriately.

[arch-sdd]: concept-architecture.md#sdd-slice-driven-development
[prismic-slices]:
  https://intercom.help/prismicio/content-modeling-and-custom-types/field-reference/slices
[gatsby-source-prismic-slices]:
  https://github.com/angeloashmore/gatsby-source-prismic#query-slices
