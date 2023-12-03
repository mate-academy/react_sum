import React from 'react'

const Sum = (props) => {
    return (
        <>
            <p>{`Sum of ${props.a ? props.a : 0} and ${props.b ? props.b : 0} is ${props.a + props.b}`}</p>
        </>
    )
}

export { Sum }