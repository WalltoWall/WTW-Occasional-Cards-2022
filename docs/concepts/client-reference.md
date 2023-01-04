# Client Reference

Clients are provided detailed documentation for all web projects. The following
sections describe why and what to include.

## What to provide clients

In addition to a fully working website, clients should be provided documentation
explaining how to maintain and update the site. This involves explaining the
fundamental elements such as Blocks and CMS custom types.

The better we can describe how the site should be maintained and updated, the
better the site will function and look down the road.

Documentation should cover the following:

- How to use the CMS
- How to build and update pages with Blocks
- What Blocks are available
- What content types are available and how they interact with eachother
- How to perform tailored common workflows for their site. (think: How to update
  news posts, etc.)

## A living client reference

The client reference documentation lives directly within the project's codebase.
Under the hood, this project utilizes [Storybook](https://storybook.js.org/) to
streamline the process of creating client documentation.

Storybook provides an isolated development environment via `.stories` files.
These `.stories` files allow developers to author components in a way that
facilitiates creating components that are more robust, reusable, and generate
useful interactive documentation. By using Storybook, we aim to reduce the
amount of friction required to create great client documentation by making it a
natural part of the project workflow.

In practice, this means that it's recommended to do the **majority** of your
development in Storybook, and **not** within the NextJS development server.

When making changes to an already developed site, be sure to make the proper
additions and changes to any corresponding `.stories` files. This will make it
easier for not only clients to understand the site as it evolves, but also to
Wall-to-Wall employees that are maintaining the site going forward.
