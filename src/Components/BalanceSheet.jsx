import styles from "./BalanceSheet.module.css";
function BalanceSheet(props) {
  let debit = 0;
  let credit = 0;

  return (
    <>
      {props.Items.map((element) => {
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
