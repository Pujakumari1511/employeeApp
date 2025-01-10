import styles from './Button.module.css';

const Button = ({ children, onClick, type="button", roleColor }) => {
    return (
        <div>
             <button className={`${styles.btn} ${styles[roleColor]}`} type={type} onClick={onClick}>{children}</button>
        </div>  
    );
};

export default Button;