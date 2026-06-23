1) Build a grid with repeat / minmax / auto-fit

    repeat() repeats the column pattern.
    auto-fit automatically fits as many columns as possible.
    minmax(250px, 1fr) makes each card at least 250px wide and allows it to grow to fill available space.

2) Decide Flexbox vs Grid for 3 real cases

    Navigation Bar - Flexbox
    The navigation links are arranged in a single row, making Flexbox the best choice for one-dimensional layouts.

    Project Cards - Grid
    The project cards need rows and columns, so Grid is better suited for this two-dimensional layout.

    Footer - Flexbox
    The footer content is aligned in a single direction, making Flexbox simple and effective.

3) Use clamp() for fluid type

    clamp() sets a minimum, preferred, and maximum size. The heading grows smoothly as the screen size increases while staying within readable limits.