Workbook tasks:

1) Calculate specificity for 5 sample selectors

    1. p
    p → element = 1

    Specificity: (0,0,0,1)

    2. .card
    .card → class = 1

    Specificity: (0,0,1,0)

    3. #header
    #header → ID = 1

    Specificity: (0,1,0,0)

    4. nav ul li a
    nav = element
    ul = element
    li = element
    a = element

    Specificity: (0,0,0,4)

    5. #main .card p:hover
    #main = ID = 1
    .card = class = 1
    :hover = pseudo-class = 1
    p = element = 1

    Specificity: (0,1,2,1)

2) Explain content-box vs border-box

content-box: 

Width only applies to content.

    width: 200px;
    padding: 20px;
    border: 5px solid;

    Actual width:

    200 + 40 + 10 = 250px

border-box:

    Width includes content + padding + border.

    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 5px solid;

    Actual width:

    200px total

3) Define your design tokens as CSS custom properties

:root {
    --color-primary: #2563eb;
    --color-text: #222222;
    --color-background: #ffffff;

    --font-main: Arial, sans-serif;

    --fs-body: 1rem;
    --fs-h1: 2rem;

    --space-sm: 1rem;
    --space-lg: 2rem;
}

