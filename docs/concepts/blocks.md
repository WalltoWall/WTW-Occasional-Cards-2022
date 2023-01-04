# Blocks

Blocks are reusable custom components defined in a CMS with specific content
fields. Blocks can be stacked and re-ordered on-the-fly as needed. Individual
pages can be constructed using these reusable components to create unique
layouts.

Think of them as Lego blocks for websites.

With this technique, traditional CMS functionality with multiple templates, one
for each page type, becomes unnecessary. Instead, a single template with logic
to render Blocks as requested can be used. This reduces technical debt since
each block of content has a single source of functionality and styling.

Blocks are componentized so individual slices can be made in isolation from
eachother. When necessary, Blocks can provide contextual information to other
blocks and change as needed.

### Prismic Slices

A common CMS for W|W website is Prismic. In Prismic, they reference the concept
of a "Block" as a Slice.

For more technical information on Prismic Slices, read Prismic's [official
Slices documentation][slices-docs].

For instructions on creating a Slice, read the
[Create a Slice](guide-create-a-slice.md) guide.

## Determining the Blocks's purpose

Before writing code, a proper understanding of a Blocks's purpose should exist.
Blocks are typically horizontal content areas of a page that should be reusable
on any page (with the exception of visual design incompatibility).

The following questions come to mind:

**How will the block act with other types of block above and below it?**

Blocks may need to interact with adjacent blocks. For example, elements may
stylistically extend outside the Blocks's container and overlap content above or
below. Or the slice may need to include a top border if it follows a Block of
the same type.

**What kind of stylistic variations will this block have?**

Different pages may require slight tweaks to the coloring or positioning of the
Blocks's elements. Providing different "styles" or "themes" selectable in the
CMS can help in this case.

Minimizing the number of variations makes development easier and causes less
confusion for clients. If you find yourself making a large amount of variations,
consider breaking the Block into multiple Blocks with distinct names.

**Will this slice be reused anywhere else?**

If the answer to this question is no, a traditional Block may not be the best
fit. Instead, a project could contain an "unconfigurable" Block that allows the
user to select from a list of pre-defined components to insert in that Blocks's
position. This Block would see the component selected and insert it directly
without any custom data from the CMS.

Alternatively, a page override could be used to inject a Block that only exists
programatically and not in Prismic. See
[Overriding Pages and Blocks](guide-overriding-pages-and-blocks.md) for more
details.

[slices-docs]:
  https://user-guides.prismic.io/content-modeling-and-custom-types/field-reference/slices
