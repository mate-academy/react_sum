1. [CODE KNOWLEDGE] - Don't make all props required, if you don't need it. Use `defaultProps` for this purpose.
2. [CODE STYLE] - In React, same rule as in general html components. If there are 3 or more attributes, or values are too long - use new lines.
If no - single line is okay.

BAD EXAMPLE:
```
 <Sum
  a={2}
  b={3}
/>
```

GOOD EXAMPLE:
```
<Sum a={2} b={3} />
```

3. [CODE STYLE] - Use string interpolation inside tag content

BAD EXAMPLE:
```
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
  ```
<p>
  {`Sum of ${a} and ${b} is ${a + b}`}
</p>
 ```
