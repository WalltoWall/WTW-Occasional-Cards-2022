# Styling

Wall-to-Wall JS projects have selected [TailwindCSS][tailwind] as its preferred
styling solution because it:

- Enforces consistency with an explicit global theme.
- Enables developers to implement and respond design requirements quickly.
- Has great performance due to unused style purging and high class re-use.
- Remove the difficulties and burden of CSS naming with its atomic approach.

As a quick example, instead of needing to write something like this:

```css
.card {
  font-size: 16px;
  width: 100%;
  background-color: red;
}

.card--green {
  background-color: green;
}

@media screen and (min-width: 40em) {
  .card {
    font-size: 20px;
    width: 50%;
  }
}

@media screen and (min-width: 52em) {
  .card {
    font-size: 24px;
  }
}
```

```jsx
const Card = ({ isGreen }) => {
  return <div className={clsx("card", isGreen && "card--green")} />
}
```

We can just write following:

```jsx
const Card = ({ isGreen }) => {
  return (
    <div
      className={clsx(
        "text-16 sm:text-20",
        "w-full sm:w-1/2",
        isGreen ? "bg-green" : "bg-red"
      )}
    />
  )
}
```

With Tailwind, component styles are achieved by applying pre-existing classes.
At first, this may feel a bit strange if you're comfortable working directly
with CSS, but once you've actually built something this way, you'll quickly
notice some real benefits:

- **You aren't spending energy inventing class names.** No more adding thinking
  of class names like `.sidebar__inner-wrapper` or components like
  `<SidebarInnerWrapper />` just to style something. No more agonizing over the
  perfect abstract name for something that's just a flex container.
- **Your CSS stops growing**. Using a traditional approach, your CSS bundle gets
  larger _every time_ you add a new feature. With atomic CSS, all of your styles
  are reusable so you rarely need to write new CSS.
- **Making changes feels safe**. CSS is global and you can never know what
  you're breaking when making a change. Atomic classes ensure styles in your
  components are local, so you can change them without breaking something else.

For more information on using Tailwind in a project, refer to its
[documentation][tailwind-docs].

## Further Reading

Below are some curated posts and articles that help to explain the benefits of
an atomic based approach to styling:

- [By The Numbers: A Year and a Half with Atomic CSS](https://medium.com/@johnpolacek/by-the-numbers-a-year-and-half-with-atomic-css-39d75b1263b4)
- [Building a Scalable CSS Architecture](https://blog.algolia.com/redesigning-our-docs-part-4-building-a-scalable-css-architecture/)
- [CSS Utility Classes and "Separation of Concerns"](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/)

## Variants

TODO

[tailwind]: https://tailwindcss.com
[tailwind-docs]: https://tailwindcss.com/docs
