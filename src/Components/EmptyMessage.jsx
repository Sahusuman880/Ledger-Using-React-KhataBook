import styles from "./EmptyMessage.module.css";
function EmptyMessage(props) {
  return (
    <p className={styles.message}>
      {props.message.length === 0 ? "Add Some bills " : null}
    </p>
  );
}
export default EmptyMessage;
