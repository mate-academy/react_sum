# Sum component
- Replace `<your_account>` with your Github username in the [DEMO LINK](https://luckdenny.github.io/react_sum/)
- Follow the [React task guideline](https://github.com/mate-academy/react_task-guideline#react-tasks-guideline)

## Task
Create a `Sum` component accepting OPTIONAL props `a` and `b` and rendering
a paragraph with the text: "Sum of 2 and 1 is 3". Replace numbers with actual
values. If `a` or `b` are not passed, set them to 0.

`App` should contains the next `Sum` components:
- `a = 2` and `b = 3`
- `a = 5` and `b = -5`
- just `a = 10`
- just `b = 5`
- no params at all

***Extra task (optional):***
Add props validation using `PropTypes` library and `defaultProps`

**Hint**
The linter requires you to put every JSX expression on the new line. So this
markup:
```jsx
<h1>The {color} is great!</h1>
```
should be rewritten like this:
```jsx
<h1>{`The ${color} is great!`}</h1>
```
```jsx
<h1>
  The
  {' '}
  {color}
  {' '}
  is great!
</h1>
```
