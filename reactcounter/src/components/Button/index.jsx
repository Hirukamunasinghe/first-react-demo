const Button =(props)=>{
    return (
        <button {...props}>
        {props.iconLeft ? <span>{props.iconLeft}</span> : null}
        <span>{props.children}</span>
        </button>
    );
}

export default Button;