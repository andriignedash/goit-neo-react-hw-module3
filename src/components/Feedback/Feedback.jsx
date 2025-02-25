import PropTypes from "prop-types";
import styles from "./Feedback.module.css";

const Feedback = ({ feedback, total, positive }) => {
  return (
    <div className={styles.feedbackContainer}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total Feedback: {total}</p>
      <p>Positive Feedback: {positive}%</p>
    </div>
  );
};

Feedback.propTypes = {
  feedback: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};

export default Feedback;
