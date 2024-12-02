import styles from './Button.module.css';

type ButtonProps = {
  children: React.ReactNode; 
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset'; 
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, className, type = 'button' }) => {
  // Dynamisk klass baserat på type
  let typeClass = '';

  switch (type) {
    case 'submit':
      typeClass = styles.addButton;
      break;
    case 'reset':
      typeClass = styles.removeButton;
      break;
    default:
      typeClass = styles.button;
  }
  
  return (
    <button onClick={onClick} type={type} className={`${typeClass} ${className || ''}`} >
      {children}
    </button>
  );
};