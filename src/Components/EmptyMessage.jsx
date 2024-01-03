import { useContext } from "react";
import { ItemsContext } from "../store/items-store";
import styles from "./EmptyMessage.module.css";
function EmptyMessage() {
  const contextObj = useContext(ItemsContext);

  const message = contextObj.Items;
  return (
    <p className={styles.message}>
      {message.length === 0 ? "Add Some bills " : null}
    </p>
  );
}
export default EmptyMessage;
