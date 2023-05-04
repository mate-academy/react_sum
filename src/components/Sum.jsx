export function Sum() {
  return (
    <>
      <Paragraph a = {2} b = {3} />
      <Paragraph a = {-5} b = {5} />
      <Paragraph a = {10}/>
      <Paragraph b = {5} />
      <Paragraph />
    </>
  )
}

const Paragraph = ({ a, b }) => {
  return <p>Sum of {a} and {b} is {a + b}</p>
}

Paragraph.defaultProps = {
  a: 0,
  b: 0,
}
