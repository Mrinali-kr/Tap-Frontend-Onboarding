Workbook tasks:

1) Explain justify-content vs align-items

    justify-content: Controls alignment on the main axis. Moves items left or right.

    align-items: Controls alignment on the cross axis. Moves items up or down.

2) Understand flex-grow / shrink / basis shorthand

    flex: grow shrink basis;

    Example:
    flex: 1 1 200px;

    Meaning:
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 200px;


    1. grow: Can it take extra space?

    flex-grow: 1;
    Yes.

    2. shrink: Can it become smaller?

    flex-shrink: 1;
    Yes.

    3. basis: Starting size.
    
    flex-basis: 200px;
    Starts at 200px.

3) Note when position: sticky breaks and why

    position: sticky allows an element to behave like a normal positioned element until a specific scroll point is reached. After reaching that point, it stays fixed within its scrolling container.   

    Common reasons position: sticky breaks
        1. Parent element has overflow: hidden, overflow: auto, or overflow: scroll
        2. No offset value is provided
        3. The parent container does not have enough height
        4. The sticky element is inside a flex/grid container with incorrect sizing