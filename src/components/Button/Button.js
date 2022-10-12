import styles from './Button.module.scss';

const Button = (props) => {
  return (
    <button className={styles.button} text={props.text}>
      {props.children}
    </button>
  );
};

export default Button;

// {/* <button className={styles.button}>Search</button> */}
