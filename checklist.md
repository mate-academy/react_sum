1. [CODE KNOWLEDGE] - Don't make all props required, if you don't need it. Use `defaultProps` for this purpose.
2. [CODE STYLE] - In React, same ruleas in general html components. If there are 3 or more attributes, or values are too long - use new lines.
If no - single line is okay.

BAD EXAMPLE:
```jsx
<Sum
  a={2}
  b={3}
/>
```

GOOD EXAMPLE:
```jsx
<Sum a={2} b={3} />
```

3. [CODE STYLE] - Use string interpolation inside tag content

BAD EXAMPLE:
```jsx
<p>
  Sum of
    {' '}
    {a}
    {' '}
    and
    {' '}
    {b}
    {' '}
    is
    {' '}
    {a + b}
  </p>
```
  
GOOD EXAMPLE:
```jsx
<p>
  {`Sum of ${a} and ${b} is ${a + b}`}
</p>
 ```
