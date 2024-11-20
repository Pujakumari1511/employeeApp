const Button = ({ text, onClick, type="button", roleColor }) => {
    return (
        <button className={roleColor} type={type} onClick={onClick}>{text}</button>
    );
};

export default Button;