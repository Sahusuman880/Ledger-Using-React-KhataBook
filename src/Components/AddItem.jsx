import { useContext, useRef } from "react";
import styles from "./AddItem.module.css";
import { ItemsContext } from "../store/items-store";
function AddItem() {
  const contextObj = useContext(ItemsContext);

  const addItems = contextObj.onAddKey;

  const Name = useRef();
  const money = useRef();
  const amount = useRef();
  function formSubmit(event) {
    event.preventDefault();
    let Names = Name.current.value;
    let moneys = money.current.value;
    let amounts = amount.current.value;
    Name.current.value = "";
    money.current.value = "";
    amount.current.value = "";
    addItems(Names, moneys, amounts);
    // console.log(Names, moneys, amounts);
  }

  return (
    <form action="" onSubmit={formSubmit}>
      <div className="container text-center">
        <div className="row row-cols-4">
          <div className="col">
            <input
              type="text"
              className={styles.input_field}
              name=""
              id=""
              ref={Name}
              placeholder="Enter Name of the Customer"
            />
          </div>
          <div className="col">
            <input
              type="text"
              className={styles.input_field}
              name=""
              id=""
              ref={money}
              placeholder="Enter Debit or Credit"
            />
          </div>
          <div className="col">
            <input
              type="number"
              className={styles.input_field}
              name=""
              id=""
              ref={amount}
              placeholder="Enter Amount"
            />
          </div>
          <div className="col">
            <button type="submit" className={`${styles.btn} btn btn-success`}>
              Add
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default AddItem;
