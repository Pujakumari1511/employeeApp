import './Button.css';

const Button = ({ text, onClick, type="button", roleColor }) => {
    return (
        <div className={"btn-promote"}>
             <button className={roleColor} type={type} onClick={onClick}>{text}</button>
        </div>
       
    );
};

export default Button;