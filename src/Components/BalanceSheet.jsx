import { useContext } from "react";
import { ItemsContext } from "../store/items-store";
import styles from "./BalanceSheet.module.css";
function BalanceSheet() {
  let debit = 0;
  let credit = 0;
  const contextObj = useContext(ItemsContext);

  const Item = contextObj.Items;

  return (
    <>
      {Item.map((element) => {
        if (element.money === "Debit") {
          debit += Number(element.amount);
        } else {
          credit += Number(element.amount);
        }
      })}
      {/* {console.log(debit, credit)} */}
      <div className={styles.container}>
        <p className={styles.para}>Debited Money = {debit}</p>
        <p className={styles.para}>Credited Money ={credit}</p>
        <p className={styles.para}>Balance Money ={debit - credit}</p>
      </div>
    </>
  );
}
export default BalanceSheet;
