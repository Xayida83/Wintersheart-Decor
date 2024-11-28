import styles from './FeedbackMsg.module.css'

type FeedbackMessageProps = {
  type: 'error' | 'loading'; // Typ för att ange vilken typ av meddelande som ska visas
};

const FeedbackMessage = ({ type }: FeedbackMessageProps) => {
  const messages = {
    loading: 'Loading, please wait...',
    error: 'Something went wrong. Please try again later.',
  };

  const className = type === 'error' ? styles.error : styles.loading;

  return <p className={className}>{messages[type]}</p>;
};

export default FeedbackMessage;
