// export const Sum = () => ();
export const Sum = ({a,b}) =>{
    const result = a || 0 + b || 0;
    return (
        <p>
            `Sum of ${a} and {b} is {result}`
        </p>
    );
};