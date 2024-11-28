type ButtonProps = {
  children: React.ReactNode; 
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, className, type = 'button' }) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {children}
    </button>
  );
};